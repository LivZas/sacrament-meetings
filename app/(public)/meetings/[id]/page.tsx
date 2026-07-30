import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";
import { notFound } from "next/navigation";

export default async function MeetingPage({
    params,
    }: {
        params: Promise<{ id: string }>;
    }) {
    const { id } = await params;

    const meetingId = Number(id);

    if (Number.isNaN(meetingId)) {
        notFound();
    }
    
    const meeting = await getMeetingById(meetingId);

    if (!meeting) {
        notFound();
    }

    return(
        <MeetingDetail meeting={meeting} />
    );
    
}