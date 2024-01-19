"use client"
import { useState } from 'react';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter()
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        console.log('Logging in with:', { username, password });

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        console.log(response);
        if (!response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            return;
        }

        router.push('/');
        

    };

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:block md:block sm:hidden mb">
                    <img src="/icon.jpg" alt="Company Icon" className="h-14" />
                    <div className="w-full font-medium flex-wrap text-2xl mt-10 p-2">
                        Website Administration
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5 px-10">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>
                    <div className="mt-10 relative mb-4">
                        <Label htmlFor="username" className="leading-7 text-sm text-gray-600">username</Label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <Label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <Button
                        onClick={handleLogin}
                        className="mt-20 text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded-full text-lg font-medium"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </section>
    )
}