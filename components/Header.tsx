import Link from 'next/link';
import { SignOutButton } from './sign-out-button';
import { auth } from '@/auth';

const today = new Date();

export default async function Header() {
  const session = await auth();
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className='max-w-4xl mx-auto px-4'>

      <div id="header-title" className="text-2xl font-bold">Caracas Ward</div>

    <p>{today.toDateString()}</p>

      <nav className="flex justify-between items-center">
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/meetings">Meetings</Link></li>
        </ul>

        <div>
          {session?.user ? (<SignOutButton />
          )

          :

          (
            <div className='flex gap-3'>

            <Link href="/login" className='bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition'>
              Login
            </Link>

                        <Link href="/register" className='bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition'>
              Register
            </Link>
            
          </div>
          )
        }
        </div>
      </nav>
      </div>
    </header>
  );
}