// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { db } from "@/config/firebase.config";
// import { Interview } from "@/types";
// import { doc, getDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { LoaderPage } from "./loader-page";
// import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
// import { Button } from "@/components/ui/button";
// import { Lightbulb, Sparkles, WebcamIcon } from "lucide-react";
// import { InterviewPin } from "@/components/pin";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import WebCam from "react-webcam";

// export const MockLoadPage = () => {
//   const { interviewId } = useParams<{ interviewId: string }>();
//   const [interview, setInterview] = useState<Interview | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isWebCamEnabled, setIsWebCamEnabled] = useState(false);

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
//       <div className="flex items-center justify-between w-full gap-2">
//         <CustomBreadCrumb
//           breadCrumbPage={interview?.position || ""}
//           breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
//         />

//         <Link to={`/generate/interview/${interviewId}/start`}>
//           <Button size={"sm"}>
//             Start <Sparkles />
//           </Button>
//         </Link>
//       </div>

//       {interview && <InterviewPin interview={interview} onMockPage />}

//       <Alert className="bg-yellow-100/50 border-yellow-200 p-4 rounded-lg flex items-start gap-3 -mt-3">
//         <Lightbulb className="h-5 w-5 text-yellow-600" />
//         <div>
//           <AlertTitle className="text-yellow-800 font-semibold">
//             Important Information
//           </AlertTitle>
//           <AlertDescription className="text-sm text-yellow-700 mt-1">
//             Please enable your webcam and microphone to start the AI-generated
//             mock interview. The interview consists of five questions. You’ll
//             receive a personalized report based on your responses at the end.{" "}
//             <br />
//             <br />
//             <span className="font-medium">Note:</span> Your video is{" "}
//             <strong>never recorded</strong>. You can disable your webcam at any
//             time.
//           </AlertDescription>
//         </div>
//       </Alert>

//       <div className="flex items-center justify-center w-full h-full">
//         <div className="w-full h-[400px] md:w-96 flex flex-col items-center justify-center border p-4 bg-gray-50 rounded-md">
//           {isWebCamEnabled ? (
//             <WebCam
//               onUserMedia={() => setIsWebCamEnabled(true)}
//               onUserMediaError={() => setIsWebCamEnabled(false)}
//               className="w-full h-full object-cover rounded-md"
//             />
//           ) : (
//             <WebcamIcon className="min-w-24 min-h-24 text-muted-foreground" />
//           )}
//         </div>
//       </div>

//       <div className="flex items-center justify-center">
//         <Button onClick={() => setIsWebCamEnabled(!isWebCamEnabled)}>
//           {isWebCamEnabled ? "Disable Webcam" : "Enable Webcam"}
//         </Button>
//       </div>
//     </div>
//   );
// };



// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { db } from "@/config/firebase.config";
// import { Interview } from "@/types";
// import { doc, getDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { LoaderPage } from "./loader-page";
// import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
// import { Button } from "@/components/ui/button";
// import { Lightbulb, Sparkles, WebcamIcon } from "lucide-react";
// import { InterviewPin } from "@/components/pin";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import WebCam from "react-webcam";

// export const MockLoadPage = () => {
//   const { interviewId } = useParams<{ interviewId: string }>();
//   const [interview, setInterview] = useState<Interview | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isWebCamEnabled, setIsWebCamEnabled] = useState(false);

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
//           console.error(error);
//         } finally {
//           setIsLoading(false);
//         }
//       } else {
//         navigate("/generate", { replace: true });
//       }
//     };

//     fetchInterview();
//   }, [interviewId, navigate]);

//   if (isLoading) return <LoaderPage className="w-full h-[70vh]" />;

//   if (!interview) {
//     navigate("/generate", { replace: true });
//     return null;
//   }

//   return (
//     <div className="flex flex-col w-full gap-8 py-5 px-4 sm:px-6 lg:px-8">
//       {/* Header and Start Button */}
//       <div className="flex items-center justify-between w-full gap-2">
//         <CustomBreadCrumb
//           breadCrumbPage={interview?.position || ""}
//           breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
//         />

//         <Link to={`/generate/interview/${interviewId}/start`}>
//           <Button size="sm" className="flex items-center gap-1">
//             Start <Sparkles className="w-4 h-4" />
//           </Button>
//         </Link>
//       </div>

//       {/* Interview Pin Info */}
//       {interview && <InterviewPin interview={interview} onMockPage />}

