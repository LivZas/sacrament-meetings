import CreateMeetingForm from "./create-meeting-form";

export default function Page() {

    return (
        <main className="min-h-screen bg-gray-900 p-6">

            <div className="max-w2xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">

                <h1 className="text3xl font-bold text-white mb-6">
                    Create New Meeting </h1>
    <CreateMeetingForm />
    </div>
    </main>
    );
}