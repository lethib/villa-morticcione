"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", label: "Accueil", mobileLabel: "Home" },
  { path: "/villa/", label: "La Villa", mobileLabel: "Villa" },
  { path: "/calendar/", label: "Calendrier et Tarifs", mobileLabel: "Tarifs" },
  { path: "/contact/", label: "Nous contacter", mobileLabel: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-center py-3 sm:py-4">
          <div className="flex gap-1 sm:gap-1 bg-white/60 backdrop-blur-sm rounded-full p-1 sm:p-1 shadow-lg border border-gray-200/50 overflow-hidden">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={pathname === item.path ? "default" : "ghost"}
                className={`rounded-full font-medium transition-all duration-300 text-sm sm:text-sm px-3 sm:px-4 py-2 sm:py-2 ${
                  pathname === item.path
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-gray-700 hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Link href={item.path} className="whitespace-nowrap">
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.mobileLabel}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
