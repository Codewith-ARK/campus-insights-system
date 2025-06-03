import useAuthStore from "@/store/useAuthStore";

export default function isAdmin() {
  const user = useAuthStore((state) => state.user);
  return user?.role == "admin";
}
