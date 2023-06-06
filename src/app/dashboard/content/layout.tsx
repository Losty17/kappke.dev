"use client";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-neutral-100 rounded-2xl shadow-lg p-4 text-neutral-900 overflow-auto">
      {children}
    </main>
  );
};
