import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/login",
    },

    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            const isProtected = 
            nextUrl.pathname.startsWith("/meetings/new") ||
            nextUrl.pathname.includes("/edit") ||
            nextUrl.pathname.includes("/delete");

            if (isProtected) {
                if (isLoggedIn) {
                    return true;
                }

                return false;

            }

                if (isLoggedIn && nextUrl.pathname === "/login") {
                    return Response.redirect(new URL("/", nextUrl));
                }

            return true;
        },
    },

    providers: [],

} satisfies NextAuthConfig;