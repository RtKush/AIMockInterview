
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Interview } from "@/types";
import { CustomBreadCrumb } from "./custom-bread-crumb";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";
import { Headings } from "./headings";
import { Button } from "./ui/button";
import { Loader, Trash2 } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { chatSession } from "@/scripts";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";

interface FormMockInterviewProps {
  initialData: Interview | null;
}

const formSchema = z.object({
  position: z.string().min(1).max(100),
  description: z.string().min(10),
  experience: z.coerce.number().min(0),
  techStack: z.string().min(1),
});

type FormData = z.infer<typeof formSchema>;

export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {},
  });

  const { isValid, isSubmitting } = form.formState;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useAuth();

  const title = initialData ? initialData.position : "Create a new mock interview";
  const breadCrumpPage = initialData ? initialData.position : "Create";
  const actions = initialData ? "Save Changes" : "Create";
  const toastMessage = initialData
    ? { title: "Updated..", description: "Changes saved successfully." }
    : { title: "Created..", description: "New Mock Interview created." };

  const cleanAiResponse = (responseText: string) => {
    let cleanText = responseText.trim().replace(/(json|```|`)/g, "");
    const jsonArrayMatch = cleanText.match(/\[.*\]/s);
    if (!jsonArrayMatch) throw new Error("No JSON array found in response");
    try {
      return JSON.parse(jsonArrayMatch[0]);
    } catch (error) {
      throw new Error("Invalid JSON format: " + (error as Error)?.message);
    }
  };

  const generateAiResponse = async (data: FormData) => {
    const prompt = `
      Generate a JSON array with 5 technical interview questions and answers for:
      Position: ${data.position}
      Description: ${data.description}
      Experience: ${data.experience} years
      Tech Stack: ${data.techStack}
      Output format: [{"question": "", "answer": ""}]
    `;
    const aiResult = await chatSession.sendMessage(prompt);
    return cleanAiResponse(aiResult.response.text());
  };

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const aiResult = await generateAiResponse(data);

      if (initialData) {
        await updateDoc(doc(db, "interviews", initialData.id), {
          ...data,
          questions: aiResult,
          updatedAt: serverTimestamp(),
        });
      } else {
        await addDoc(collection(db, "interviews"), {
          ...data,
          userId,
          questions: aiResult,
          createdAt: serverTimestamp(),
        });
      }

      toast(toastMessage.title, { description: toastMessage.description });
      navigate("/generate", { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Error", { description: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialData) {
      form.reset({
        position: initialData.position,
        description: initialData.description,
        experience: initialData.experience,
        techStack: initialData.techStack,
      });
    }
  }, [initialData, form]);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in">
      <CustomBreadCrumb
        breadCrumbPage={breadCrumpPage}
        breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
      />

      <div className="flex items-center justify-between">
        <Headings title={title} isSubHeading />
        {initialData && (
          <Button size="icon" variant="ghost">
            <Trash2 className="w-5 h-5 text-red-500" />
          </Button>
        )}
      </div>

      <Separator />

      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 bg-white shadow-lg p-8 rounded-xl border border-gray-200 transition-all duration-300"
        >
          {(["position", "description", "experience", "techStack"] as const).map(
            (name) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="capitalize text-sm font-semibold">
                      {name.replace("techStack", "Tech Stack").replace("position", "Job Role")}
                    </FormLabel>
                    <FormControl>
                      {name === "description" || name === "techStack" ? (
                        <Textarea
                          className="h-24"
                          disabled={loading}
                          placeholder={`Enter ${name}`}
                          {...field}
                          value={field.value || ""}
                        />
                      ) : (
                        <Input
                          type={name === "experience" ? "number" : "text"}
                          className="h-12"
                          disabled={loading}
                          placeholder={`Enter ${name}`}
                          {...field}
                          value={field.value || ""}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          )}

          <div className="flex justify-end gap-4">
            <Button
              type="reset"
              variant="outline"
              disabled={loading || isSubmitting}
            >
              Reset
            </Button>
            <Button
              type="submit"
              disabled={!isValid || loading || isSubmitting}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              {loading ? <Loader className="animate-spin" /> : actions}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
