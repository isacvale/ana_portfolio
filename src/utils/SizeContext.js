import { createContext } from "react";

const SizeContext = createContext({
  width: 520,
  height: 800,
  template: "mobile",
});
export const SizeProvider = SizeContext.Provider;
export default SizeContext;
