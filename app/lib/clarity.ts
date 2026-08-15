declare global {
  interface Window {
    clarity?: (action: string, ...args: any[]) => void;
  }
}

/**
 * Identify a user in Clarity session recordings
 * @param customUserId - Unique ID for the user
 * @param customSessionId - Optional session identifier
 * @param customPageId - Optional page identifier
 * @param friendlyName - Friendly display name (do NOT send sensitive PII)
 */
export function clarityIdentify(
  customUserId: string,
  customSessionId?: string,
  customPageId?: string,
  friendlyName?: string
): void {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("identify", customUserId, customSessionId, customPageId, friendlyName);
  }
}

/**
 * Set a Custom Tag (Key-Value Metadata) in Clarity to filter session recordings & heatmaps.
 * Examples: category: "GST Services", user_type: "NRI", lead_submitted: "true"
 */
export function claritySetTag(key: string, value: string | string[]): void {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("set", key, value);
  }
}

/**
 * Trigger a Custom Event / Smart Event in Clarity
 * Examples: "contact_form_submitted", "whatsapp_click", "phone_call_clicked", "cma_report_view"
 */
export function clarityEvent(eventName: string): void {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("event", eventName);
  }
}

/**
 * Upgrade current session priority or tag important sessions
 */
export function clarityUpgradeSession(reason: string): void {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("upgrade", reason);
  }
}
