import React, {PropsWithChildren} from 'react';
import Link, {LinkProps} from "next/link";
import {GH_URL} from "~/js/constants";


function HeaderLink(props: PropsWithChildren<LinkProps>) {
    return (
        <Link {...props} className={"py-3 px-6 hover:bg-white/15 rounded-full"}></Link>
    )
}

function MainLayout({children}: PropsWithChildren) {
    return (
        <>
            <header className={"fixed h-max inset-0 bg-gray-300/10"}>
                <nav className={"p-5 flex justify-between"}>
                    <div id={"logo"} className={"text-xl font-bold"}>
                        <Link href={"/"}>Countries challenge
                        </Link>
                    </div>
                    <ul className={"flex items-center gap-2"}>
                        <li>
                            <HeaderLink href={GH_URL}>Github</HeaderLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}

export default MainLayout;
