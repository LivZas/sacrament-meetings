"use client";

import { useActionState } from "react";
import { authenticate } from "@/lib/actions";

export function LoginForm(){

    const [
        errorMessage,
        formAction,
        isPending
    ] = useActionState(
        authenticate,
        undefined
    );

     return (
    <form action={formAction}
    className="space-y-4">
      <div>
        <label htmlFor="email"
        className="block text-gray-200 font-medium mb-1">Email</label>
        <input id="email" type="email" name="email" required 
        className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label htmlFor="password"
        className="block text-gray-200 font-medium mb-1">Password</label>
        <input id="password" type="password" name="password" minLength={6} required 
        className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"/>
      </div>
      <button aria-disabled={isPending} type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold py-2 rounded-md">
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>
      {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}
    </form>
  );
}
