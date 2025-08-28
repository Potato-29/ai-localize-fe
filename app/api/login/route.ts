import { NextRequest, NextResponse } from 'next/server';
import db from '@/app/db/drizzle';
import { users } from '@/app/db/schema';
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
        }

        const user = await db.select().from(users).where(eq(users.email, email)).limit(1).then(rows => rows[0]);

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Here you would generate a session or JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        // Optionally, set the token as a cookie
        const response = NextResponse.json({ message: 'Login successful', userId: user.id });
        response.cookies.set('token', token, {  maxAge: 3600 });
        return response;
    } catch (err) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}