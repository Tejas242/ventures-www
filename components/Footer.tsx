import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
              Ventures
            </Link>
            <p className="mt-4 max-w-md">
              A pioneering student-led technical club fostering innovation, 
              collaboration, and hands-on learning in engineering, developing 
              cutting-edge solutions for real-world challenges.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon href="#" icon="github" />
              <SocialIcon href="#" icon="linkedin" />
              <SocialIcon href="#" icon="instagram" />
              <SocialIcon href="#" icon="twitter" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-emerald-400 transition-colors duration-300">Projects</Link></li>
              <li><Link href="/events" className="hover:text-emerald-400 transition-colors duration-300">Events</Link></li>
              <li><Link href="/team" className="hover:text-emerald-400 transition-colors duration-300">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Government Engineering College Aurangabad, Chh. Sambhajinagar. Electrical Dept.</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:teamventures@geca.ac.in" className="hover:text-emerald-400 transition-colors duration-300">
                  teamventures@geca.ac.in
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 77578 70280</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 95032 91631</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Team Ventures. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link href="#" className="hover:text-emerald-400 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors duration-300">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

type SocialIconProps = {
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'instagram';
};

function SocialIcon({ href, icon }: SocialIconProps) {
  const icons = {
    github: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
      </svg>
    ),
    linkedin: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
      </svg>
    ),
    twitter: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
      </svg>
    ),
    instagram: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 7a5 5 0 100 10 5 5 0 000-10zm-3 5a3 3 0 106 0 3 3 0 00-6 0z"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 4.5c-2.03 0-2.29.01-3.09.05-.79.04-1.33.16-1.8.34-.5.19-.9.45-1.32.87-.42.41-.68.82-.87 1.32-.18.47-.3 1.01-.34 1.8C4.51 9.71 4.5 9.97 4.5 12c0 2.03.01 2.29.05 3.09.04.79.16 1.33.34 1.8.19.5.45.9.87 1.32.41.42.82.68 1.32.87.47.18 1.01.3 1.8.34.8.04 1.06.05 3.09.05 2.03 0 2.29-.01 3.09-.05.79-.04 1.33-.16 1.8-.34.5-.19.9-.45 1.32-.87.42-.41.68-.82.87-1.32.18-.47.3-1.01.34-1.8.04-.8.05-1.06.05-3.09 0-2.03-.01-2.29-.05-3.09-.04-.79-.16-1.33-.34-1.8-.19-.5-.45-.9-.87-1.32a3.82 3.82 0 00-1.32-.87c-.47-.18-1.01-.3-1.8-.34-.8-.04-1.06-.05-3.09-.05zM12 3c2.07 0 2.35.01 3.17.05.82.04 1.39.17 1.88.36.51.2.95.47 1.38.9.43.43.7.87.9 1.38.19.49.32 1.06.36 1.88.04.82.05 1.1.05 3.17 0 2.07-.01 2.35-.05 3.17-.04.82-.17 1.39-.36 1.88-.2.51-.47.95-.9 1.38-.43.43-.87.7-1.38.9-.49.19-1.06.32-1.88.36-.82.04-1.1.05-3.17.05-2.07 0-2.35-.01-3.17-.05-.82-.04-1.39-.17-1.88-.36a3.82 3.82 0 01-1.38-.9c-.43-.43-.7-.87-.9-1.38-.19-.49-.32-1.06-.36-1.88C3.01 14.35 3 14.07 3 12c0-2.07.01-2.35.05-3.17.04-.82.17-1.39.36-1.88.2-.51.47-.95.9-1.38.43-.43.87-.7 1.38-.9.49-.19 1.06-.32 1.88-.36C9.65 4.01 9.93 3 12 3z"></path>
      </svg>
    ),
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
      aria-label={`Follow on ${icon}`}
    >
      {icons[icon]}
    </a>
  );
}