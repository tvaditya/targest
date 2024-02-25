import React from "react";
import { Skeleton } from "@/shadcn/components/ui/skeleton"

export default function MembersSkeleton() {
    return (
        <div className="flex items-center gap-2 py-2.5">
            <Skeleton className="h-4 w-4 rounded-full"/>
            <div className="space-y-2">
                <Skeleton className="h-4 w-[120px]"/>
            </div>
        </div>
    )
}