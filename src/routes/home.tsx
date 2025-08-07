// import { Sparkles } from "lucide-react";
// import Marquee from "react-fast-marquee";

// import { Container } from "@/components/container";
// import { Button } from "@/components/ui/button";
// import { MarqueImg } from "@/components/marquee-img";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="flex-col w-full pb-24">
//       <Container>
//         <div className="my-8">
//           <h2 className="text-3xl text-center md:text-left md:text-6xl">
//             <span className=" text-outline font-extrabold md:text-8xl">
//               AI Superpower
//             </span>
//             <span className="text-gray-500 font-extrabold">
//               - A better way to
//             </span>
//             <br />
//             improve your interview chances and skills
//           </h2>

//           <p className="mt-4 text-muted-foreground text-sm">
//             Boost your interview skills and increase your success rate with
//             AI-driven insights. Discover a smarter way to prepare, practice, and
//             stand out.
//           </p>
//         </div>

//         <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
//           <p className="text-3xl font-semibold text-gray-900 text-center">
//             250k+
//             <span className="block text-xl text-muted-foreground font-normal">
//               Offers Recieved
//             </span>
//           </p>
//           <p className="text-3xl font-semibold text-gray-900 text-center">
//             1.2M+
//             <span className="block text-xl text-muted-foreground font-normal">
//               Interview Aced
//             </span>
//           </p>
//         </div>

//         {/* image section */}
//         <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
//           <img
//             src="/assets/img/hero.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />

//           <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
//             Inteviews Copilot&copy;
//           </div>

//           <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
//             <h2 className="text-neutral-800 font-semibold">Developer</h2>
//             <p className="text-sm text-neutral-500">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
//               distinctio natus, quos voluptatibus magni sapiente.
//             </p>

//             <Button className="mt-3">
//               Generate <Sparkles />
//             </Button>
//           </div>
//         </div>
//       </Container>

//       {/* marquee section */}
//       <div className=" w-full my-12">
//         <Marquee pauseOnHover>
//           <MarqueImg img="/assets/img/logo/firebase.png" />
//           <MarqueImg img="/assets/img/logo/meet.png" />
//           <MarqueImg img="/assets/img/logo/zoom.png" />
//           <MarqueImg img="/assets/img/logo/firebase.png" />
//           <MarqueImg img="/assets/img/logo/microsoft.png" />
//           <MarqueImg img="/assets/img/logo/meet.png" />
//           <MarqueImg img="/assets/img/logo/tailwindcss.png" />
//           <MarqueImg img="/assets/img/logo/microsoft.png" />
//         </Marquee>
//       </div>

//       <Container className="py-8 space-y-8">
//         <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
//           Unleash your potential with personalized AI insights and targeted
//           interview practice.
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
//           <div className="col-span-1 md:col-span-3">
//             <img
//               src="/assets/img/office.jpg"
//               alt=""
//               className="w-full max-h-96 rounded-md object-cover"
//             />
//           </div>

//           <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
//             <p className="text-center text-muted-foreground">
//               Transform the way you prepare, gain confidence, and boost your
//               chances of landing your dream job. Let AI be your edge in
//               today&apos;s competitive job market.
//             </p>

//             <Link to={"/generate"} className="w-full">
//               <Button className="w-3/4">
//                 Generate <Sparkles className="ml-2" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;


// import { Sparkles } from "lucide-react";
// import Marquee from "react-fast-marquee";

// import { Container } from "@/components/container";
// import { Button } from "@/components/ui/button";
// import { MarqueImg } from "@/components/marquee-img";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="flex flex-col w-full pb-24">
//       {/* Hero Section */}
//       <div className="relative w-full h-[600px] bg-gray-100 overflow-hidden">
//         <img
//           src="/assets/img/hero.jpg"
//           alt="Hero"
//           className="absolute w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

//         <Container className="relative z-10 flex flex-col justify-center h-full gap-6 text-white">
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
//             <span className="block text-outline text-white">AI Superpower</span>
//             <span className="text-gray-200">A better way to</span>
//             <br />
//             improve your interview chances and skills
//           </h1>
//           <p className="text-lg text-gray-100 max-w-2xl">
//             Boost your interview skills and increase your success rate with
//             AI-driven insights. Discover a smarter way to prepare, practice, and
//             stand out.
//           </p>
//           <div className="flex gap-8">
//             <div className="text-center">
//               <p className="text-3xl font-bold">250k+</p>
//               <span className="text-sm text-gray-200">Offers Received</span>
//             </div>
//             <div className="text-center">
//               <p className="text-3xl font-bold">1.2M+</p>
//               <span className="text-sm text-gray-200">Interviews Aced</span>
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* Marquee Section */}
//       <div className="w-full py-8 bg-white">
//         <Marquee pauseOnHover>
//           <MarqueImg img="/assets/img/logo/firebase.png" />
//           <MarqueImg img="/assets/img/logo/meet.png" />
//           <MarqueImg img="/assets/img/logo/zoom.png" />
//           <MarqueImg img="/assets/img/logo/firebase.png" />
//           <MarqueImg img="/assets/img/logo/microsoft.png" />
//           <MarqueImg img="/assets/img/logo/meet.png" />
//           <MarqueImg img="/assets/img/logo/tailwindcss.png" />
//           <MarqueImg img="/assets/img/logo/microsoft.png" />
//         </Marquee>
//       </div>

