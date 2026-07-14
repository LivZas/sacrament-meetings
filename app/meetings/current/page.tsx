import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

export default function CurrentMeetingPage() {
    const today = new Date();

    const sunday = new Date(today);
    sunday.setDate(today.getDate() - today.getDay());

    const date = sunday.toISOString().split("T")[0];

    const meetings = getMeetings(date);

    if (meetings.length) {
        redirect(`/meetings/${meetings[0].id}`);
    }

    redirect("/meetings");
}