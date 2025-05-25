import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export const metadata = {
  title: "Campus Insights System - Settings",
  description: "",
};


export default function RootLayout({ children }) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
}
