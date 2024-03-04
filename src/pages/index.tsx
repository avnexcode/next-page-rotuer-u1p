// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import style from "./home.module.css"
import Link from "next/link";
export default function Home() {
  return (
    <div className={`${style.class_kuh} ${style.more_deep}`}>
      <h1 className="text-8xl">Gua Jago React</h1>
      <div className="flex flex-col gap-3 p-5">
        <span className="flex gap-2 text-3xl">
          <Link href="/auth/login" className="text-blue-500 underline">
            Login
          </Link>
          Dulu Dek
        </span>
      </div>
    </div>
  );
}
