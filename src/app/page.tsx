'use client';

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Menu } from "@/components/Menu";
import { Separator, VerticalSeparator } from "@/components/Separator";

export default function Home() {
  return (
    <div
      style={{
        gridTemplateAreas: `
        'header header header header header header'
        'menu main main main main main'
        'menu footer footer footer footer footer'
      `,
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "200px 1fr"
      }}
      className={"grid gap-4"}>
      <div className="text-center text-2xl col-start-1 col-end-7 row-start-1 row-end-2 sticky top-0 bg-light-borderbg dark:bg-dark-borderbg">
        <div className="px-2">
          <Header />
          <Separator />
        </div>
      </div>
      <div className="text-center text-2xl col-start-1 col-end-2 row-start-2 row-end-3">
        <div className="flex flex-row space-between">
          <Menu />
          <VerticalSeparator />
        </div>
      </div>
      <div className="text-center p-2 text-2xl col-start-2 col-end-7 row-start-2 row-end-3">
        <div className="flex flex-row space-between">
          <Main />
          <VerticalSeparator />
        </div>
      </div>
      <div className="text-center text-2xl col-start-1 col-end-7 row-start-3 row-end-4 sticky bottom-0 bg-light-borderbg dark:bg-dark-borderbg">
        <Separator />
        <Footer />
      </div>
    </div>
  );
}

