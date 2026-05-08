import React, { useEffect, useState } from 'react'
import Users from './Users'

const Posts = () => {

    const [PostData, setPostData] = useState(null)
    const [Loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchPostsData = async() =>{
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setPostData(data)
            console.log(data);
        } catch (err) {
            console.log(err);
            setError(true)
            
        } finally {
            setLoading(false)
        }
        
    }

    useEffect(() => {
      fetchPostsData()
    
    }, [])
    
    
  return (
    <>
    {Loading && <h2>Loading Please wait</h2> }
    {error && <h2>Error Occured on our end</h2> }
    {PostData && PostData.map((item) => {
        return (
            <div>
                <h2> {item.title} </h2>
            </div>
        )
    })}
    </>
  )
}

export default Posts
