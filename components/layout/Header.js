'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Star } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Browse Artists', href: '/artists' },
    { name: 'Join as Artist', href: '/onboarding' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Sign In', href: '/signin', variant: 'ghost' },
    { name: 'Get Started', href: '/signup', variant: 'default' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <Star className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">Artistly</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 ml-8">
          {navigation.slice(0, 4).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="ml-auto hidden md:flex items-center space-x-2">
          {navigation.slice(4).map((item) => (
            <Button key={item.name} asChild size="sm" variant={item.variant}>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          {/* Mobile Navigation Menu */}
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) =>
                item.variant ? (
                  <Button
                    key={item.name}
                    asChild
                    variant={item.variant}
                    size="sm"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
