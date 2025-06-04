"use server";

import { cookies } from "next/headers";

export async function setTokenCookie(token) {
  const cookieStore = await cookies();
  cookieStore.set("token", token);
}

export async function getTokenCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  return token;
}

export async function deleteTokenCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}
