/*

Steps for Context API
1. Make a folder named context
2. Make a file named userContext.js

    - import React from "react";
    - const UserContext = React.createContext(); ------------> This is a global context object
    - export default UserContext; 

after making the context we have to make a Provider (jo data provide karega) 

3. Make a file named userContextProvider.jsx

sytax for provider:-

    - <UserContext.Provider value={}> </UserContext.Provider>

*/
import React from 'react'

const UserContext = React.createContext()

export default UserContext
