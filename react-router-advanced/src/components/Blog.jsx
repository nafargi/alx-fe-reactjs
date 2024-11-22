// src/components/Blog.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
  const { postId } = useParams();
  return <div>Blog Post {postId}</div>;
}

export default Blog;
