"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <header className="flex justify-between p-3  lg:hidden">
      <Link href={"/"} className="sidebar-logo">
        <Image
          src={"./assets/images/logo-text.svg"}
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2  p-3">
        <Sheet>
          <SheetTrigger>
            <Image
              src={"/assets/icons/menu.svg"}
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent>
            <SignedIn>
              <ul className="header-sidebar-nav_elements ">
                {/* logo */}
                <Link href={"/"} className="sidebar-logo pl-3 pb-5">
                  <Image
                    src={"./assets/images/logo-text.svg"}
                    alt="logo"
                    width={180}
                    height={28}
                  />
                </Link>

                {navLinks?.map((link) => {
                  const isActive = link?.route === pathName;

                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "gradient-text"
                      }  flex whitespace-nowrap text-dark-700`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image
                          src={link.icon}
                          alt="nav-icon"
                          width={24}
                          height={24}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}

                <li className="p-4 pt-8 ">
                <UserButton afterSignOutUrl="/" showName/>
                </li>
              </ul>
            </SignedIn>

            <SignedOut>
              <Button asChild className="button bg-purple-gradient bg-cover">
                <Link href={"/sign-in"}>Login</Link>
              </Button>
            </SignedOut>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;
