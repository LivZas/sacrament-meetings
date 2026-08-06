import { signOut } from "@/auth";

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/' });
      }}
    >
      <button type="submit"
      className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition"> Sign Out</button>
    </form>
  );
}