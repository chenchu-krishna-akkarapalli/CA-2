"use client";

import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode,
} from "react";
import aboutData, { AboutData } from "../data/about";

/* ── State shape ── */
interface AppState {
  about: AboutData;
  navVisible: boolean;
  pageReady: boolean;
}

/* ── Actions ── */
type AppAction =
  | { type: "SET_NAV_VISIBLE"; payload: boolean }
  | { type: "SET_PAGE_READY"; payload: boolean };

/* ── Reducer ── */
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_NAV_VISIBLE":
      return { ...state, navVisible: action.payload };
    case "SET_PAGE_READY":
      return { ...state, pageReady: action.payload };
    default:
      return state;
  }
}

/* ── Initial state — about data is imported at module level (zero-latency) ── */
const initialState: AppState = {
  about: aboutData,
  navVisible: true,
  pageReady: false,
};

/* ── Context ── */
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

/* ── Provider ── */
export function AppStoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/* ── Hooks ── */
export function useAppStore() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppStore must be used inside AppStoreProvider");
  return ctx;
}

export function useAboutData(): AboutData {
  const { state } = useAppStore();
  return state.about;
}
