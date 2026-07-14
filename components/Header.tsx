import Link from 'next/link';
const today = new Date();

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div id="header-title" className="text-2xl font-bold">Caracas Ward</div>

    <p>{today.toDateString()}</p>

      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/meetings">Meetings</Link></li>
        </ul>
      </nav>
    </header>
  );
}