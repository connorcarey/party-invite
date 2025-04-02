"use client"

import CardLayout from "./CardLayout";

export default function NewInviteCard() {
    return (
        <CardLayout>
            <button onClick={() => console.log("clicked!")} className="h-full w-full border-4 border-neutral-300 border-dashed rounded-xl">
            </button>
        </CardLayout>
    )
}