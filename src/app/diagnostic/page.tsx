import { redirect } from 'next/navigation';

export default function DiagnosticPage() {
  redirect('/#diagnostic');

  // Return null as redirect throws an error and this part is unreachable.
  return null;
} 