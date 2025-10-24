import { useMutation } from "@tanstack/react-query";
import { sendEmail as sendEmailApi } from "./apiEmail";
import toast from "react-hot-toast";

export function useSendEmail() {
  const { mutate: sendEmail, isPending: isSending } = useMutation({
    mutationFn: sendEmailApi,
    onSuccess: () => {
      toast.success("Email sent successfully!");
    },
    onError: () => {
      toast.error("Failed to send email.");
    },
  });
  return { sendEmail, isSending };
}
