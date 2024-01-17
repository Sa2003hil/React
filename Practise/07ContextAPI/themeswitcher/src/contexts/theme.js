import { createContext, useContext } from 'react';

/* 
This is the different approach of making the context in one file only and not making a separate file for provider

1. We are providing the default value of the context in the provider (value={{ themeMode & two methods---->  lightTheme, darkTheme }})


*/
export const ThemeContext = createContext({
    themeMode: 'light',
    // These are two methods which we will use to change the theme
    lightTheme: () => { },
    darkTheme: () => { },
});


//^ Here we are using provider in the same file and not making a separate file for it
export const ThemeProvider = ThemeContext.Provider;


//^ creating a custom hook (In the previous approach we have to import useContext and UserContext in every file where we want to use the context) so to avoid this we are making a custom hook
export default function useTheme() {
    return useContext(ThemeContext)
}