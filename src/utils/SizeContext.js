import { createContext } from "react";

const SizeContext = createContext({
  width: 500,
  height: 800,
  template: "mobile",
});
export const SizeProvider = SizeContext.Provider;
export default SizeContext;
