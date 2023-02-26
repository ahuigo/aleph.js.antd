import Header from "../components/Header.tsx";
import { createContext } from "react";
export type AppContextProps = {
  conf: Record<string, string>;
};
const AppContext = createContext<AppContextProps>({
  conf: {},
});
AppContext.displayName = "hdmap-aleph";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={{conf:{}}}>
      <>
      <Header />
      {children}
      </>
    </AppContext.Provider>
  );
}
