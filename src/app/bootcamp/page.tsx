'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function BootcampPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.toString();
    const targetUrl = `/${queryString ? `?${queryString}` : ''}#bootcamp`;

    // Perform client-side redirection
    window.location.href = targetUrl;
  }, [searchParams]);

  // Return a loading state or null while redirecting
  return null;
} 