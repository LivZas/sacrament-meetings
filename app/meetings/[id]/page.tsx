import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";

export default async function MeetingPage({
    params,
    }: {
        params: Promise<{ id: string }>;
    }) {
    const { id } = await params;

    const meeting = getMeetingById(Number(id));

    if (!meeting) {
        return <p>Meeting not found.</p>;
    }

    return <MeetingDetail meeting={meeting} />;
}