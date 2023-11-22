import React from 'react';

const AuthContext = React.createContext({
    userData : [],
    changeUserData : () => {}
});

export default AuthContext;