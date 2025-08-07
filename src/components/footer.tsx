// import React from "react";

// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import Lucide icons
// import { Link } from "react-router-dom";
// import { Container } from "@/components/container";
// import { MainRoutes } from "@/lib/helpers";

// interface SocialLinkProps {
//   href: string;
//   icon: React.ReactNode;
//   hoverColor: string;
// }

// const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={`hover:${hoverColor}`}
//     >
//       {icon}
//     </a>
//   );
// };

// interface FooterLinkProps {
//   to: string;
//   children: React.ReactNode;
// }

// const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
//   return (
//     <li>
//       <Link
//         to={to}
//         className="hover:underline text-gray-300 hover:text-gray-100"
//       >
//         {children}
//       </Link>
//     </li>
//   );
// };

// export const Footer = () => {
//   return (
//     <div className="w-full bg-black text-gray-300 hover:text-gray-100 py-8">
//       <Container>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* First Column: Links */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {MainRoutes.map((route) => (
//                 <FooterLink key={route.href} to={route.href}>
//                   {route.label}
//                 </FooterLink>
//               ))}
//             </ul>
//           </div>

//           {/* Second Column: About Us */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">About Us</h3>
//             <p>
//               We are committed to helping you unlock your full potential with
//               AI-powered tools. Our platform offers a wide range of resources to
//               improve your interview skills and chances of success.
//             </p>
//           </div>

//           {/* Third Column: Services */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Services</h3>
//             <ul>
//               <FooterLink to="/services/interview-prep">
//                 Interview Preparation
//               </FooterLink>
//               <FooterLink to="/services/career-coaching">
//                 Career Coaching
//               </FooterLink>
//               <FooterLink to="/services/resume-building">
//                 Resume Building
//               </FooterLink>
//             </ul>
//           </div>

//           {/* Fourth Column: Address and Social Media */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Contact Us</h3>
//             <p className="mb-4">123 AI Street, Tech City, 12345</p>
//             <div className="flex gap-4">
//               <SocialLink
//                 href="https://facebook.com"
//                 icon={<Facebook size={24} />}
//                 hoverColor="text-blue-500"
//               />
//               <SocialLink
//                 href="https://twitter.com"
//                 icon={<Twitter size={24} />}
//                 hoverColor="text-blue-400"
//               />
//               <SocialLink
//                 href="https://instagram.com"
//                 icon={<Instagram size={24} />}
//                 hoverColor="text-pink-500"
//               />
//               <SocialLink
//                 href="https://linkedin.com"
//                 icon={<Linkedin size={24} />}
//                 hoverColor="text-blue-700"
//               />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:${hoverColor} transition-colors duration-300`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:underline text-gray-400 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

const MainRoutes = [
  { href: "/", label: "Home" },
  { href: "/generate", label: "Generate" },
  { href: "/feedback", label: "Feedback" },
  { href: "/about", label: "About" },
];

export const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 to-black text-gray-300 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {MainRoutes.map((route) => (
              <FooterLink key={route.href} to={route.href}>
                {route.label}
              </FooterLink>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-white">About Us</h3>
          <p className="text-sm text-gray-400">
            We're passionate about helping you prepare for your future with smart AI tools. From interviews to career coaching, we’ve got you covered.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-white">Services</h3>
          <ul className="space-y-2">
            <FooterLink to="/services/interview-prep">Interview Preparation</FooterLink>
            <FooterLink to="/services/career-coaching">Career Coaching</FooterLink>
            <FooterLink to="/services/resume-building">Resume Building</FooterLink>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-white">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-4">123 AI Street, Tech City, 12345</p>
          <div className="flex gap-4">
            <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} hoverColor="text-blue-500" />
            <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} hoverColor="text-blue-400" />
            <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} hoverColor="text-pink-500" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} hoverColor="text-blue-700" />
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AI Interviewer. All rights reserved.
      </div>
    </div>
  );
};
