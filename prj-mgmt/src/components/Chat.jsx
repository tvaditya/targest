import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/shadcn/components/ui/avatar.jsx";
import {Separator} from "@/shadcn/components/ui/separator";
import {Input} from "@/shadcn/components/ui/input";
import {Button} from "@/shadcn/components/ui/button.jsx";
import {ScrollArea} from "@/shadcn/components/ui/scroll-area.jsx";
import { useAuthContext} from "@/hooks/useAuthContext.js";
// import {useSubcollection} from "@/hooks/useSubcollection.js";

export default function Chat({selectedChat}) {
    const {user} = useAuthContext();
    const getInitials = (str) => {
        if (!str) {
            str = user.displayName;
        }
        return str.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    }

    const messages = null;
    const chats = null;

    return (
        <div className={"fixed bottom-12 right-[248px] h-[500px] border border-foreground/10 " +
            "w-96 bg-input rounded-lg p-5 drop-shadow"}>
            <div className={"flex flex-col h-full"}>
                <div className={"flex items-center gap-3"}>
                    {selectedChat && (
                        <Avatar>
                            <AvatarImage src=""/>
                            <AvatarFallback className={"bg-primary/50"}>{getInitials(selectedChat?.recipient)}</AvatarFallback>
                         </Avatar>
                    )}

                    <p className={"font-medium"}>{selectedChat?.recipient || "Conversas"}</p>
                </div>
                <Separator className={"bg-foreground/10 my-4"}/>
                {/*<div className={"flex-grow"}>Mensagens</div>*/}
                <ScrollArea className={"flex-grow"}>
                    {selectedChat
                        ? messages?.map(message => (
                        <div key={"message.id"}>
                            {message.content}
                        </div>
                    )) || (
                        <p className={"text-foreground/50 text-sm"}>Não há mensagens a exibir.</p>
                    ) : chats?.map(chat => (
                        <div key={"chat.id"}>
                            {chat.recipient}
                        </div>
                    )) || (
                        <p className={"text-foreground/50 text-sm"}>Não há conversas a exibir.</p>
                    )
                    }
                </ScrollArea>
                <div className={"flex gap-2.5"}>
                    <Input type={"text"}/>
                    <Button>Enviar</Button>
                </div>
            </div>
        </div>
    )
}