"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    if (username == '' || password == '')
      throw new Error('Information is not filled!')
    e.preventDefault();
    console.log("Logging in with:", username, password);
    router.push('/reservation');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3D0D0D]">
      <div className="bg-[#6B3A3A] flex flex-col justify-center px-8 py-10 rounded-3xl shadow-lg w-1/3">
        <h2 className="text-white text-center text-2xl font-semibold mb-4">Login</h2>

        <div className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {setUsername(e.target.value)
                console.log(username)
              }}
              className="w-full p-2 rounded-2xl border border-gray-400 bg-transparent text-white focus:ring-1 focus:ring-gray-300"
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)
                console.log(password)}
              }
              className="w-full p-2 rounded-2xl border border-gray-400 bg-transparent text-white focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div className="flex items-center justify-between text-gray-200 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> Remember Me
            </label>
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-300 text-black py-2 rounded-2xl font-semibold hover:bg-gray-400 transition"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        <p className="text-gray-200 text-center text-sm mt-4">
          Don’t have an account? <a href="#" className="font-semibold underline">Register</a>
        </p>
      </div>
    </div>
  );
}
