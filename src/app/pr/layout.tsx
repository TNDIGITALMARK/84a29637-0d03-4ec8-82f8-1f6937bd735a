import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Only1 Media PR - Strategic Public Relations for Visionary Brands',
  description: 'Transform your brand story into media gold with strategic PR services including media relations, crisis management, brand positioning, and digital PR.',
  keywords: 'PR agency, public relations, media relations, crisis management, brand positioning, digital PR',
};

export default function PRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
