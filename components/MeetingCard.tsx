import Link from "next/link";
import { auth } from "@/auth";
import { deleteMeeting } from "@/lib/actions";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}
        
export default async function MeetingCard({ meeting }: MeetingCardProps) {
  const session = await auth();
  return (
    <article className="p-4 border-l-4 border-blue-600 bg-gray-800 rounded">
      <h3 className="text-xl font-bold mb-2">{meeting.date}</h3>

      <p className="mb-2">
        {meeting.meetingType.charAt(0).toUpperCase() + meeting.meetingType.slice(1)}</p>

      <Link href={`/meetings/${meeting.id}`}
      className="text-blue-400 hover:underline">
        View meeting details</Link>

        {session?.user && (
        <div className="mt-4 flex gap-2">

          <Link href={`/meetings/${meeting.id}/edit`}
          className="rounded-md bg-blue-600 px-3 py-1 font-semibold text-white hover:bg-blue-700">

        Edit</Link>

        <form action={deleteMeeting}>
          
          <input
          type="hidden"
          name="id"
          value={meeting.id}/>

          <button type="submit" className="rounded-md bg-red-600 px-3 py-1 font-semibold text-white hover:bg-red-700">
            Delete</button>

          </form>
        </div>
        )}
    </article>
  );
}