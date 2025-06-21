import { redirect } from 'next/navigation';

export default function DiagnosticPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Convert the searchParams object into a URL query string.
  const queryString = new URLSearchParams(searchParams as Record<string, string>).toString();

  // Construct the target URL with the query string before the hash.
  const targetUrl = `/${queryString ? `?${queryString}` : ''}#diagnostic`;

  // Redirect to the target URL with the preserved parameters.
  redirect(targetUrl);

  // This part is unreachable but required for a valid component structure.
  return null;
} 