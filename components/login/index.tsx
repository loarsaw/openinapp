import {
  IconBrandApple,
  IconBrandDiscord,
  IconBrandDiscordFilled,
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandGoogle,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandXFilled,
} from "@tabler/icons-react";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("klakdskla@gmail.com");
  const [password, setPassword] = useState("329230490");

  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden">
          <div className="text-[8rem] font-bold text-white">Base</div>
          <div className="absolute bottom-3">
            <div className="grid grid-cols-4">
              <div className=" text-white p-1">
                <IconBrandDiscordFilled size={"3rem"} />
              </div>
              <div className=" text-white p-1">
                <IconBrandGithubFilled size={"3rem"} />
              </div>
              <div className=" text-white p-1">
                <IconBrandXFilled size={"3rem"} />
              </div>
              <div className=" text-white p-1">
                <IconBrandLinkedin size={"3rem"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <div>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Sign In</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Click on Google to Sign In
            </p>
            <div className="w-full flex flex-row space-x-2 mb-5">
              <div
                onClick={() => signIn("google")}
                className="w-[50%] hover:cursor-pointer p-2 flex items-center space-x-3 justify-center rounded-lg bg-gray-100"
              >
                <div>
                  <IconBrandGoogle />
                </div>
                <div>
                  <p>Google</p>
                </div>
              </div>
              <div className="w-[50%] p-2 flex items-center space-x-3 justify-center rounded-lg bg-gray-100">
                <div>
                  <IconBrandApple />
                </div>
                <div>
                  <p>Apple</p>
                </div>
              </div>
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-2 outline-none border-none"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </div>
            <button
              onClick={() => signIn("google")}
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              Forgot Password ?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
