import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/navbar/NavBar';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pimp my crib',
  description: 'Turn yo crib from whack to smack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
