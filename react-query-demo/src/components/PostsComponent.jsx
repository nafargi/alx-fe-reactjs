import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  };
function PostsComponent() {
    const { 
        data, 
        isLoading, 
        isError, 
        error, 
        refetch, 
        isPreviousData 
      } = useQuery(
        ["posts"],        // Query key
        fetchPosts,       // Fetch function
        {
          staleTime: 5000, // Data remains fresh for 5 seconds
          cacheTime: 60000, // Cache data for 1 minute (60000 ms)
          refetchOnWindowFocus: false, // Do not refetch data when the window is focused
          keepPreviousData: true, // Keep previous data while new data is being fetched
        }
      );
   
    
      if (isLoading) return <div>Loading posts...</div>;
    
      if (isError) return <div>Error: {error.message}</div>;
    
      return (
        <div>
          <h2>Posts</h2>
          <button onClick={refetch} style={{ marginBottom: "10px" }}>
            Refetch Posts
          </button>
          <ul>
            {data.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default PostsComponent
