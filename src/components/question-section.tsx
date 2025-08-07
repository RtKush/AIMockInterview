// import { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { cn } from "@/lib/utils";
// import { TooltipButton } from "./tooltip-button";
// import { Volume2, VolumeX } from "lucide-react";
// import { RecordAnswer } from "./record-answer";

// interface QuestionSectionProps {
//   questions: { question: string; answer: string }[];
// }

// export const QuestionSection = ({ questions }: QuestionSectionProps) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isWebCam, setIsWebCam] = useState(false);

//   const [currentSpeech, setCurrentSpeech] =
//     useState<SpeechSynthesisUtterance | null>(null);

//   const handlePlayQuestion = (qst: string) => {
//     if (isPlaying && currentSpeech) {
//       // stop the speech if already playing
//       window.speechSynthesis.cancel();
//       setIsPlaying(false);
//       setCurrentSpeech(null);
//     } else {
//       if ("speechSynthesis" in window) {
//         const speech = new SpeechSynthesisUtterance(qst);
//         window.speechSynthesis.speak(speech);
//         setIsPlaying(true);
//         setCurrentSpeech(speech);

//         // handle the speech end
//         speech.onend = () => {
//           setIsPlaying(false);
//           setCurrentSpeech(null);
//         };
//       }
//     }
//   };

//   return (
//     <div className="w-full min-h-96 border rounded-md p-4">
//       <Tabs
//         defaultValue={questions[0]?.question}
//         className="w-full space-y-12"
//         orientation="vertical"
//       >
//         <TabsList className="bg-transparent w-full flex flex-wrap items-center justify-start gap-4">
//           {questions?.map((tab, i) => (
//             <TabsTrigger
//               className={cn(
//                 "data-[state=active]:bg-emerald-200 data-[state=active]:shadow-md text-xs px-2"
//               )}
//               key={tab.question}
//               value={tab.question}
//             >
//               {`Question #${i + 1}`}
//             </TabsTrigger>
//           ))}
//         </TabsList>

//         {questions?.map((tab, i) => (
//           <TabsContent key={i} value={tab.question}>
//             <p className="text-base text-left tracking-wide text-neutral-500">
//               {tab.question}
//             </p>

//             <div className="w-full flex items-center justify-end">
//               <TooltipButton
//                 content={isPlaying ? "Stop" : "Start"}
//                 icon={
//                   isPlaying ? (
//                     <VolumeX className="min-w-5 min-h-5 text-muted-foreground" />
//                   ) : (
//                     <Volume2 className="min-w-5 min-h-5 text-muted-foreground" />
//                   )
//                 }
//                 onClick={() => handlePlayQuestion(tab.question)}
//               />
//             </div>

//             <RecordAnswer
//               question={tab}
//               isWebCam={isWebCam}
//               setIsWebCam={setIsWebCam}
//             />
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   );
// };


import { useState } from "react";
import { cn } from "@/lib/utils";
import { Volume2, VolumeX } from "lucide-react";
import { TooltipButton } from "./tooltip-button";
import { RecordAnswer } from "./record-answer";

interface Question {
  question: string;
  answer: string;
}

interface QuestionSectionProps {
  questions: Question[];
}

export const QuestionSection = ({ questions }: QuestionSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWebCam, setIsWebCam] = useState(false);
  const [currentSpeech, setCurrentSpeech] = useState<SpeechSynthesisUtterance | null>(null);

  const handlePlayQuestion = (qst: string) => {
    if (isPlaying && currentSpeech) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentSpeech(null);
    } else {
      const speech = new SpeechSynthesisUtterance(qst);
      window.speechSynthesis.speak(speech);
      setIsPlaying(true);
      setCurrentSpeech(speech);
      speech.onend = () => {
        setIsPlaying(false);
        setCurrentSpeech(null);
      };
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen p-4 space-y-4 md:space-y-0 md:space-x-6">
      
      {/* Vertical Question Numbers */}
      <div className="w-full md:w-20 flex md:flex-col justify-start items-center gap-3">
        {questions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "w-10 h-10 rounded-full border text-sm font-semibold",
              activeIndex === idx
                ? "bg-emerald-500 text-white shadow-md"
                : "text-gray-600 border-gray-300 hover:bg-gray-100"
            )}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Question + Webcam */}
      <div className="flex-1 space-y-4">
        <div className="p-4 rounded-md shadow bg-white transition-all">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-neutral-800">{`Question #${activeIndex + 1}`}</h2>
              <p className="text-sm text-neutral-600 mt-1 max-w-3xl">
                {questions[activeIndex]?.question}
              </p>
            </div>

            <TooltipButton
              content={isPlaying ? "Stop" : "Play"}
              icon={
                isPlaying ? (
                  <VolumeX className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Volume2 className="w-5 h-5 text-muted-foreground" />
                )
              }
              onClick={() => handlePlayQuestion(questions[activeIndex]?.question)}
            />
          </div>
        </div>

        {/* Webcam + Answer side by side */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
          {/* Webcam */}
          <div className="w-full lg:w-1/2 min-h-[300px] bg-gray-100 rounded-md flex items-center justify-center shadow">
            <RecordAnswer
              question={questions[activeIndex]}
              isWebCam={isWebCam}
              setIsWebCam={setIsWebCam}
            />
          </div>

          {/* Answer Box */}
          <div className="w-full lg:w-1/2 min-h-[300px] bg-gray-50 rounded-md p-4 shadow">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Your Answer:</h3>
            <p className="text-sm text-gray-500">
              Start recording to see your answer here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
