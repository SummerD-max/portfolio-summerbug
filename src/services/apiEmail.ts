import { init, sendForm } from "@emailjs/browser";

const PUBLIC_KEY = "d9ODlPWT3hedrGrEW";
const SERVICE_ID = "service_kaxohz6";
const CONTACT_US_TEMPLATE_ID = "template_fmvl50c";

init(PUBLIC_KEY);

export async function sendEmail(formEl: HTMLFormElement) {
  try {
    const result = await sendForm(SERVICE_ID, CONTACT_US_TEMPLATE_ID, formEl);

    console.log(result);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
