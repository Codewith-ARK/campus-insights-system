import axiosClient from '@/lib/axios';

// Utility to get a cookie by name
function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

// Main CSRF utility to ensure token is fetched & included in headers
export async function getCSRFHeaders() {
  try {
    // Call Django endpoint that sets the CSRF cookie
    await axiosClient.get('/api/csrf/');

    // Extract the csrf token from cookie
    const csrfToken = getCookie('csrftoken');

    if (!csrfToken) {
      throw new Error("CSRF token not found in cookies.");
    }

    return {
      'X-CSRFToken': csrfToken,
    };
  } catch (error) {
    console.error("Failed to get CSRF token:", error);
    throw error;
  }
}
