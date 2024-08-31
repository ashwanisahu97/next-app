import React from "react";
interface User{
  id:number;
  name:string;
}
const UserPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users",{next:{revalidate:10}});
  const users:User[] = await response.json();
  return(
    <div className='m-10 text-white'>
      <h1 className='btn-active'>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul className="p-4 bg-sky-400 text-white">
        {users?.map(user=><li key={user?.id}>{user?.name}</li>)}
      </ul>
    </div>
  );
};

export default UserPage;
