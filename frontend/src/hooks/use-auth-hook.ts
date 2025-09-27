"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function useAuth(redirectTo: string = "/login") {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("auth_token");

    if (!token) {
      setIsAuthenticated(false);
      router.push(redirectTo);
    } else {
      setIsAuthenticated(true);
    }
  }, [redirectTo, router]);

  return { isAuthenticated };
}
