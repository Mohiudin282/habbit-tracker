import { generateRandomString } from "../utils/utils";
import React from "react";
import { Nav } from "./Nav";

interface Props {
    children?: React.ReactNode;
}

export const Page = ({ children }: Props) => {
    //We need to syncronize with the external system in this case.
    //browser object(localStrorage) also called browser API.
    React.useEffect(() => {
        const ID = localStorage.getItem("ID");
        if (!ID) {
            localStorage.setItem("ID", generateRandomString(16))
        }
    }, []);
    return (
        <div className="flex flex-col gap-8 p-4">
            <Nav />

            <main className="m-auto mt-4 flex w-full flex-col items-center gap-8">
                {children}
            </main>
        </div>
    );
};