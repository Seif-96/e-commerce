import { LoadingIndicator } from '@/components/application/loading-indicator/loading-indicator';
import React from 'react';
export default function loading() {
  return (
    <>
      <section className="py-6 animate-pulse vh-100">
        <div className="container mx-auto px-4 vh-100">
          <div className="flex flex-col itms-center justify-center gap-4 vh-100">
            <LoadingIndicator type="dot-circle" size="md" label="Loading Categories..." />
          </div>
        </div>
      </section>
    </>
  );
}
