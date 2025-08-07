
// import { useAuth } from "@clerk/clerk-react";
// import { Container } from "./container";
// import { LogoContainer } from "./logo-container";
// import { NavigationRoutes } from "./navigation-routes";
// import { NavLink } from "react-router-dom";
// import { ProfileContainer } from "./profile-container";
// import { ToggleContainer } from "./toggle-container";
// import { motion } from "framer-motion";

// // Gradient animation keyframe (add to your global CSS or Tailwind config)
// const gradientAnimation = `
//   @keyframes gradient-x {
//     0%, 100% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//   }
// `;

// // Inject animation into the DOM (for dev)
// if (typeof window !== "undefined") {
//   const style = document.createElement("style");
//   style.innerHTML = gradientAnimation;
//   document.head.appendChild(style);
// }

// const Header = () => {
//   const { userId } = useAuth();

//   return (
//     <motion.header
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: "spring", stiffness: 80, damping: 14 }}
//       className="relative z-50"
//     >
//       {/* Glowing Gradient Background */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] opacity-90 blur-2xl animate-[gradient-x_15s_ease_infinite] bg-[length:200%_200%]" />

//       {/* Glass Nav Bar */}
//       <div className="sticky top-0 w-full backdrop-blur-xl bg-white/10 dark:bg-black/30 border-b border-white/10 shadow-md">
//         <Container>
//           <div className="flex items-center justify-between px-4 py-4">
//             {/* Logo */}
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               <LogoContainer />
//             </motion.div>

//             {/* Center Navigation Links */}
//             <motion.nav
//               className="hidden md:flex items-center gap-6"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: {},
//                 visible: {
//                   transition: {
//                     staggerChildren: 0.1,
//                   },
//                 },
//               }}
//             >
//               <NavigationRoutes />

//               {userId && (
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <NavLink
//                     to="/generate"
//                     className="relative inline-flex items-center px-5 py-2 rounded-md bg-gradient-to-r from-green-300 via-green-500 to-green-300 text-white font-semibold text-sm shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
//                   >
//                     Dashboard
//                   </NavLink>
//                 </motion.div>
//               )}
//                {userId && (
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <NavLink
//                     to="/generate"
//                     className="relative inline-flex items-center px-5 py-2 rounded-md bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 text-white font-semibold text-sm shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
//                   >
//                     Schedule Interview
//                   </NavLink>
//                 </motion.div>
//               )}
//             </motion.nav>

//             {/* Right: Profile & Toggle */}
//             <div className="flex items-center gap-4">
//               <ProfileContainer />
//               <ToggleContainer />
//             </div>
//           </div>
//         </Container>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;



import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";
import { motion } from "framer-motion";

// Gradient animation keyframes
const gradientAnimation = `
  @keyframes gradient-x {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

// Inject the gradient animation CSS into the DOM
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = gradientAnimation;
  document.head.appendChild(style);
}

const Header = () => {
  const { userId } = useAuth();

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 14 }}
      className="relative z-50"
    >
      {/* Glowing Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] opacity-90 blur-2xl animate-[gradient-x_15s_ease_infinite] bg-[length:200%_200%]" />

      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 w-full backdrop-blur-xl bg-white/10 dark:bg-black/30 border-b border-white/10 shadow-md">
        <Container>
          <div className="flex flex-wrap items-center justify-between px-1 py-4 gap-y-2">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <LogoContainer />
            </motion.div>

            {/* Navigation */}
            <motion.nav
              className="flex flex-wrap items-center gap-4 md:gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <NavigationRoutes />

              {userId && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to="/generate"
                    className="inline-flex items-center px-4 md:px-5 py-2 rounded-md bg-gradient-to-r from-green-400 via-green-600 to-green-400 text-white font-semibold text-sm md:text-base shadow-lg hover:shadow-green-300/40 transition-all duration-300"
                  >
                    Dashboard
                  </NavLink>
                </motion.div>
              )}

              {userId && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to="/generate/create"
                    className="inline-flex items-center px-4 md:px-5 py-2 rounded-md bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 text-white font-semibold text-sm md:text-base shadow-lg hover:shadow-blue-300/40 transition-all duration-300"
                  >
                    Schedule Interview
                  </NavLink>
                </motion.div>
              )}
            </motion.nav>

            {/* Profile & Toggle */}
            <div className="flex items-center gap-3">
              <ProfileContainer />
              <ToggleContainer />
            </div>
          </div>
        </Container>
      </div>
    </motion.header>
  );
};

export default Header;
