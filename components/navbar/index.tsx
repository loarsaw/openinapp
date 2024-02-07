import useDeviceDetection from "@/hooks/useDevice";
import React from "react";
import {
  IconBell,
  IconCalendar,
  IconDashboard,
  IconFileInvoice,
  IconMenu2,
  IconNotification,
  IconSettings,
  IconTallymarks,
  IconUpload,
  IconUser,
  IconX,
} from "@tabler/icons-react";
type Props = {
  hamburger: boolean;
  setHamburger: (value: boolean | ((prev: boolean) => boolean)) => void;
};

const Navbar = ({ hamburger, setHamburger }: Props) => {
  const isDesktop = useDeviceDetection();
  return (
    <>
      {isDesktop ? (
        <div className="w-64 h-screen transition-transform sm:translate-x-0">
          <div className=" p-5 h-20 flex items-center justify-center">
            <p className="text-lg font-extrabold leading-3">Base</p>
          </div>
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconDashboard />
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconUpload />
                  <span className="flex-1 ms-3 whitespace-nowrap">Upload</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconFileInvoice />
                  <span className="flex-1 ms-3 whitespace-nowrap">Invoice</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconTallymarks />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Schedule
                  </span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconCalendar />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Calendar
                  </span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconNotification />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Notifications
                  </span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconSettings />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div
          className={`w-[100%] h-screen transition-transform sm:translate-x-0 ${
            hamburger ? "" : "hidden"
          }`}
        >
          <div className=" p-5 h-20 flex items-center justify-center">
            <div className="w-[50%] flex justify-center">
              <p className="text-lg ">Base</p>
            </div>
            <div className=" w-[50%] flex justify-end">
              <IconX onClick={() => setHamburger((prev) => !prev)} />
            </div>
          </div>
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconDashboard />
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconUpload />
                  <span className="flex-1 ms-3 whitespace-nowrap">Upload</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconFileInvoice />
                  <span className="flex-1 ms-3 whitespace-nowrap">Invoice</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconTallymarks />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Schedule
                  </span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconCalendar />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Calendar
                  </span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconNotification />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Notifications
                  </span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconSettings />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
