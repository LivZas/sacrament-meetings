import { LoginForm } from "@/components/login-form";

export default function LoginPage(){

    return (

        <main className="min-h-screen flex items-center justify-center">
        
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6">

        <h1 className="text-2xl text-white font-bold mb-6 text-center">
            Sign in
            </h1>

            <LoginForm />

            </div>
            </main>
    );
}