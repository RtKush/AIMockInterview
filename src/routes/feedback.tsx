// import { db } from "@/config/firebase.config";
// import { Interview, UserAnswer } from "@/types";
// import { useAuth } from "@clerk/clerk-react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   query,
//   where,
// } from "firebase/firestore";
// import { useEffect, useMemo, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "sonner";
// import { LoaderPage } from "./loader-page";
// import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
// import { Headings } from "@/components/headings";
// import { InterviewPin } from "@/components/pin";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { cn } from "@/lib/utils";
// import { CircleCheck, Star } from "lucide-react";
// import { Card, CardDescription, CardTitle } from "@/components/ui/card";

// export const Feedback = () => {
//   const { interviewId } = useParams<{ interviewId: string }>();
//   const [interview, setInterview] = useState<Interview | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [feedbacks, setFeedbacks] = useState<UserAnswer[]>([]);
//   const [activeFeed, setActiveFeed] = useState("");
//   const { userId } = useAuth();
//   const navigate = useNavigate();

//   if (!interviewId) {
//     navigate("/generate", { replace: true });
//   }
//   useEffect(() => {
//     if (interviewId) {
//       const fetchInterview = async () => {
//         if (interviewId) {
//           try {
//             const interviewDoc = await getDoc(
//               doc(db, "interviews", interviewId)
//             );
//             if (interviewDoc.exists()) {
//               setInterview({
//                 id: interviewDoc.id,
//                 ...interviewDoc.data(),
//               } as Interview);
//             }
//           } catch (error) {
//             console.log(error);
//           }
//         }
//       };

//       const fetchFeedbacks = async () => {
//         setIsLoading(true);
//         try {
//           const querSanpRef = query(
//             collection(db, "userAnswers"),
//             where("userId", "==", userId),
//             where("mockIdRef", "==", interviewId)
//           );

//           const querySnap = await getDocs(querSanpRef);

//           const interviewData: UserAnswer[] = querySnap.docs.map((doc) => {
//             return { id: doc.id, ...doc.data() } as UserAnswer;
//           });

//           setFeedbacks(interviewData);
//         } catch (error) {
//           console.log(error);
//           toast("Error", {
//             description: "Something went wrong. Please try again later..",
//           });
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       fetchInterview();
//       fetchFeedbacks();
//     }
//   }, [interviewId, navigate, userId]);

//   //   calculate the ratings out of 10

//   const overAllRating = useMemo(() => {
//     if (feedbacks.length === 0) return "0.0";

//     const totalRatings = feedbacks.reduce(
//       (acc, feedback) => acc + feedback.rating,
//       0
//     );

//     return (totalRatings / feedbacks.length).toFixed(1);
//   }, [feedbacks]);

//   if (isLoading) {
//     return <LoaderPage className="w-full h-[70vh]" />;
//   }

//   return (
//     <div className="flex flex-col w-full gap-8 py-5">
//       <div className="flex items-center justify-between w-full gap-2">
//         <CustomBreadCrumb
//           breadCrumbPage={"Feedback"}
//           breadCrumpItems={[
//             { label: "Mock Interviews", link: "/generate" },
//             {
//               label: `${interview?.position}`,
//               link: `/generate/interview/${interview?.id}`,
//             },
//           ]}
//         />
//       </div>

//       <Headings
//         title="Congratulations !"
//         description="Your personalized feedback is now available. Dive in to see your strengths, areas for improvement, and tips to help you ace your next interview."
//       />

//       <p className="text-base text-muted-foreground">
//         Your overall interview ratings :{" "}
//         <span className="text-emerald-500 font-semibold text-xl">
//           {overAllRating} / 10
//         </span>
//       </p>

//       {interview && <InterviewPin interview={interview} onMockPage />}

//       <Headings title="Interview Feedback" isSubHeading />

//       {feedbacks && (
//         <Accordion type="single" collapsible className="space-y-6">
//           {feedbacks.map((feed) => (
//             <AccordionItem
//               key={feed.id}
//               value={feed.id}
//               className="border rounded-lg shadow-md"
//             >
//               <AccordionTrigger
//                 onClick={() => setActiveFeed(feed.id)}
//                 className={cn(
//                   "px-5 py-3 flex items-center justify-between text-base rounded-t-lg transition-colors hover:no-underline",
//                   activeFeed === feed.id
//                     ? "bg-gradient-to-r from-purple-50 to-blue-50"
//                     : "hover:bg-gray-50"
//                 )}
//               >
//                 <span>{feed.question}</span>
//               </AccordionTrigger>

//               <AccordionContent className="px-5 py-6 bg-white rounded-b-lg space-y-5 shadow-inner">
//                 <div className="text-lg font-semibold to-gray-700">
//                   <Star className="inline mr-2 text-yellow-400" />
//                   Rating : {feed.rating}
//                 </div>

//                 <Card className="border-none space-y-3 p-4 bg-green-50 rounded-lg shadow-md">
//                   <CardTitle className="flex items-center text-lg">
//                     <CircleCheck className="mr-2 text-green-600" />
//                     Expected Answer
//                   </CardTitle>

//                   <CardDescription className="font-medium text-gray-700">
//                     {feed.correct_ans}
//                   </CardDescription>
//                 </Card>

//                 <Card className="border-none space-y-3 p-4 bg-yellow-50 rounded-lg shadow-md">
//                   <CardTitle className="flex items-center text-lg">
//                     <CircleCheck className="mr-2 text-yellow-600" />
//                     Your Answer
//                   </CardTitle>

//                   <CardDescription className="font-medium text-gray-700">
//                     {feed.user_ans}
//                   </CardDescription>
//                 </Card>

//                 <Card className="border-none space-y-3 p-4 bg-red-50 rounded-lg shadow-md">
//                   <CardTitle className="flex items-center text-lg">
//                     <CircleCheck className="mr-2 text-red-600" />
//                     Feedback
//                   </CardTitle>

//                   <CardDescription className="font-medium text-gray-700">
//                     {feed.feedback}
//                   </CardDescription>
//                 </Card>
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       )}
//     </div>
//   );
// };


// src/routes/feedback.tsx


import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { CheckCircle2, ThumbsUp, Lightbulb } from 'lucide-react';

const Feedback = () => {
  return (
    <div className="flex flex-col gap-6 p-4 max-w-3xl mx-auto">
      {/* Completion Card */}
      <Card className="shadow-md">
        <CardContent className="flex items-center gap-4 p-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
          <div>
            <h2 className="text-xl font-semibold">Mock Interview Completed</h2>
            <p className="text-sm text-muted-foreground">
              Well done! Here's your performance summary and tips to improve.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Feedback Summary */}
      <Card className="shadow-md">
        <CardContent className="p-6 space-y-3">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <ThumbsUp className="w-5 h-5 text-blue-500" />
            Feedback Summary
          </h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground pl-4">
            <li>Clear and structured communication throughout.</li>
            <li>Confidently handled technical questions.</li>
            <li>Good logical reasoning and articulation.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Suggestions */}
      <Card className="shadow-md">
        <CardContent className="p-6 space-y-3">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            Suggestions to Improve
          </h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground pl-4">
            <li>Be more concise in some answers.</li>
            <li>Give more structured system design explanations.</li>
            <li>Work on edge case analysis in coding questions.</li>
          </ul>
        </CardContent>
      </Card>

    
    </div>
  );
};

export default Feedback;
