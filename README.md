Artistly – Professional Artist Booking Platform

Artistly is a responsive and modern platform that allows event organizers to discover, filter, and book professional artists such as singers, dancers, DJs, and speakers. The project is built using Next.js App Router, TailwindCSS, and ShadCN UI.

Features

- Artist profiles with image, bio, rating, location, and price
- Filter artists by category, location, availability, and pricing
- User authentication: sign-in and sign-up pages with ShadCN UI
- Artist onboarding form
- Responsive layout for all devices
- Built with Next.js App Router, TailwindCSS, ShadCN UI, and Lucide Icons

Project Structure

artistly/
  app/
    layout.js                Global layout
    page.js                  Home page
    signin/                  Sign-in page
      page.js
    signup/                  Sign-up page
      page.js
    onboarding/              Join as artist page
      page.js
    artists/                 Browse artists
      page.js
  components/
    layout/                  Header and Footer components
    home/                    Hero, Stats, CTA, etc.
    onboarding/              OnboardingForm component
    signin/                  SignInForm component
    signup/                  SignUpForm component
    ui/                      ShadCN UI components
  lib/
    mock-data.js             Sample data for artists and filters
  public/
    images/                  Static assets
  styles/
    globals.css              Tailwind global styles
  README.md

Tech Stack

- Framework: Next.js with App Router
- Styling: TailwindCSS
- UI Library: ShadCN UI (based on Radix UI)
- Icons: Lucide-react

Installation and Setup

1. Clone the Repository

   git clone https://github.com/your-username/artistly.git
   cd artistly

2. Install Dependencies

   npm install
   or
   yarn install

3. Run the Development Server

   npm run dev
   or
   yarn dev

4. Open in your browser

   http://localhost:3000

Pages and Routes

- Home: /
- Browse Artists: /artists
- Sign In: /signin
- Sign Up: /signup
- Join as Artist: /onboarding

Authentication Integration

The sign-in and sign-up pages include form UIs built using ShadCN components. You can integrate Firebase, Supabase, NextAuth.js, or a custom backend for handling user authentication.

Author

Vanshaj Sharma  
Bachelor of Technology in Computer Science and Engineering  
Jaypee University of Information Technology  
Frontend Developer | MERN Stack | Cybersecurity | Machine Learning  
LinkedIn: https://www.linkedin.com/in/vanshaj-sharma


