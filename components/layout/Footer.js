import Link from 'next/link';
import { Star, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <Star className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Artistly</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Connect with talented performers for your next event. Professional artist booking made simple.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Event Planners</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/artists" className="hover:text-primary">Browse Artists</Link></li>
              <li><Link href="#" className="hover:text-primary">How It Works</Link></li>
              <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="#" className="hover:text-primary">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Artists</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/onboarding" className="hover:text-primary">Join as Artist</Link></li>
              <li><Link href="#" className="hover:text-primary">Artist Resources</Link></li>
              <li><Link href="#" className="hover:text-primary">Success Stories</Link></li>
              <li><Link href="#" className="hover:text-primary">Help Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Artistly. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}