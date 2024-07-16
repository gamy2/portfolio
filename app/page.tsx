import { FloatingNav } from "@/components/floating_nav";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className=" max-w-7xl w-full ">
          {/* TODO: adding all nav items and add icons if we want */}
          <FloatingNav
            navItems={[
              { name: "home", link: "/" },
              { name: "about", link: "#about" },
              { name: "more", link: "#more" },
            ]}
          />
          <Hero />
        </div>
      </main>
    </>
  );
}
