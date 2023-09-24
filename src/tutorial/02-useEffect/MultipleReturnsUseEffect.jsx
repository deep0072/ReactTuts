import React, { useEffect, useState } from "react";

const api = "https://api.github.com/users/QuincyLarson";

export const MultipleReturnsUseEffect = () => {
  const [user, setUsers] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    try {
      const resp = await fetch(api);
      if (!resp.ok){
        
        setError(true) // if response is not correct then set error to true 
        setIsLoading(false) // also disable "loading..."
        returns
      }
      const user = await resp.json()
      console.log(user)
      setUsers(user)
     
    } catch (error) {
      console.log(error);
      setError(true) // this will not work in fetch 

    }
    setIsLoading(false)
  };


  useEffect(() => {
    
   
    fetchUser()
  }, []);

  if (loading){
    return <h2>loading...</h2>
  }

  if (error){
    return <h2>there was an error...</h2>

  }
  return <div>
    <img style={{width:'150px', borderRadius:'25px'}} src={user.avatar_url} alt={user.login} />
    <h2>{user.login}</h2>
  </div>;
};
