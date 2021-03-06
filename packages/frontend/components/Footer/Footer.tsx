import {css} from "../../helpers/css";
import Image from "next/image";
import Link, {LinkSize, LinkType} from "../Link/Link";
import React from "react";
import {actionLinks, tradeLinks, readLinks, socialLinks} from "./Links";

export const Footer = () => {
    return <footer className={css("grow-0", "py-4", "block", "mt-16")}>
        <div className={css("flex")}>
            <Image alt={"pleasr logo"} src={"/images/pleasrlogo.svg"} height={51} width={127.5}/>
        </div>
        <div className={css("grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-2", "xl:grid-cols-4", "gap-x-10", "gap-y-8", "xl:gap-y-0")}>
            <FooterItem title={"Talk"} items={socialLinks}/>
            <FooterItem title={"Read"} items={readLinks}/>
            <FooterItem title={"Do"} items={actionLinks}/>
            <FooterItem title={"Acquire"} items={tradeLinks}/>
        </div>
    </footer>
}

interface FooterItemProps {
    title: string;
    items: {title: string, link: string}[]
}


const FooterItem = ({title, items}: FooterItemProps) => {
    return <div className={css("text-left")}>
        <div className={css("font-bold", "border-b-2", "border-dashed", "border-pixels-yellow-200", "mb-2", "text-gray-600",
            "inline-block", "text-sm", "font-bold")}>
            {title}
        </div>
        <div className={css("grid", "grid-rows-3", "grid-flow-col", "gap-x-2", "font-normal")}>
            {items.map(item => <Link key={item.link} size={LinkSize.xs} type={LinkType.Grey} isExternal href={item.link}>{item.title}</Link> )}
        </div>
    </div>
}