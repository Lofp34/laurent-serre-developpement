'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function DiagnosticPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Reconstruct the query string from the searchParams object.
    const queryString = searchParams.toString();

    // Construct the target URL with the query string before the hash.
    const targetUrl = `/${queryString ? `?${queryString}` : ''}#diagnostic`;

    // Perform client-side redirection
    window.location.href = targetUrl;
  }, [searchParams]);

  // Return a loading state or null while redirecting
  return null;
} 