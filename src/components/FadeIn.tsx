"use client";

import React from 'react';

export default function FadeIn({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // trigger the transition on mount
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`transition-opacity transition-transform duration-300 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      } ${className}`}
    >
      {children}
    </div>
  );
}
