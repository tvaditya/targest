import React from "react";

export default function Sidebar() {
    const options = [
        {
            route: "/",
            name: "Página inicial"
        },
        {
            route: "/profile",
            name: "Meus projetos"
        },
    ]

    return (
        <div className={"h-screen w-[200px] bg-red-500"}>
            <div className={"text-3xl font-bold p-5"}>Logo</div>
            {options.map((option) => (
                <div key={"option.route"} className={"p-5"}>{option.name}</div>
                ))}
        </div>
    )
}