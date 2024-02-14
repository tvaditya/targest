import React from "react";
import { useNavigate} from "react-router-dom";
import {ModeToggle} from "@/shadcn/components/mode-toggle.jsx";

const options = [
    {
        route: "/",
        name: "Página inicial"
    },
    {
        route: "/projects",
        name: "Meus projetos"
    },
    {
        route: "/login",
        name: "Página de login"
    },
    {
        route: "/signup",
        name: "Cria sua conta"
    },
]
export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className={"h-screen w-[200px] bg-red-500"}>
            <div className={"text-3xl font-bold p-5"}>Logo</div>
            {options.map((option) => (
                <div key={"option.route"}
                     role={"button"}
                     className={"p-5"}
                     onClick={() => navigate(option.route)}
                >{option.name}</div>
                ))}
            <ModeToggle/>
        </div>
    )
}