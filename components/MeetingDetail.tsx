import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
    meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
    return (
    <section className="grid gap-4 md:grid-cols-2">
      <article className="p-4 border-1-4 border-blue-600 bg-gray-800 rounded">
        <h3 className="text-xl font-bold mb-2">
            {meeting.date}
            </h3>

            <p>
                <strong>Type:</strong> {meeting.meetingType}
            </p>

            <p>
                <strong>Presiding:</strong> {meeting.presiding}
            </p>

            <p>
                <strong>Conducting:</strong> {meeting.conducting}
            </p>

            <p>
                <strong>Opening Hymn:</strong> {meeting.openingHymn.number} - {meeting.openingHymn.title}
            </p>

            <p>
                <strong>Opening Prayer:</strong> {meeting.openingPrayer}
            </p>

            <h4 className="font-bold mt-4">
                Speakers:</h4> {meeting.speakers.map((speaker) => (
                <p key={speaker.name}>
                    {speaker.name} - {speaker.topic} 
                </p>
            ))}

            <h4 className="font-bold mt-4">
                Ward Business:
            </h4>

            {meeting.wardBusiness.map((item) => (
            <p key={item.description}>
                {item.description}
            </p>
            ))}

            <p>
                <strong>Stake Business:</strong>{" "}
                {meeting.stakeBusiness ? "Yes" : "No"}
            </p>

            <p>
                <strong>Closing Hymn:</strong>
                {meeting.closingHymn.number} - {meeting.closingHymn.title}
            </p>

            <p>
                <strong>Closing Prayer:</strong> {meeting.closingPrayer}
            </p>

            <h4 className="font-bold mt-4">
                Announcements:
            </h4>

            {meeting.announcements?.map((announcement) => (
                <p key={announcement}>
                    {announcement}
                </p>
            ))}
        </article>
    </section>
    );
}