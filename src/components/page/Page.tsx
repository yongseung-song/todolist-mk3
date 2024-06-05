import { ReactNode } from "react";

function Page({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center">
      <header className="text-2xl font-bold underline">
        To-do list mk3 ⎯ 240601
      </header>
      {children}
      <footer>©️ 2024. Song Yongseung all rights reserved</footer>
    </main>
  );
}

export default Page;
