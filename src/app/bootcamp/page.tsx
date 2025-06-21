'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function BootcampPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.toString();
    const targetUrl = `/${queryString ? `?${queryString}` : ''}#bootcamp`;

    // Redirect using Next.js's router for smoother client-side navigation
    router.replace(targetUrl);
  }, [searchParams, router]);

  // Render a loading message while the redirect happens
  return <p>Redirection en cours...</p>;
} 