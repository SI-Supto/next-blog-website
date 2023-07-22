// import { getServerSession } from "next-auth"
// import { AuthOptions, authOptions } from "../app/api/auth/[...nextauth]/route"
import Image from "next/image";
import getCurrentUser from "./actions/getCurrentUser";
import BlogDetail from "./components/BlogDetail";
import TrialPage from "./components/TrialPage";

export default async function Home() {

  return (
    <div className="px-3 py-3 md:px-9 lg:px-12 md:py-6">
      <div className="hero">
        <div className="flex justify-center py-5">
          <p className="text-center tracking-widest">
            <span className="text-lg font-bold ">Discover the</span>
            <br />
            <br />
            <span className="text-2xl md:text-4xl font-bold tracking-wider">
              latest trends, insights, and tips in the writings of our Blog
            </span>
          </p>
        </div>
        <div className="relative w-[90vw] h-[60vh]">
          <Image
            src="/hero.svg"
            fill
            priority
            alt="hero-img"
            className="object-contain"
          />
        </div>
      </div>
      <div className="font-bold text-4xl text-white text-center py-4 mt-4">
        Blogs
      </div>
      <BlogDetail slice={6}/>
      <TrialPage/>
    </div>
  );
}
