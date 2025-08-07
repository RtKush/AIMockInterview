// import { Interview } from "@/types";
// import { useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "./ui/badge";
// import { cn } from "@/lib/utils";
// import { TooltipButton } from "./tooltip-button";
// import { Eye, Newspaper, Sparkles } from "lucide-react";

// interface InterviewPinProps {
//   interview: Interview;
//   onMockPage?: boolean;
// }

// export const InterviewPin = ({
//   interview,
//   onMockPage = false,
// }: InterviewPinProps) => {
//   const navigate = useNavigate();

//   return (
//     <Card className="p-4 rounded-md shadow-none hover:shadow-md shadow-gray-100 cursor-pointer transition-all space-y-4">
//       <CardTitle className="text-lg">{interview?.position}</CardTitle>
//       <CardDescription>{interview?.description}</CardDescription>
//       <div className="w-full flex items-center gap-2 flex-wrap">
//         {interview?.techStack.split(",").map((word, index) => (
//           <Badge
//             key={index}
//             variant={"outline"}
//             className="text-xs text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900"
//           >
//             {word}
//           </Badge>
//         ))}
//       </div>

//       <CardFooter
//         className={cn(
//           "w-full flex items-center p-0",
//           onMockPage ? "justify-end" : "justify-between"
//         )}
//       >
//         <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
//           {`${new Date(interview?.createdAt.toDate()).toLocaleDateString(
//             "en-US",
//             { dateStyle: "long" }
//           )} - ${new Date(interview?.createdAt.toDate()).toLocaleTimeString(
//             "en-US",
//             { timeStyle: "short" }
//           )}`}
//         </p>

//         {!onMockPage && (
//           <div className="flex items-center justify-center">
//             <TooltipButton
//               content="View"
//               buttonVariant={"ghost"}
//               onClick={() => {
//                 navigate(`/generate/${interview?.id}`, { replace: true });
//               }}
//               disabled={false}
//               buttonClassName="hover:text-sky-500"
//               icon={<Eye />}
//               loading={false}
//             />

//             <TooltipButton
//               content="Feedback"
//               buttonVariant={"ghost"}
//               onClick={() => {
//                 navigate(`/generate/feedback/${interview?.id}`, {
//                   replace: true,
//                 });
//               }}
//               disabled={false}
//               buttonClassName="hover:text-yellow-500"
//               icon={<Newspaper />}
//               loading={false}
//             />

//             <TooltipButton
//               content="Start"
//               buttonVariant={"ghost"}
//               onClick={() => {
//                 navigate(`/generate/interview/${interview?.id}`, {
//                   replace: true,
//                 });
//               }}
//               disabled={false}
//               buttonClassName="hover:text-sky-500"
//               icon={<Sparkles />}
//               loading={false}
//             />
//           </div>
//         )}
//       </CardFooter>
//     </Card>
//   );
// };





// import { Interview } from "@/types";
// import { useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "./ui/badge";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";

// interface InterviewPinProps {
//   interview: Interview;
//   onMockPage?: boolean;
// }

// export const InterviewPin = ({
//   interview,
//   onMockPage = false,
// }: InterviewPinProps) => {
//   const navigate = useNavigate();

//   const actions = [
//     {
//       label: "View",
//       path: `/generate/${interview.id}`,
//       color: "bg-blue-100 text-blue-700 hover:bg-blue-200",
//     },
//     {
//       label: "Feedback",
//       path: `/generate/feedback/${interview.id}`,
//       color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
//     },
//     {
//       label: "Start",
//       path: `/generate/interview/${interview.id}`,
//       color: "bg-green-100 text-green-800 hover:bg-green-200",
//     },
//   ];

//   return (
//     <motion.div
//       whileHover={{ scale: 1.01 }}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       <Card className="p-5 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200">
//         <CardTitle className="text-xl font-semibold text-emerald-800">
//           {interview?.position}
//         </CardTitle>
//         <CardDescription className="text-sm text-muted-foreground mt-1 mb-3">
//           {interview?.description}
//         </CardDescription>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {interview?.techStack.split(",").map((tech, index) => (
//             <Badge
//               key={index}
//               variant="outline"
//               className="text-xs px-2 py-1 rounded-full hover:bg-emerald-100 hover:text-emerald-800 transition-all"
//             >
//               {tech.trim()}
//             </Badge>
//           ))}
//         </div>

//         {!onMockPage && (
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
//             {actions.map((action, index) => (
//               <button
//                 key={index}
//                 onClick={() => navigate(action.path)}
//                 className={cn(
//                   "w-full py-2 text-sm font-medium rounded-md transition-all",
//                   action.color
//                 )}
//               >
//                 {action.label}
//               </button>
//             ))}
//           </div>
//         )}

//         <CardFooter className="text-xs text-muted-foreground">
//           {`${new Date(interview?.createdAt.toDate()).toLocaleDateString(
//             "en-US",
//             { dateStyle: "medium" }
//           )} at ${new Date(interview?.createdAt.toDate()).toLocaleTimeString(
//             "en-US",
//             { timeStyle: "short" }
//           )}`}
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// };




// import { Interview } from "@/types";
// import { useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "./ui/badge";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";

