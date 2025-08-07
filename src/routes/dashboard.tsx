// import { Headings } from "@/components/headings";
// import { InterviewPin } from "@/components/pin";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { Skeleton } from "@/components/ui/skeleton";
// import { db } from "@/config/firebase.config";
// import { Interview } from "@/types";
// import { useAuth } from "@clerk/clerk-react";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { Plus } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "sonner";

// export const Dashboard = () => {
//   const [interviews, setInterviews] = useState<Interview[]>([]);
//   const [loading, setLoading] = useState(false);
//   const { userId } = useAuth();

//   useEffect(() => {
//     setLoading(true);
//     const interviewQuery = query(
//       collection(db, "interviews"),
//       where("userId", "==", userId)
//     );

//     const unsubscribe = onSnapshot(
//       interviewQuery,
//       (snapshot) => {
//         const interviewList: Interview[] = snapshot.docs.map((doc) => {
//           const id = doc.id;
//           return {
//             id,
//             ...doc.data(),
//           };
//         }) as Interview[];
//         setInterviews(interviewList);
//         setLoading(false);
//       },
//       (error) => {
//         console.log("Error on fetching : ", error);
//         toast.error("Error..", {
//           description: "SOmething went wrong.. Try again later..",
//         });
//         setLoading(false);
//       }
//     );

//     return () => unsubscribe();
//   }, [userId]);

//   return (
//     <>
//       <div className="flex w-full items-center justify-between">
//         {/* headings */}
//         <Headings
//           title="Dashboard"
//           description="Create and start you AI Mock interview"
//         />
//         <Link to={"/generate/create"}>
//           <Button size={"sm"}>
//             <Plus /> Add New
//           </Button>
//         </Link>
//       </div>

//       <Separator className="my-8" />
//       {/* content section */}

//       <div className="md:grid md:grid-cols-3 gap-3 py-4">
//         {loading ? (
//           Array.from({ length: 6 }).map((_, index) => (
//             <Skeleton key={index} className="h-24 md:h-32 rounded-md" />
//           ))
//         ) : interviews.length > 0 ? (
//           interviews.map((interview) => (
//             <InterviewPin key={interview.id} interview={interview} />
//           ))
//         ) : (
//           <div className="md:col-span-3 w-full flex flex-grow items-center justify-center h-96 flex-col">
//             <img
//               src="/assets/svg/not-found.svg"
//               className="w-44 h-44 object-contain"
//               alt=""
//             />

//             <h2 className="text-lg font-semibold text-muted-foreground">
//               No Data Found
//             </h2>

//             <p className="w-full md:w-96 text-center text-sm text-neutral-400 mt-4">
//               There is no available data to show. Please add some new mock
//               interviews
//             </p>

//             <Link to={"/generate/create"} className="mt-4">
//               <Button size={"sm"}>
//                 <Plus className="min-w-5 min-h-5 mr-1" />
//                 Add New
//               </Button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

import { Headings } from "@/components/headings";
import { InterviewPin } from "@/components/pin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/config/firebase.config";
import { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Plus, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const Dashboard = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    setLoading(true);
    const interviewQuery = query(
      collection(db, "interviews"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      interviewQuery,
      (snapshot) => {
        const interviewList: Interview[] = snapshot.docs.map((doc) => {
          const id = doc.id;
          return {
            id,
            ...doc.data(),
          };
        }) as Interview[];
        setInterviews(interviewList);
        setLoading(false);
      },
      (error) => {
        console.log("Error on fetching : ", error);
        toast.error("Error..", {
          description: "SOmething went wrong.. Try again later..",
        });
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  return (
    <motion.div
      className="w-full px-4 py-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#edf4ff] via-[#fcecff] to-[#fbf9ff] dark:from-[#1a1c1f] dark:via-[#1a1c1f] dark:to-black min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative z-10 mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-3xl bg-white/60 dark:bg-zinc-800/30 backdrop-blur-lg shadow-2xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Headings
            title="🎯 Ready to Ace It?"
            description="Feel Like Real-time AI-driven Mock Interviews with RT Mock."
          />
          <Link to="/generate/create">
            <Button
              size="lg"
              className="bg-gradient-to-br from-orange-600 via-green-600 to-orange-500 text-white shadow-lg hover:scale-105 transition-transform"
            >
              <Plus className="mr-2 h-5 w-5" /> Start New Interview
            </Button>
          </Link>
        </div>
      </motion.div>

      <Separator className="my-12" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-28 md:h-36 rounded-xl" />
          ))
        ) : interviews.length > 0 ? (
          interviews.map((interview, index) => (
            <motion.div
              key={interview.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
            >
              <InterviewPin interview={interview} />
            </motion.div>
          ))
        ) : (
          <motion.div
            className="col-span-full w-full flex flex-col items-center justify-center h-[28rem] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/assets/svg/not-found.svg"
              className="w-36 h-36 md:w-44 md:h-44 object-contain mb-6 drop-shadow-lg"
              alt="No Interviews"
            />

            <h2 className="text-2xl font-bold text-muted-foreground">
              You're Just Getting Started!
            </h2>

            <p className="w-full md:w-96 text-sm text-neutral-500 mt-3">
              Let’s get the ball rolling. Tap below to start your first mock interview session with AI support.
            </p>

            <Link to="/generate/create" className="mt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white flex items-center gap-2 hover:scale-105"
              >
                <Sparkles className="w-4 h-4" /> Create Interview
              </Button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
