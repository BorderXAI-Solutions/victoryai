import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Assessment } from './components/Assessment';
import { Dashboard } from './components/Dashboard';
import { CTA } from './components/CTA';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Assessment />
      <Dashboard />
      <CTA />
    </Layout>
  );
}

export default App;