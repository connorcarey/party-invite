"use client"

import { useRouter } from "next/navigation";
import CardLayout from "./CardLayout";

export default function NewInviteCard() {
    const router = useRouter();
    
    return (
        <CardLayout>
            <button 
                onClick={() => router.push("/create-invite")} 
                className="h-full w-full border-4 border-neutral-300 border-dashed rounded-xl"
            >
            </button>
        </CardLayout>
    )
}