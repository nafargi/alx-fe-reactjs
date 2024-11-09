// import React , {createContext, useState} from 'react';

// const UserContext = createContext();

// export const UserProvider= ({children})=> {

//     const [userData, setUserData] = useState({
//         name: "Jane Doe",
//         email: "jane.doe@example.com"
//     });

//   return (
//     <UserContext.Provider value ={userData}>
//        {children}
//     </UserContext.Provider>
//   );
// };


// export default UserContext;
import React  from 'react';

const UserContext = React.createContext();

export default UserContext;
