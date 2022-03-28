import React from 'react';
import { AuthContext } from '../Context/AuthContext';

const Home = () => {
    const { token, username, isAuth } = React.useContext(AuthContext);
    const [userData, setUserData] = React.useState([]);
   

    React.useEffect(() => {
        if(isAuth){
            getData()
        }
    }, [])
    const getData = () => {
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((res) => res.json())
            .then((res) => setUserData(res))
            .catch((err) => console.log(err))
    }
    console.log(userData)
 
  return (
     <div>
    <h1>Your Profile</h1>
    <h2>Name: {userData.name}</h2>
    <h2>Email: {userData.email}</h2>
    <h2>Mobile: {userData.mobile}</h2>
    <h2>Description: {userData.description}</h2>
    </div>
      
  )
}

export {Home}
