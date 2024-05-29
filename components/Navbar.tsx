"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { siteConfig } from "@/config/site";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ThemeToggle } from "./Theme-toggle";

import { Icons } from "@/components/icons";

type NavItem = {
  href: string;
  label: string;
  isProtected: boolean;
};

export default function Navbar() {
  // - How to set colors for active links
  // https://stackoverflow.com/questions/68978743/tailwindcss-active-link-text-color-not-changing
  const pathname = usePathname();
  // const user = await currentUser();

  const LEFT_NAV_ITEMS: NavItem[] = [
    { href: "/", label: "Home", isProtected: false },
    { href: "/testimonies", label: "Testimonies", isProtected: false },
  ];

  const RIGHT_NAV_ITEMS: NavItem[] = [
    { href: "/pricing", label: "Pricing", isProtected: false },
    { href: "/contactUs", label: "Contact Us", isProtected: false },
  ];

  //  Break the logic into a function to determine if a link is protected or not
  function generateProtectedLink(
    href: string,
    label: string,
    isProtected: boolean,
    i: number
  ) {
    const isActive = pathname === href;

    console.log("📗 LOG [ isActive ]:", isActive, "📗 LOG [ href ]:", href);

    return (
      <Link
        key={i}
        href={href}
        className={`${
          isActive ? "text-primary" : "text-muted-foreground"
        } transition-colors hover:text-foreground text-nowrap hidden md:block font-semibold`}
      >
        {label}
      </Link>
    );
  }

  return (
    <div className="flex w-full flex-col border-b">
      <header className="container sticky top-0 flex h-20 items-center gap-4 bg-background px-4 md:px-6">
        {/* HOW TO CLOSE THE DRAWER AFTER CLICKING ON A LINK
        https://github.com/saadeghi/daisyui/discussions/2444 */}
        {/* //-DRAWER */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              {/* //-DRAWER MENUS */}
              {[...LEFT_NAV_ITEMS, ...RIGHT_NAV_ITEMS].map(
                ({ href, label, isProtected }, i) => {
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={i}
                      href={href}
                      onClick={() => {
                        document.getElementById("close-drawer")?.click();
                      }}
                      className={`${
                        isActive ? "text-primary" : "text-muted-foreground"
                      } transition-colors hover:text-foreground text-nowrap`}
                    >
                      {label}
                    </Link>
                  );
                }
              )}
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="ie md:text-md flex-col gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 lg:gap-10">
          {/* //-LOGO*/}
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block text-nowrap text-xl font-bold md:text-3xl">
              {siteConfig.name}
            </span>
          </Link>
          {/* //-LEFT SIDE MENUS */}
          {LEFT_NAV_ITEMS.map(({ href, label, isProtected }, i) => {
            return generateProtectedLink(href, label, isProtected, i);
          })}
        </nav>

        {/* //-RIGHT SIDE MENUS */}
        <nav className="ml-auto flex items-center gap-4 text-lg md:gap-2 lg:gap-10">
          {RIGHT_NAV_ITEMS.map(({ href, label, isProtected }, i) => {
            return generateProtectedLink(href, label, isProtected, i);
          })}
          <ThemeToggle />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:bg-background">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </nav>
        {/* </div> */}
      </header>
    </div>
  );
}
