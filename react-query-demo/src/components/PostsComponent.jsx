import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  };
function PostsComponent() {
    const { data, isLoading, isError, error, refetch } = useQuery(
        ["posts"],
        fetchPosts,
        {
          staleTime: 5000, // Data remains fresh for 5 seconds
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
