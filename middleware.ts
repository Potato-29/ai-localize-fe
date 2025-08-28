import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// Example function to check if user is authenticated
function isAuthenticated(req: NextRequest): boolean {
  // You can check cookies, headers, or session here
  // For example, check for a cookie named 'token'
  const token = req.cookies.get("token");
  return !!token;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const userIsAuth = isAuthenticated(req);

  // Protect /dashboard route
  if (pathname.startsWith("/dashboard")) {
    if (!userIsAuth) {
      // Redirect to login if not authenticated
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/login";
      console.log(userIsAuth);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Prevent logged-in users from accessing /login or /signup
  if (userIsAuth && (pathname === "/login" || pathname === "/signup")) {
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = "/dashboard";
    return NextResponse.redirect(dashboardUrl);
  }

  // Allow all other requests
  return NextResponse.next();
}

// Specify the paths to apply the middleware to
export const config = {
  matcher: ["/dashboard", "/login", "/signup"],
};
