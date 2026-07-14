import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";

export default function MeetingsPage() {

    const meetings = getMeetings();

return (
<>
    {meetings.map((meeting) => (
        <MeetingCard
            key={meeting.id}
            meeting={meeting}
        />
))}
</>
);
}