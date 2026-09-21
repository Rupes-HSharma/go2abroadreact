const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/36cfca22e74843ec32d970ea3c9ccd48";

export async function submitContactForm(form) {
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  payload._subject = "New Go2Abroad Counselling Enquiry";
  payload._template = "table";
  payload._captcha = "true";
  payload._replyto = payload.email || "";
  payload._cc = "info@go2abroad.co";
  payload._url = window.location.href;

  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.success === false) {
    throw new Error(data.message || "Unable to submit the enquiry right now. If this is the first submission, the FormSubmit email must be activated once.");
  }

  return data;
}
