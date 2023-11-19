import React, { useState } from 'react';
import AuthContext from './auth-context';

const AuthContextProvider = ({children}) => {
    const [userData, setUserData] = useState([]);
  
    const changeUserData = (state) => {
      setUserData(state);
    }

    return (
      <AuthContext.Provider
        value={{
            userData : userData,
            changeUserData : changeUserData
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

export default AuthContextProvider;