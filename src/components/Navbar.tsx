"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const products = [
  {
    title: "GuestHub",
    description: "Digital concierge and guest services platform",
    path: "/guesthub",
  },
  {
    title: "ATLAS",
    description: "Property Management System",
    path: "/atlas",
  },
  {
    title: "LOOP",
    description: "Guest engagement and loyalty platform",
    path: "/loop",
  },
  {
    title: "PRISM",
    description: "Revenue intelligence and pricing optimization",
    path: "/prism",
  },
];

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "" },
  { name: "Blogs", path: "/blogs" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileProducts, setShowMobileProducts] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href={"/"}
            className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          >
            <span className="text-2xl font-bold tracking-tight">
              We<span className="text-hotel-600">Engage</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 px-4 ">
            <NavigationMenu className="bg-white rounded-2xl p-2 ">
              <NavigationMenuList className="space-x-4">
                {navigationLinks.map((link) =>
                  link.name !== "Products" ? (
                    <NavigationMenuItem key={link.path}>
                      <Link
                        href={link.path}
                        className={`px-4 py-2 text-sm font-medium transition-colors hover:text-hotel-600 ${
                          isActive(link.path)
                            ? "text-hotel-600"
                            : "text-gray-700"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger className="h-9 px-4 hover:bg-gray-50  data-[state=open]:bg-gray-50 data-[state=open]:text-hotel-600">
                        Products
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                          {products.map((product) => (
                            <Link
                              key={product.title}
                              href={product.path}
                              className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-300/20 ${
                                isActive(product.path) ? "bg-gray-50" : ""
                              }`}
                            >
                              <div
                                className={`text-sm font-medium leading-none ${
                                  isActive(product.path)
                                    ? "text-hotel-600"
                                    : "text-gray-900"
                                }`}
                              >
                                {product.title}
                              </div>
                              <p
                                className={`line-clamp-2 text-sm leading-snug text-muted-foreground mt-1 ${
                                  isActive(product.path)
                                    ? "text-gray-900"
                                    : "text-gray-500"
                                }`}
                              >
                                {product.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-hotel-500 hover:bg-hotel-600 text-white shadow-sm transition-all hover:shadow-md"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-hotel-600 hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50/90 ">
            <div className="py-2 ">
              {navigationLinks.map((link) =>
                link.name !== "Products" ? (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block px-4 py-3 font-bold text-base ${
                      isActive(link.path) ? "text-hotel-600" : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div key={link.name}>
                    <button
                      className={`w-full flex items-center px-4 py-3 text-left font-semibold text-base hover:bg-hotel-50 transition-colors rounded-t-xl ${
                        showMobileProducts ? "text-teal-600" : "text-gray-700"
                      }`}
                      onClick={() => setShowMobileProducts((v) => !v)}
                    >
                      Products
                      <ChevronDown
                        className={`ml-auto transition-transform transform ${
                          showMobileProducts ? "rotate-180" : ""
                        }`}
                        size={20}
                      />
                    </button>
                    {showMobileProducts && (
                      <div className="bg-hotel-50 py-2 animate-fade-in">
                        {products.map((product) => (
                          <Link
                            key={product.title}
                            href={product.path}
                            className={`block px-8 py-2 text-sm font-medium rounded transition-colors ${
                              isActive(product.path)
                                ? "text-hotel-600 bg-white"
                                : "text-gray-700 hover:bg-white"
                            }`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setShowMobileProducts(false);
                            }}
                          >
                            {product.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
            <div className="py-4 px-4 ">
              <Button
                className="w-full bg-hotel-500 hover:bg-hotel-600 text-white shadow-sm"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
