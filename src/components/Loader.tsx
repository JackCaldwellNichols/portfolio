import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="K" transform="translate(35.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill="currentColor"
                  d="M 0.71875 -6.4375 C 4.25 -6.4375 6.859375 -6.765625 8.546875 -7.421875 C 10.242188 -8.078125 11.40625 -9.285156 12.03125 -11.046875 C 12.65625 -12.804688 12.96875 -15.519531 12.96875 -19.1875 L 12.96875 -84.03125 L 24.59375 -84.03125 L 24.59375 -18.984375 C 24.59375 -13.929688 24.070312 -9.898438 23.03125 -6.890625 C 21.988281 -3.890625 20.132812 -1.660156 17.46875 -0.203125 C 14.8125 1.242188 11.097656 1.96875 6.328125 1.96875 L 0.71875 1.96875 Z M 0.71875 -6.4375"
                />
              </g>
            
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
