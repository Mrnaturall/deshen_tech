import Link from 'next/link'
import UserButton from './user-button'
import { Menu as MenuIcon } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const Menu = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Desktop menu - show links and user button on large screens */}
      <nav className="hidden lg:flex items-center gap-6">
        <Link href="/" className="text-sm font-medium hover:text-red-500 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-red-500 transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-red-500 transition-colors">
          Contact
        </Link>
        <UserButton />
      </nav>

      {/* Mobile hamburger menu - show on small to medium screens */}
      <Sheet>
        <SheetTrigger className="lg:hidden p-2 hover:bg-red-500 rounded-md transition-colors">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </SheetTrigger>
        <SheetContent className="bg-white border-l border-gray-200 w-80 sm:w-96">
          <SheetHeader className="text-left border-b border-gray-200 pb-4">
            <SheetTitle className="text-xl font-semibold text-gray-900">
              Menu
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-5 pt-6 ml-4">
            <Link href="/" className="text-base font-medium hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-base font-medium hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-base font-medium hover:text-red-500 transition-colors">
              Contact
            </Link>
            <div className="pt-4">
              <UserButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Menu
