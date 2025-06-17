import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./header/menu";

export default function Header() {
  return (
    <header className=" text-black  shadow">
      <div className="px-2 py-2">
        <div className="flex items-center justify-between py-2">
          {/* Logo - always shown */}
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-2xl"
          >
            <Image
              src="/icons/deshen_logo.png"
              width={30}
              height={30}
              alt={`${APP_NAME} logo`}
            />
            <span className=" sm text-xl ">{APP_NAME}</span>
          </Link>
        

          <Menu />
        </div>
      </div>
    </header>
  );
}
