"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { LogOutIcon, Menu, X } from "lucide-react";
import { useCurrentUser } from "@/hooks/get-current-user";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/app/store/store";
import { destroyCookie } from "nookies";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isLoggedIn } = useCurrentUser();
  const { logout } = useStore();
  const navigator = useRouter();

  const handleLogout = () => {
    navigator.push("/");
    destroyCookie(null, "token");
    logout();
  };

  return (
    <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                <span className="text-black font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-xl group-hover:text-primary transition-colors">
                LocalizeSDK
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div
              className={`${
                !isLoggedIn ? "ml-10" : ""
              } flex items-baseline space-x-4`}
            >
              <Link
                href="/"
                className={`text-foreground ${
                  pathname === "/" ? "border-1 bg-input/30 border-primary" : ""
                } hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-primary/5`}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className={`text-muted-foreground ${
                  pathname === "/pricing"
                    ? "border-1 bg-input/30 border-primary"
                    : ""
                } hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-primary/5`}
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className={`text-muted-foreground ${
                  pathname === "/docs"
                    ? "border-1 bg-input/30 border-primary"
                    : ""
                } hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-primary/5`}
              >
                Documentation
              </Link>
              <Link
                href="/dashboard"
                className={`text-muted-foreground ${
                  pathname === "/dashboard"
                    ? "border-1 bg-input/30 border-primary"
                    : ""
                } hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-primary/5`}
              >
                Dashboard
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            {isLoggedIn && (
              <Button
                variant="ghost"
                className="hover:bg-red-500! hover:text-white"
                size="sm"
                onClick={() => handleLogout()}
              >
                <LogOutIcon />
              </Button>
            )}
            {isLoggedIn === false && (
              <>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:text-secondary hover:bg-secondary/10"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-primary/25 transition-all duration-300"
                  >
                    Get Started Free
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/50 backdrop-blur-sm rounded-lg mt-2">
              <Link
                href="/"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Documentation
              </Link>
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </Link>
              <div className="flex space-x-2 px-3 py-2">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full hover:text-secondary hover:bg-secondary/10"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
