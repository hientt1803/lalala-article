"use client";

import React from "react";
interface ILoading {
  open?: boolean;
}
const LoadingGlobal = (props: ILoading) => {
  const { open = false } = props;
  return (
    <React.Fragment>
      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 min-w-[100vw] z min-h-screen flex justify-center items-center bg-[#f1f1f1] opacity-95 z-50">
          <div className="balls-loading-effect">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default LoadingGlobal;
