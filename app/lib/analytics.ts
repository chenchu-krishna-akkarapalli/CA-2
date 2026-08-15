import { clarityEvent, claritySetTag } from "./clarity";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Record<string, any>[];
  }
}

/**
 * Track generic analytics event via GA4 / GTM dataLayer & Microsoft Clarity
 */
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window === "undefined") return;

  // Google Analytics 4 (gtag.js)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Google Tag Manager (dataLayer)
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // Microsoft Clarity Smart Custom Event
  clarityEvent(eventName);

  // Set parameters as Clarity Custom Tags
  if (params) {
    Object.entries(params).forEach(([key, val]) => {
      if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
        claritySetTag(key, String(val));
      }
    });
  }
}

/**
 * Track form submissions (e.g. Contact Form, Free Quote Form)
 */
export function trackFormSubmission(formName: string, additionalData?: Record<string, any>): void {
  trackEvent("form_submission", {
    form_name: formName,
    page_location: typeof window !== "undefined" ? window.location.href : "",
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
  claritySetTag("lead_converted", "true");
}

/**
 * Track button clicks (e.g. Call to Action, WhatsApp click, Phone call)
 */
export function trackButtonClick(buttonName: string, category: string = "engagement", label?: string): void {
  trackEvent("button_click", {
    button_name: buttonName,
    event_category: category,
    event_label: label || buttonName,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
}

