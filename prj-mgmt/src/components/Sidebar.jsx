import React from "react";
import { useNavigate} from "react-router-dom";

import {Button} from "@/shadcn/components/ui/button";
import {Separator} from "@/shadcn/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn/components/ui/avatar"

import {
    ExitIcon,
    LightningBoltIcon,
    PersonIcon,
    DashboardIcon,
    FileTextIcon,
    ChatBubbleIcon,
    CalendarIcon, InfoCircledIcon
} from "@radix-ui/react-icons";
import {useLogout} from "@/hooks/useLogout.js";
import LogoMain from "./Logo";
import { useAuthContext} from "@/hooks/useAuthContext.js";
import LabelSvg from "@/components/Label.jsx";


const userOptions = [
    {
        route: "/activity",
        name: "Minha atividade",
        icon: <LightningBoltIcon className={"h-4 w-4"}/>
    },
    {
        route: "/profile",
        name: "Meu perfil",
        icon: <PersonIcon className={"h-4 w-4"}/>
    },
];

const projectOptions = [
    {
        route: "/",
        name: "Dashboard",
        icon: <DashboardIcon className={"h-4 w-4"}/>
    },
    {
        route: "/tasks",
        name: "Tarefas",
        icon: <FileTextIcon className={"h-4 w-4"}/>
    },
    {
        route: "/chats",
        name: "Conversas",
        icon: <ChatBubbleIcon className={"h-4 w-4"}/>
    },
    {
        route: "/calendar",
        name: "Calendário",
        icon:<CalendarIcon className={"h-4 w-4"}/>
    },
];

const labelOptions = [
    {
        route: "/a",
        name: "Alta Prioridade",
        icon: <LabelSvg color={"#FF0000"}/>
    },
    {
        route: "/b",
        name: "Media Prioridade",
        icon: <LabelSvg color={"#FFA500"}/>
    },
    {
        route: "/c",
        name: "Baixa Prioridade",
        icon: <LabelSvg color={"#FFFF00"}/>
    },
    {
        route: "/d",
        name: "Em stand by",
        icon: <LabelSvg color={"#008000"}/>
    },
];
export default function Sidebar() {
    const navigate = useNavigate();
    const {logout, error, isPending} = useLogout();
    const {user} = useAuthContext();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className={"h-screen w-[250px] bg-accent border border-border"}>
            <div className={"p-6"}>
                <LogoMain size={"small"}/>
            </div>
            <div className={"flex gap-3 p-5"}>
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className={"bg-primary/50"}>CN</AvatarFallback>
                </Avatar>
                <div>
                    <p className={"font-medium"}>{user.displayName}</p>
                    <p className={"text-muted-foreground/75 text-sm"}>Premium Account</p>
                </div>
            </div>
            {userOptions.map((option) => (
                <div key={"option.route"}
                     role={"button"}
                     className={"px-5 py-2.5 flex items-center gap-3 cursor-pointer"}
                     onClick={() => navigate(option.route)}
                >
                    {option.icon}
                    <p className={"text-md font-medium"}>{option.name}</p>
                </div>
                ))}

            <Separator className={"my-4"}/>

            <h2 className={"font-semibold text-xl px-5 mb-5"}>Projetos</h2>

            {projectOptions.map((option) => (
                <div key={"option.route"}
                     role={"button"}
                     className={"px-5 py-2.5 flex items-center gap-3 cursor-pointer"}
                     onClick={() => navigate(option.route)}
                >
                    {option.icon}
                    <p className={"text-md font-medium"}>{option.name}</p>
                </div>
            ))}

            <Separator className={"my-4"}/>

            {labelOptions.map((option) => (
                <div key={"option.route"}
                     role={"button"}
                     className={"px-5 py-2.5 flex items-center gap-3 cursor-pointer"}
                     onClick={() => navigate(option.route)}
                >
                    {option.icon}
                    <p className={"text-md font-medium"}>{option.name}</p>
                </div>
            ))}

            <Separator className={"my-4"}/>

            <Button className={"px-5 opacity-50"} variant={"ghost"} onClick={handleLogout}>
                <InfoCircledIcon className={"w-4 h-4 mr-2"}/>
                Central de Ajuda
            </Button>
            <Button className={"px-5 opacity-50"} variant={"ghost"} onClick={handleLogout}>
                <ExitIcon className={"w-4 h-4 mr-2"}/>
                Sair da conta
            </Button>
        </nav>
    )
}