import Link from "next/link";
import MeetingCard from "@/components/MeetingCard";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";
import { MeetingSearch } from "@/components/MeetingSearch";
import { Pagination } from "@/components/Pagination";

export default async function MeetingsPage(props: {
    searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

    return (
    <div>
      <div className="mb-4">
        <Link href="/meetings/new" 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
      New Meeting
      </Link>
    </div>

    <MeetingSearch />

      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} meeting={meeting} />
      ))}

    <Pagination totalPages={totalPages} />
    </div>
  );
}