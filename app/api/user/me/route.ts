import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { users } from "@/app/db/schema";
import db from "@/app/db/drizzle";
import { eq } from "drizzle-orm";

// Dummy function to simulate token validation and user fetching
function getUserFromToken(token: string | undefined) {
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded as { userId: string; email: string };
  } catch (err) {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");

  const user = getUserFromToken(token);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dbUser = await db
    .select({
      id: users.id,
      email: users.email,
    })
    .from(users)
    .where(eq(users.email, user.email));

  if (!dbUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ dbUser });
}
