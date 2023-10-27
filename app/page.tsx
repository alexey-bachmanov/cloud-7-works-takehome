import React from 'react';

import Header from '@/components/Header';
import FormLabel from '@/components/FormLabel';
import FormMain from '@/components/FormMain';
import Footer from '@/components/Footer';
import Line from '@/components/Line';

export default function Home() {
  return (
    <main
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header />
      <FormLabel />
      <Line sx={{ margin: '0 80px 0 80px' }} />
      <FormMain />
      <Footer />
    </main>
  );
}
