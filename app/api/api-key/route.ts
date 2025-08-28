import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/app/db/drizzle";
import { apiKeys, users } from "@/app/db/schema";
import { eq } from "drizzle-orm";

const SALT_ROUNDS = 10;

export async function encryptKey(
  keyName: string,
  userId: string
): Promise<string> {
  const combinedKey = `${userId}:${keyName}`;
  return await bcrypt.hash(combinedKey, SALT_ROUNDS);
}

export async function decryptKey(
  keyName: string,
  userId: string,
  hash: string
): Promise<boolean> {
  const combinedKey = `${userId}:${keyName}`;
  return await bcrypt.compare(combinedKey, hash);
}

export async function POST(req: NextRequest) {
  try {
    const { keyName, userId } = await req.json();

    console.log("keyname", keyName);

    if (!keyName || typeof keyName !== "string") {
      return NextResponse.json({ error: "Invalid key name" }, { status: 400 });
    }

    const existingKeys = await db
      .select()
      .from(apiKeys)
      .where(eq(apiKeys.userId, userId));

    const apiKey = await encryptKey(keyName, userId);

    const insertKey = await db.insert(apiKeys).values({
      apiKey,
      keyName,
      userId,
    });

    if (!insertKey) {
      return NextResponse.json(
        { error: "Failed to create API key" },
        { status: 500 }
      );
    }

    return NextResponse.json({ apiKey });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const keys = await db
      .select()
      .from(apiKeys)
      .where(eq(apiKeys.userId, userId));

    return NextResponse.json({ keys });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
