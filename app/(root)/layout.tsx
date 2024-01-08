import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={'flex h-screen flex-col'}>
      <Header />
      <main className={'flex-1 bg-gray-950 bg-dotted-pattern bg-contain'}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
