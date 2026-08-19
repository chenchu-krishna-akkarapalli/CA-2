import emailjs from "@emailjs/browser";

export interface EmailParams extends Record<string, unknown> {
  from_name?: string;
  from_email?: string;
  email?: string;
  name?: string;
  phone?: string;
  service?: string;
  subject?: string;
  message?: string;
  company_name?: string;
  title?: string;
  reply_to?: string;
  to_email?: string;
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
 * and auto-reply support.
 */
export async function sendEmail(
  params: EmailParams,
  customTemplateId?: string
): Promise<SendEmailResponse> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_default";
  const templateId = customTemplateId || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Validate presence of credentials
  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      "EmailJS credentials missing in environment variables. Operating in fallback simulation mode."
    );
    return {
      success: false,
      message: "Email service configuration is incomplete. Please check service ID.",
    };
  }

  const clientEmail = params.from_email || params.email || "";
  const clientName = params.from_name || params.name || "Client";

  // Validate required parameters if provided
  if (clientEmail && !validateEmail(clientEmail)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  // Normalize and enrich template params for both admin notifications and auto-replies
  const enrichedParams: Record<string, unknown> = {
    ...params,
    from_name: clientName,
    name: clientName,
    user_name: clientName,
    to_name: clientName,
    from_email: clientEmail,
    email: clientEmail,
    user_email: clientEmail,
    reply_to: clientEmail,
    to_email: clientEmail,
  };

  try {
    // 1. Send Main Notification Email to Firm
    const response = await emailjs.send(
      serviceId,
      templateId,
      enrichedParams,
      publicKey
    );

    // 2. If separate Auto-Reply template is configured, send auto-reply to client
    if (autoReplyTemplateId && clientEmail) {
      try {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          enrichedParams,
          publicKey
        );
      } catch (autoReplyErr) {
        console.warn("Auto-reply trigger warning:", autoReplyErr);
      }
    }

    if (response.status === 200) {
      return {
        success: true,
        message: "Your message has been sent successfully!",
        status: response.status,
      };
    } else {
      return {
        success: false,
        message: `Failed to send email (Status: ${response.status}).`,
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
