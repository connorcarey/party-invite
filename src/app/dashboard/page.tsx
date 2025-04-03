import { Divider } from "@heroui/react"
import NewInviteCard from "@/components/cards/NewInviteCard"
import InviteCard from "@/components/cards/InviteCard";
export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col p-8 overflow-hidden">
        <h1 className="text-2xl font-bold text-neutral-500">Dashboard</h1>
        <div className="w-full h-[4px] bg-neutral-300 my-4 mb-4"></div>
        <div className="flex-1 overflow-auto">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start m-2">
                <NewInviteCard />
                <InviteCard />
                <InviteCard />
                <InviteCard />
                <InviteCard />
                <InviteCard />
                <InviteCard />
                <InviteCard />
            </div>
        </div>
    </div>
  );
}
