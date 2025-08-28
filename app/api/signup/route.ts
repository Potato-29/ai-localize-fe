import { NextRequest, NextResponse } from 'next/server';
import db from '@/app/db/drizzle';
import { users } from '@/app/db/schema';
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1).then(rows => rows[0]);
        if (existingUser) {
            return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        const [newUser] = await db.insert(users).values({
            email,
            password: hashedPassword,
            accessToken: '', // Provide a default or generated value as needed
            apiKey: '',      // Provide a default or generated value as needed
            // Add any other required fields with default or generated values
        }).returning();

        return NextResponse.json({ message: 'Signup successful', userId: newUser.id });
    } catch (err) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
