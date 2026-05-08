import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

const Users = () => {

    const [users, SetUsers] = useState(null)
    const [Load, setLoad] = useState(true)
    const [error, setError] = useState(false)

    // const loadUsers = async () => {
    //     try{
    //          let res = await fetch("https://jsonplaceholder.typicode.com/users")
    //         let data = await res.json()
    //         SetUsers(data)
    //         console.log(data);
    //     } catch (err){
    //         console.log(err);
    //         setError(true)

            
    //     } finally {
    //         setLoad(false)
    //     }
    // }

    // useEffect(()=>{
    //     loadUsers()
    //     // fetch("https://jsonplaceholder.typicode.com/users")
    //     // .then(res => res.json())
    //     // .then(res => {
    //     //     console.log(res);
    //     //     SetUsers(res)
            
    //     // })
    //     // .catch(error =>{
    //     //     console.log(error);
            
    //     //     setEroor(true)
    //     // } )
    //     // .finally(()=> {

    //     //     setLoad(false)
    //     // } )

    // },  [])

    const fetchUsers = async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users")
            let data = await response.json()
            SetUsers(data)
            console.log(data);
            
        } catch (err){
            console.log(err);
            setError(true)
                       
        } finally {
            setLoad(false)
        }
    }

    useEffect(() => {
      fetchUsers()
    }, [])
    
    
  return (
    <>
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    }}>
        
   {Load && <h2>Loading Please wait</h2> }
    {error && <h2> Error occurred on our end, please try again later</h2>}
    {users && users.map((item) => {
        return <Card title={item.name} email={item.email} phone={item.phone} key={item.id} />
    })}
    </div>
    </>
  )
}

export default Users
