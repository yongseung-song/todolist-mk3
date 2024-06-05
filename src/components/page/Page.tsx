import { ReactNode } from "react";

function Page({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="text-2xl font-bold text-blue-600 underline">
        To-do list mk3 ⎯ 240601
      </header>
      <section className="w-full">{children}</section>
      <footer className="mt-auto py-4 text-blue-600">
        ©️ 2024. Song Yongseung all rights reserved
      </footer>
    </main>
  );
}

export default Page;