//       {/* Alert / Notes Section */}
//       <Alert className="bg-yellow-50 border-l-4 border-yellow-400 shadow-sm">
//         <div className="flex items-start gap-3">
//           <Lightbulb className="h-5 w-5 text-yellow-600 mt-1" />
//           <div>
//             <AlertTitle className="text-yellow-800 font-semibold">
//               Important Information
//             </AlertTitle>
//             <AlertDescription className="text-sm text-yellow-700 mt-1 leading-relaxed">
//               Please enable your webcam and microphone to start the AI-generated mock interview. 
//               The interview consists of five questions. You'll receive a personalized report based on your responses at the end.
//               <br />
//               <br />
//               <span className="font-medium">Note:</span>{" "}
//               <strong>Your video is never recorded.</strong> You can disable your webcam anytime.
//             </AlertDescription>
//           </div>
//         </div>
//       </Alert>

//       {/* Webcam Display */}
//       <div className="flex items-center justify-center w-full">
//         <div className="w-full max-w-xs h-[400px] border border-gray-300 rounded-lg shadow-sm bg-white flex items-center justify-center">
//           {isWebCamEnabled ? (
//             <WebCam
//               onUserMedia={() => setIsWebCamEnabled(true)}
//               onUserMediaError={() => setIsWebCamEnabled(false)}
//               className="w-full h-full object-cover rounded-md"
//             />
//           ) : (
//             <WebcamIcon className="w-20 h-20 text-gray-400" />
//           )}
//         </div>
//       </div>

//       {/* Webcam Toggle Button */}
//       <div className="flex items-center justify-center">
//         <Button onClick={() => setIsWebCamEnabled(!isWebCamEnabled)}>
//           {isWebCamEnabled ? "Disable Webcam" : "Enable Webcam"}
//         </Button>
//       </div>
//     </div>
//   );
// };


/* eslint-disable @typescript-eslint/no-unused-vars */
import { db } from "@/config/firebase.config";
import { Interview } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LoaderPage } from "./loader-page";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { Button } from "@/components/ui/button";
import { Lightbulb, Sparkles, WebcamIcon, Video } from "lucide-react";
import { InterviewPin } from "@/components/pin";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import WebCam from "react-webcam";

export const MockLoadPage = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isWebCamEnabled, setIsWebCamEnabled] = useState(false);

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

  if (isLoading) return <LoaderPage className="w-full h-[70vh]" />;

  if (!interview) {
    navigate("/generate", { replace: true });
    return null;
  }

  return (
    <div className="flex flex-col w-full gap-8 py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <CustomBreadCrumb
          breadCrumbPage={interview?.position || ""}
          breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
        />

        <Link to={`/generate/interview/${interviewId}/start`}>
          <Button
            size="sm"
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-900 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600 shadow-md"
          >
            <Sparkles className="w-4 h-4" />
            Start Interview
          </Button>
        </Link>
      </div>

      {/* Interview Info */}
      {interview && <InterviewPin interview={interview} onMockPage />}

      {/* Alert Info */}
      <Alert className="bg-yellow-50/90 border-l-4 border-yellow-400 shadow-sm rounded-lg">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-yellow-600 mt-1" />
          <div>
            <AlertTitle className="text-yellow-800 font-semibold text-base">
              Important Tips Before You Start
            </AlertTitle>
            <AlertDescription className="text-sm text-yellow-700 mt-1 leading-relaxed">
              🎤 Ensure your <strong>microphone and webcam</strong> are enabled.
              <br />
              🧠 The AI will ask <strong>5 personalized questions</strong>.
              <br />
              📊 At the end, you'll receive a detailed performance <strong>report</strong>.
              <br />
              <br />
              <span className="font-semibold">Note:</span>{" "}
              <em>Your video is <strong>never recorded</strong>. It's only used in real-time.</em>
            </AlertDescription>
          </div>
        </div>
      </Alert>

      {/* Webcam Section */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-xs h-[400px] border-2 border-blue-200 rounded-2xl shadow-lg bg-white overflow-hidden flex items-center justify-center transition-all">
          {isWebCamEnabled ? (
            <WebCam
              onUserMedia={() => setIsWebCamEnabled(true)}
              onUserMediaError={() => setIsWebCamEnabled(false)}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <div className="text-center text-gray-400 flex flex-col items-center gap-2">
              <WebcamIcon className="w-16 h-16" />
              <span className="text-sm">Webcam is disabled</span>
            </div>
          )}
        </div>
      </div>

      {/* Webcam Toggle */}
      <div className="flex items-center justify-center">
        <Button
          onClick={() => setIsWebCamEnabled(!isWebCamEnabled)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
            isWebCamEnabled
              ? "bg-red-100 text-red-700 hover:bg-red-200"
              : "bg-green-100 text-green-800 hover:bg-green-200"
          }`}
        >
          <Video className="w-4 h-4" />
          {isWebCamEnabled ? "Disable Webcam" : "Enable Webcam"}
        </Button>
      </div>
    </div>
  );
};
