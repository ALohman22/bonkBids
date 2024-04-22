import Head from "next/head";
import Link from "next/link";


import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#F6F6F6] to-[#5C5C5C]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-[#5C5C5C] sm:text-[5rem]">
            Bonk Bids
          </h1>
        </div>
        <div className="container flex flex-col items-center">
          <img className="border-4 border-black rounded-md" src="https://media.tenor.com/FrUFy1DveuIAAAAi/bonk-doge.gif" />
        </div>
        <div className="mt-10 container flex flex-col items-center">
          <Link className="p-2 text-4xl border-4 border-black rounded-md hover:bg-[#363636] hover:text-[#BFBFBF]" href={"https://bonk-bids.vercel.app/"}>
            Sign in
          </Link>
        </div>
      </main>
  );
}
