import NavLinks from "@/components/NavLinks";

export default function MeetingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <NavLinks />
        {children}
        </>
    );
}