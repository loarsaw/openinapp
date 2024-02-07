import useDeviceDetection from "@/hooks/useDevice";
import { IconBell, IconMenu2, IconUser, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import Navbar from "../navbar";
import { signIn, signOut, useSession } from "next-auth/react";
import Login from "../login";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);
  const { data, status } = useSession();
  return (
    <div>
      {status == "authenticated" ? (
        <div className="flex flex-row">
          <Navbar hamburger={hamburger} setHamburger={setHamburger} />

          <div className={`w-full ${hamburger ? "hidden" : ""}`}>
            <div className="h-20  w-full flex ml-3 flex-row space-x-5">
              <div className="flex h-20 items-center md:hidden">
                {hamburger ? (
                  <IconX onClick={() => setHamburger((prev) => !prev)} />
                ) : (
                  <IconMenu2 onClick={() => setHamburger((prev) => !prev)} />
                )}
              </div>
              <div className="w-[90%]  flex h-20 items-center">
                <p className="font-semibold">Upload CSV</p>
              </div>
              <div className=" w-[10%] flex flex-row justify-center">
                <div className="p-3 rounded-full flex items-center justify-center">
                  <IconBell />
                </div>
                <div className="p-3 rounded-full  flex items-center justify-center">
                  <IconUser onClick={() => signOut()} />
                </div>
              </div>
            </div>
            <div className="p-5 w-full h-full flex items-center justify-center ">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Layout;
