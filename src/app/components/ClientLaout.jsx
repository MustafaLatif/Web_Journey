"use client";

import { usePathname } from "next/navigation";
import MainHeader from "../header/header";
import MiniHeader from "../header/header2";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";
  const signupPage = pathname === "/signup"

  return (
    <>
      <MainHeader />
      {
      isLoginPage || !signupPage && (
        <MiniHeader />
      )
      }
      {children}
    </>
  );
}
