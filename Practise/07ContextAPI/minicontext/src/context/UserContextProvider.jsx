import { useState } from "react";
import UserContext from "./userContext";

import PropTypes from 'prop-types';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        // yhaan value ke ander {object} pass krna hota hai
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserContextProvider;
