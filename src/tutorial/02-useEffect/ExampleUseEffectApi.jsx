import React, { useEffect, useState, useTransition } from "react";
const api = "https://api.github.com/users";

export const ExampleUseEffectApi = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const users = await response.json();
        setUsers(users)
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return <section>
    <h3>

    <ul className="users">

        {users.map((user)=>{
            const {login,id,avatar_url, html_url} = user
            console.log(user)
            return(<li key = {id}>
                <img src={avatar_url} alt={login} />
                <div>

                <h5>{login}</h5>
                <a href={html_url}>profile</a>



                </div>
                
            
            
            </li>)
        })}
    </ul>

    </h3>
  </section>;
};
