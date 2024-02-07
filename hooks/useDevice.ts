import { useState, useEffect } from "react";

const useDeviceDetection = () => {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);

      if (isMobile) {
        setDesktop(false);
      } else {
        setDesktop(true);
      }
    };

    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);

  return isDesktop;
};

export default useDeviceDetection;
