import React, { useEffect, useState } from 'react';
import { getPost } from '../api/getPost';

function PostViewer() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost().then(setPost);
  }, []);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostViewer;