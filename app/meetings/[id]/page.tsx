import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";

export default async function MeetingPage({
    params,
    }: {
        params: Promise<{ id: string }>;
    }) {

    const { id } = await params;

    const response = await fetch(
        `http://localhost:3000/api/meetings/${id}`
    );

    if (!response.ok) {
        return <p>Meeting not found.</p>;
    }

    const meeting: SacramentMeeting = await response.json();

    return <MeetingDetail meeting={meeting} />;
}