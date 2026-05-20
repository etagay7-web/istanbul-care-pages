import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Istanbul Care Hair Clinic',
  description:
    'Guides, research and aftercare tips from the medical team at Istanbul Care Hair Clinic.'
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
