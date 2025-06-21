'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function DiagnosticPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Reconstruct the query string from the searchParams object.
    const queryString = searchParams.toString();

    // Construct the target URL with the query string before the hash.
    const targetUrl = `/${queryString ? `?${queryString}` : ''}#diagnostic`;

    // Redirect using Next.js's router for smoother client-side navigation
    router.replace(targetUrl);
  }, [searchParams, router]);

  // Render a loading message while the redirect happens
  return <p>Redirection en cours...</p>;
} 