import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axiosClient from "@/lib/axios";
import { deleteTokenCookie, setTokenCookie } from "@/utils/cookies";

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      isLoggedIn: false,
      loading: false,
      error: null,

      // Action to set loading state
      setLoading: (loading) => set({ loading }),

      // Action to set error state
      setError: (error) => set({ error }),

      // Login function
      login: async (credentials) => {
        set({ loading: true });
        try {
          const res = await axiosClient.post("/api/users/login/", credentials);
          set({ isLoggedIn: true });
          set({ user: res.data.user });
          await setTokenCookie(res.data.token);
          return res;
        } catch (error) {
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      // Logout function
      logout: async () => {
        set({ loading: true });
        try {
          set({
            user: null,
            isLoggedIn: false,
            error: null,
          });
          await deleteTokenCookie();
        } catch (error) {
          console.error("Logout failed:", error);
          set({ error: error.message });
        } finally {
          set({ loading: false });
        }
      },

      // Clear all state (useful for logout)
      clearState: () => {
        set({
          user: null,
          isLoggedIn: false,
          loading: false,
          error: null,
        });
      },

      // Check authentication status and fetch user data
      checkAuth: async () => {
        set({ loading: true });
        try {
          const res = await axiosClient.get("/api/me");
          set({ user: res.data, isLoggedIn: true });
        } catch (error) {
          set({ user: null, isLoggedIn: false });
        } finally {
          set({ loading: false });
        }
      },

      // Check session validity using /api/me endpoint
      validateSession: async () => {
        try {
          const res = await axiosClient.get("/api/me");
          // If we get a successful response, the session is valid
          set({ user: res.data, isLoggedIn: true });
          return true;
        } catch (error) {
          // If we get an error, clear the session
          set({ user: null, isLoggedIn: false });
          return false;
        }
      },
    }),
    {
      name: "auth-storage", // name of the item in storage
      storage: createJSONStorage(() => sessionStorage), // using sessionStorage for better security
      partialize: (state) => ({
        // only persist these states
        user: state.user,
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);

// Set up periodic session validation
if (typeof window !== "undefined") {
  const SESSION_CHECK_INTERVAL = 60 * 60 * 1000; // Check every hour
  let intervalId;

  // Clear any existing interval when the module reloads
  if (intervalId) {
    clearInterval(intervalId);
  }

  // Set up new interval
  intervalId = setInterval(async () => {
    const state = useAuthStore.getState();
    if (state.isLoggedIn) {
      await state.validateSession();
    }
  }, SESSION_CHECK_INTERVAL);

  // Clean up on window unload
  window.addEventListener("beforeunload", () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
}
export default useAuthStore;
