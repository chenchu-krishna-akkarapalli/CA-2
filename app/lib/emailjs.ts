import emailjs from "@emailjs/browser";

export interface EmailParams extends Record<string, unknown> {
  from_name?: string;
  from_email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
  status?: number;
  error?: unknown;
}

/**
 * Validates basic email string format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates phone number format (basic check)
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
  return phoneRegex.test(phone.trim());
}

/**
 * Sends an email using EmailJS SDK with environment variable fallbacks
 * and client-side validation.
 */
export async function sendEmail(
  params: EmailParams,
  customTemplateId?: string
): Promise<SendEmailResponse> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_default";
  const templateId = customTemplateId || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Validate presence of credentials
  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      "EmailJS credentials missing in environment variables. Operating in fallback simulation mode."
    );
    return {
      success: false,
      message: "Email service configuration is incomplete. Please try calling or emailing directly.",
    };
  }

  // Validate required parameters if provided
  if (params.from_email && !validateEmail(params.from_email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      params,
      publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Your message has been sent successfully!",
        status: response.status,
      };
    } else {
      return {
        success: false,
        message: `Failed to send email (Status: ${response.status}). Please try again later.`,
        status: response.status,
      };
    }
  } catch (err: any) {
    console.error("EmailJS Error:", err);
    return {
      success: false,
      message: err?.text || err?.message || "An unexpected error occurred while sending email.",
      error: err,
    };
  }
}
