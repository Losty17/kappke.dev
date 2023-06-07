"use client";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="rounded-2xl p-4 text-neutral-900">
      {children}
    </main>
  );
};
