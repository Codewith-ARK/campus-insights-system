import axiosClient from "@/lib/axios";
import { getCSRFHeaders } from "./csrf";

/**
 * Makes an authenticated POST request with CSRF headers.
 * @param {string} url - The API endpoint.
 * @param {object} data - The request payload.
 * @returns {Promise} - Axios response promise.
 */
export async function makeAuthenticatedReq(url, data) {
  const csrfHeaders = await getCSRFHeaders();
  return axiosClient.post(url, data, {
    headers: csrfHeaders,
  });
}