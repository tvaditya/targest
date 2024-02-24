import LogoSvg from "../assets/logo.svg";
import React from "react";

export default function LogoMain({size}) {
    const height = size === "small" ? "h-6" : "h-8";
    const fontSize = size === "small" ? "text-xl" : "text-2xl";
    return (
        <div className={"flex items-center gap-3"}>
            <img className={height} src={LogoSvg} alt={"Logo"}/>
            <h2 className={`${fontSize} tracking-widest font-medium mb-0.5`}>
            {/*<h2 className={"text-2xl tracking-widest font-medium mb-0.5"}>*/}
                get<span className={"text-primary"}>It</span>Done!
            </h2>
        </div>
    )
}


