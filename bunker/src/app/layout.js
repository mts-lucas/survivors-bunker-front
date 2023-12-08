// components/RootLayout.js
"use client"
import React from 'react';
import './globals.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { SessionProvider } from 'next-auth/react';

// export const metadata = {
//   title: 'Bunker',
//   description: 'Pweb project',
// }

const RootLayout = ({ children }) => {
  const backgroundImage = '/spock-zombie.svg'; 

  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        < SessionProvider>
          <Header />
          <div className="flex justify-center">
            <Navbar />
          </div>
          <div className="flex-grow">{children}</div>
          <Footer />
        </SessionProvider>
        {/* <Header />
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className="flex-grow">{children}</div>
        <Footer /> */}
      </body>
    </html>
  );
}

export default RootLayout;
