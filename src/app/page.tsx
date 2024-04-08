import Image from "next/image";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Category from "@/components/Category";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Featured/>
        <Category/>
    </main>
  );
}


