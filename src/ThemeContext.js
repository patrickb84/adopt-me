import { createContext } from "react";

// createContext --
// "This is what a hook looks like"
// It has a STATE and it has an UPDATER
// State = ["green"], updater, in this case, is () => {} which is an empty fn
const ThemeContext = createContext(["green"], () => {});

export default ThemeContext;
