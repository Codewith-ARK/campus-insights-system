// app/api/logout/route.js (Next 13+)
import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ message: "Logged out" });
  res.cookies.set("access_token", "", { maxAge: 0 });
  res.cookies.set("refresh_token", "", { maxAge: 0 });
  return res;
}
