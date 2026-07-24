'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav aria-label="Pagination"
        className="flex items-center justify-center gap-6 mt-8">
      {currentPage > 1 && (
        <Link href={createPageURL(currentPage - 1)}
        className="px-4 py-2 rounded border hover:bg-blue-500 transition">
      Previous</Link>
      )}


      <span className="font-medium">Page {currentPage} of {totalPages}</span>
      {currentPage < totalPages && (
        <Link href={createPageURL(currentPage + 1)}
        className="px-4 py-2 rounded border hover:bg-blue-500 transition">Next</Link>
      )}
    </nav>
  );
}