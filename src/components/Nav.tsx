import { Button } from "./Button";
//import classNames from "classnames";

export const Nav = () => {
  return (
    <>
      <div className="sticky m-auto flex h-20 w-full items-center justify-between rounded-2xl bg-gray bg-opacity-50 px-8 py-2 backdrop-blur-xl sm:w-[600px]">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" className="size-10" alt="logo" />
          Pattern
        </a>

       
      </div>
    </>
  );
}