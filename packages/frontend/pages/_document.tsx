import {Head, Html, Main, NextScript} from 'next/document'
import React from "react";
import {css} from "../helpers/css";
import {vars} from "../environment/vars";

export default function Document() {
    console.log(vars.NEXT_PUBLIC_GA_ID)
    return (
        <Html>
            <Head title={"The Doge NFT"}>
            </Head>
            <body className={css("font-ComicNeue", "bg-pixels-yellow-100", "mr-0")} style={{marginRight: 0}}>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
