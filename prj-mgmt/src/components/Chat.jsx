import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/shadcn/components/ui/avatar.jsx";
import {Separator} from "@/shadcn/components/ui/separator";
import {Input} from "@/shadcn/components/ui/input";
import {Button} from "@/shadcn/components/ui/button.jsx";
export default function Chat() {
    return (
        <div className={"fixed bottom-12 right-[248px] h-[500px] w-96 bg-input rounded-lg p-5"}>
            <div className={"flex flex-col h-full"}>
                <div className={"flex items-center gap-3"}>
                    <Avatar>
                        <AvatarImage src=""/>
                        <AvatarFallback className={"bg-primary/50"}>CN</AvatarFallback>
                    </Avatar>
                    <p className={"font-medium"}>Corin Thians</p>
                </div>
                <Separator className={"bg-foreground/10 my-4"}/>
                <div className={"flex-grow"}>Mensagens</div>
                <div className={"flex gap-2.5"}>
                    <Input type={"text"}/>
                    <Button>Enviar</Button>
                </div>
            </div>
        </div>
    )
}