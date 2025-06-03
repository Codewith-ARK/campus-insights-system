import AdminWrapper from "@/components/AdminWrapper";
import AuthWrapper from "@/components/AuthWrapper";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export const metadata = {
  title: "Campus Insights System - Admin",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    // <AdminWrapper>
      <Sidebar>{children}</Sidebar>
    // </AdminWrapper>
  );
}