// interface InterviewPinProps {
//   interview: Interview;
//   onMockPage?: boolean;
// }

// const buttonVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1, duration: 0.3 },
//   }),
// };

// export const InterviewPin = ({
//   interview,
//   onMockPage = false,
// }: InterviewPinProps) => {
//   const navigate = useNavigate();

//   const actions = [
//     {
//       label: "View",
//       path: `/generate/${interview.id}`,
//       color:
//         "bg-blue-50 text-blue-700 hover:bg-blue-100 hover:shadow-md shadow-sm",
//     },
//     {
//       label: "Feedback",
//       path: `/generate/feedback/${interview.id}`,
//       color:
//         "bg-yellow-50 text-yellow-800 hover:bg-yellow-100 hover:shadow-md shadow-sm",
//     },
//     {
//       label: "Start",
//       path: `/generate/interview/${interview.id}`,
//       color:
//         "bg-green-50 text-green-800 hover:bg-green-100 hover:shadow-md shadow-sm",
//     },
//   ];

//   return (
//     <motion.div
//       whileHover={{ scale: 1.015 }}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       <Card className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
//         <div className="space-y-2 mb-4">
//           <CardTitle className="text-xl font-semibold text-emerald-800 truncate">
//             {interview?.position}
//           </CardTitle>
//           <CardDescription className="text-sm text-gray-600">
//             {interview?.description}
//           </CardDescription>
//         </div>

//         {/* Tech Stack Badges */}
//         <motion.div
//           className="flex flex-wrap gap-2 mb-5"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.05,
//               },
//             },
//           }}
//         >
//           {interview?.techStack.split(",").map((tech, index) => (
//             <motion.div
//               key={index}
//               variants={{
//                 hidden: { opacity: 0, y: 5 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <Badge
//                 variant="outline"
//                 className="text-xs px-2 py-1 rounded-full bg-gray-50 hover:bg-emerald-100 hover:text-emerald-800 transition-colors"
//               >
//                 {tech.trim()}
//               </Badge>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Buttons */}
//         {!onMockPage && (
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
//             {actions.map((action, index) => (
//               <motion.button
//                 key={index}
//                 onClick={() => navigate(action.path)}
//                 custom={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={buttonVariants}
//                 className={cn(
//                   "w-full py-2 text-sm font-semibold rounded-lg transition-all duration-200",
//                   action.color
//                 )}
//               >
//                 {action.label}
//               </motion.button>
//             ))}
//           </div>
//         )}

//         <CardFooter className="text-xs text-gray-400 mt-2">
//           {`${new Date(interview?.createdAt.toDate()).toLocaleDateString(
//             "en-US",
//             { dateStyle: "medium" }
//           )} at ${new Date(interview?.createdAt.toDate()).toLocaleTimeString(
//             "en-US",
//             { timeStyle: "short" }
//           )}`}
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// };


import { Interview } from "@/types";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Eye, MessageSquare, Play } from "lucide-react";

interface InterviewPinProps {
  interview: Interview;
  onMockPage?: boolean;
}

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

export const InterviewPin = ({
  interview,
  onMockPage = false,
}: InterviewPinProps) => {
  const navigate = useNavigate();

  const actions = [
    {
      label: "View",
      icon: <Eye size={16} className="mr-2" />,
      path: `/generate/${interview.id}`,
      color:
        "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 hover:from-blue-200 hover:to-blue-100",
    },
    {
      label: "Feedback",
      icon: <MessageSquare size={16} className="mr-2" />,
      path: `/generate/feedback/${interview.id}`,
      color:
        "bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 hover:from-yellow-200 hover:to-yellow-100",
    },
    {
      label: "Start",
      icon: <Play size={16} className="mr-2" />,
      path: `/generate/interview/${interview.id}`,
      color:
        "bg-gradient-to-r from-green-100 to-green-50 text-green-800 hover:from-green-200 hover:to-green-100",
    },
  ];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="p-6 rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300">
        <div className="space-y-2 mb-4">
          <CardTitle className="text-xl font-bold text-emerald-800 truncate">
            {interview?.position}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            {interview?.description}
          </CardDescription>
        </div>

        {/* Tech Stack Badges */}
        <motion.div
          className="flex flex-wrap gap-2 mb-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {interview?.techStack.split(",").map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Badge
                variant="outline"
                className="text-xs px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition"
              >
                {tech.trim()}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        {!onMockPage && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {actions.map((action, index) => (
              <motion.button
                key={index}
                onClick={() => navigate(action.path)}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                className={cn(
                  "w-full py-2 px-3 flex items-center justify-center text-sm font-semibold rounded-full shadow-sm transition-all duration-200",
                  action.color
                )}
              >
                {action.icon}
                {action.label}
              </motion.button>
            ))}
          </div>
        )}

        <CardFooter className="text-xs text-gray-400 mt-2">
          {`${new Date(interview?.createdAt.toDate()).toLocaleDateString(
            "en-US",
            { dateStyle: "medium" }
          )} at ${new Date(interview?.createdAt.toDate()).toLocaleTimeString(
            "en-US",
            { timeStyle: "short" }
          )}`}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
