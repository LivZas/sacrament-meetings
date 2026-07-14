import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}
        
export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="p-4 border-l-4 border-blue-600 bg-gray-800 rounded">
      <h3 className="text-xl font-bold mb-2">{meeting.date}</h3>

      <p className="mb-2">
        {meeting.meetingType}</p>

      <Link href={`/meetings/${meeting.id}`}
      className="text-blue-400 hover:underline">
        View meeting details</Link>
    </article>
  );
}