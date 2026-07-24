import { redirect } from "next/navigation";
import { getMeetingByDate } from "@/lib/meetings-db";

export default async function CurrentMeetingPage() {
    const today = new Date();

    const sunday = new Date(today);
    sunday.setDate(today.getDate() - today.getDay());

    const date = sunday.toISOString().split("T")[0];

    const meeting = await getMeetingByDate(date);

    if (meeting) {
        redirect(`/meetings/${meeting.id}`);
    }

    redirect("/meetings");
}