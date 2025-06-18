import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./header/menu";

export default function Header() {
  return (
    <header className="bg-white text-black shadow-md z-50 sticky top-0">
      <div className=" mx-auto px-2 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - always shown */}
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-xl sm:text-2xl hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icons/deshen_logo.png"
              width={30}
              height={30}
              alt={`${APP_NAME} logo`}
              className="flex-shrink-0"
            />
            <span className="truncate">{APP_NAME}</span>
          </Link>

          <Menu />
        </div>
      </div>
    </header>
  );
}