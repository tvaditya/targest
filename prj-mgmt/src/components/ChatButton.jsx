import React from "react";
import { Button} from "@/shadcn/components/ui/button.jsx";
import {ChatBubbleIcon} from "@radix-ui/react-icons";

export default function ChatButton({setChatIsOpen}) {
    return (
        <Button className={"fixed bg-primary text-background bottom-12 right-[224px rounded-full p-2.5"}
                variant={"outline"}
                size={"icon"}
                onClick={() => setChatIsOpen((prev) => !prev)}
        >
            <ChatBubbleIcon className={"h-8 w-8"} />
        </Button>
    )
}