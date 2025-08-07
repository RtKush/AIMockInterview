// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { Interview } from "@/types";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { LoaderPage } from "./loader-page";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/config/firebase.config";
// import { CustomBreadCrumb } from "@/components/custom-bread-crumb";

// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Lightbulb } from "lucide-react";
// import { QuestionSection } from "@/components/question-section";

// export const MockInterviewPage = () => {
//   const { interviewId } = useParams<{ interviewId: string }>();
//   const [interview, setInterview] = useState<Interview | null>(null);

//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsLoading(true);
//     const fetchInterview = async () => {
//       if (interviewId) {
//         try {
//           const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
//           if (interviewDoc.exists()) {
//             setInterview({
//               id: interviewDoc.id,
//               ...interviewDoc.data(),
//             } as Interview);
//           }
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setIsLoading(false);
//         }
//       }
//     };

//     fetchInterview();
//   }, [interviewId, navigate]);

//   if (isLoading) {
//     return <LoaderPage className="w-full h-[70vh]" />;
//   }

//   if (!interviewId) {
//     navigate("/generate", { replace: true });
//   }

//   if (!interview) {
//     navigate("/generate", { replace: true });
//   }

//   return (
//     <div className="flex flex-col w-full gap-8 py-5">
//       <CustomBreadCrumb
//         breadCrumbPage="Start"
//         breadCrumpItems={[
//           { label: "Mock Interviews", link: "/generate" },
//           {
//             label: interview?.position || "",
//             link: `/generate/interview/${interview?.id}`,
//           },
//         ]}
//       />

//       <div className="w-full">
//         <Alert className="bg-sky-100 border border-sky-200 p-4 rounded-lg flex items-start gap-3">
//           <Lightbulb className="h-5 w-5 text-sky-600" />
//           <div>
//             <AlertTitle className="text-sky-800 font-semibold">
//               Important Note
//             </AlertTitle>
//             <AlertDescription className="text-sm text-sky-700 mt-1 leading-relaxed">
//               Press "Record Answer" to begin answering the question. Once you
//               finish the interview, you&apos;ll receive feedback comparing your
//               responses with the ideal answers.
//               <br />
//               <br />
//               <strong>Note:</strong>{" "}
//               <span className="font-medium">Your video is never recorded.</span>{" "}
//               You can disable the webcam anytime if preferred.
//             </AlertDescription>
//           </div>
//         </Alert>
//       </div>

//       {interview?.questions && interview?.questions.length > 0 && (
//         <div className="mt-4 w-full flex flex-col items-start gap-4">
//           <QuestionSection questions={interview?.questions} />
//         </div>
//       )}
//     </div>
//   );
// };


/* eslint-disable @typescript-eslint/no-unused-vars */
import { Interview } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoaderPage } from "./loader-page";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { QuestionSection } from "@/components/question-section";

export const MockInterviewPage = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const fetchInterview = async () => {
      if (interviewId) {
        try {
          const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
          if (interviewDoc.exists()) {
            setInterview({
              id: interviewDoc.id,
              ...interviewDoc.data(),
            } as Interview);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      } else {
        navigate("/generate", { replace: true });
      }
    };

    fetchInterview();
  }, [interviewId, navigate]);

  if (isLoading) {
    return <LoaderPage className="w-full h-[70vh]" />;
  }

  if (!interview) {
    navigate("/generate", { replace: true });
    return null;
  }

  return (
    <div className="flex flex-col w-full gap-8 py-5 px-4 sm:px-6 lg:px-8">
      <CustomBreadCrumb
        breadCrumbPage="Start"
        breadCrumpItems={[
          { label: "Mock Interviews", link: "/generate" },
          {
            label: interview?.position || "",
            link: `/generate/interview/${interview?.id}`,
          },
        ]}
      />

      {/* 🧠 Animated Notes Section */}
      <div className="w-full mt-4">
        <div className="bg-gradient-to-r from-sky-100 to-sky-200 border-l-4 border-sky-500 rounded-lg p-5 shadow-md transition-all duration-300">
          <h2 className="text-xl font-semibold text-sky-700 flex items-center gap-2">
            💡 Important Notes
          </h2>
          <ul className="mt-3 list-disc list-inside text-sm text-sky-800 space-y-2">
            <li>
              Press <strong>"Record Answer"</strong> to begin answering each question.
            </li>
            <li>
              Once the interview is complete, you’ll receive feedback comparing your responses with ideal answers.
            </li>
            <li>
              <span className="font-medium">Your video is never recorded.</span> You can disable the webcam anytime.
            </li>
            <li>
              Ensure a stable internet connection for the best experience.
            </li>
          </ul>
        </div>
      </div>

      {/* 🎤 Question Section */}
      {interview?.questions && interview?.questions.length > 0 && (
        <div className="mt-4 w-full flex flex-col items-start gap-4">
          <QuestionSection questions={interview.questions} />
        </div>
      )}
    </div>
  );
};