//       {/* Highlight Section */}
//       <Container className="py-16">
//         <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center md:text-left mb-10 max-w-3xl">
//           Unleash your potential with personalized AI insights and targeted
//           interview practice.
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Image Left */}
//           <div className="rounded-xl overflow-hidden shadow-md">
//             <img
//               src="/assets/img/office.jpg"
//               alt="Office"
//               className="w-full h-full object-cover max-h-96"
//             />
//           </div>

//           {/* Text Right */}
//           <div className="flex flex-col justify-center gap-6 text-center md:text-left">
//             <p className="text-gray-600 text-base md:text-lg">
//               Transform the way you prepare, gain confidence, and boost your
//               chances of landing your dream job. Let AI be your edge in
//               today&apos;s competitive job market.
//             </p>

//             <Link to={"/generate"}>
//               <Button className="w-full md:w-fit px-6 py-2 text-md">
//                 Generate <Sparkles className="ml-2" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;

// import { motion as m } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles } from "lucide-react";

// export default function Home() {
//   return (
//     <main className="relative min-h-screen bg-gradient-to-bl from-black via-slate-900 to-black text-white flex items-center justify-center overflow-hidden px-6">
//       {/* Background Grid */}
//       <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:32px_32px] opacity-10 z-0" />

//       {/* Floating Card */}
//       <m.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="bg-slate-800 bg-opacity-60 backdrop-blur-md rounded-2xl p-10 max-w-3xl z-10 shadow-2xl border border-purple-700/20"
//       >
//         <div className="flex items-center gap-3 mb-6">
//           <Sparkles size={28} className="text-purple-400 animate-pulse" />
//           <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
//             Crack Interviews Smartly
//           </h1>
//         </div>

//         <p className="text-slate-300 text-lg mb-6">
//           AI-driven mock interviews with real-time feedback and scoring. Practice like a pro, grow like a champ.
//         </p>

//         <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg text-lg transition">
//           Start Mock Interview
//         </Button>
//       </m.div>
//     </main>
//   );
// }

// import { motion as m } from "framer-motion";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black text-green-400 grid grid-cols-1 md:grid-cols-2 items-center font-mono px-4 py-10">
      
//       {/* LEFT SIDE – Text Content */}
//       <div className="flex flex-col justify-center items-start px-6 space-y-6">
//         <m.h1
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="text-3xl md:text-5xl font-bold"
//         >
//           &gt; AI Terminal Activated
//         </m.h1>

//         <m.p
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.6, duration: 1 }}
//           className="text-xl md:text-2xl max-w-xl"
//         >
//           [Running Mock Interview Session...] <br />
//           [Analyzing your answers... Generating feedback...]
//         </m.p>

//         <Button className="bg-green-600 hover:bg-green-700 text-black font-bold px-6 py-3 rounded-lg shadow-md">
//           Initiate AI Interview
//         </Button>
//       </div>

//       {/* RIGHT SIDE – Image */}
//       <m.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.8, duration: 1 }}
//         className="flex justify-center items-center p-6"
//       >
       
   
// <img
//   src="public/assets/img/hero.jpg"
//   alt="AI Assistant"
//   className="w-[700px] h-[500px] rounded-xl object-cover"
// />


//       </m.div>
//     </main>
//   );
// }


import { motion as m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black text-green-400 grid grid-cols-1 md:grid-cols-2 items-center font-mono px-4 py-10">
      
      {/* LEFT SIDE – Text Content */}
      <div className="flex flex-col justify-center items-start px-6 space-y-6">
        <m.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl md:text-5xl font-bold"
        >
          &gt; Welcome To the RT Mock.
        </m.h1>

        <m.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl md:text-2xl max-w-xl"
        >
          Schedule Your Mock Inerview with AI. <br />
          Analyze your Answers,<br></br> Generating feedback...
        </m.p>

        <Button
          onClick={() => navigate("/generate")}
          className="bg-orange-700 hover:bg-green-700 text-black font-bold px-6 py-3 rounded-lg shadow-md"
        >
          Schedule Interview
        </Button>
      </div>

      {/* RIGHT SIDE – Image */}
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex justify-center items-center p-6"
      >
        <img
          src="public/assets/img/hero.jpg" // ✅ Corrected for Vite public folder
          alt="AI Assistant"
          className="w-[700px] h-[500px] rounded-xl object-cover shadow-lg"
        />
      </m.div>
    </main>
  );
}
