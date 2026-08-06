import { registerUser } from "@/lib/actions";

export default function RegisterPage(){

    return (

        <main className="min-h-screen flex items-center justify-center">
             <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6">
            <form action={registerUser}
            className="space-y-4 w-full">

                <h1 className="text-2xl text-white font-bold mb-6 text-center">
                    Create Account</h1>

                    <label
                    htmlFor="name"
                    className="block text-gray-200 font-medium mb-1">
                        Name
                    </label>

                    <input name="name"
                    placeholder="Name"
                    required
                    className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"/>


                    <label
                    htmlFor="email"
                    className="block text-gray-200 font-medium mb-1">
                        Email
                    </label>

                    <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"/>
                    
                    <label
                    htmlFor="password"
                    className="block text-gray-200 font-medium mb-1">
                        Password
                    </label>

                    <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    minLength={6}
                    required
                    className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"/>

                    <button
                    type="submit"
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition">
                        Register
                        </button>
                    </form>
                </div>
            </main>
    );
}