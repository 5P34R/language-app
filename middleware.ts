"use server"
import { NextRequest } from "next/server";
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import * as jose from 'jose';

interface CustomNextRequest extends NextRequest {
    user: any;
}

export async function middleware(request: CustomNextRequest) {
    const pathname = request.nextUrl.pathname;

    console.log("From Middleware URL => ", request.url);

    const pathsToVerify = ['/admin'];

    if (pathsToVerify.some(path => pathname.startsWith(path))) {
        const cookie = cookies().get('token');

        console.log("From Middleware HItted => ", cookie);

        if (!cookie || typeof cookie === 'undefined' || cookie.value === 'undefined') {
            return redirectToLogin(request);
        }

        try {
            const { payload, protectedHeader } = await jose.jwtVerify(cookie.value, new TextEncoder().encode(process.env.JWT_SECRET));
            console.log("From Middleware Decode => ", payload);

            if (validateAccess(payload, pathname)) {
                request.user = payload;
                return NextResponse.next();
            } else {
                return redirectToUnauthorized(request);
            }
        } catch (error) {
            console.error('Token verification failed:', error);
            return redirectToLogin(request);
        }
    }

    return NextResponse.next();
}

function validateAccess(payload: any, pathname: string): boolean {
    if (pathname.startsWith('/admin') && payload.isAdmin) {
        return true;
    } 
    return false;
}

function redirectToLogin(request: NextRequest) {
    return NextResponse.rewrite(new URL('/login', request.url));
}

function redirectToUnauthorized(request: NextRequest) {
    return NextResponse.redirect(new URL('/login', request.url));
}
