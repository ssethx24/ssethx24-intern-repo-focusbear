import axios from 'axios';

export async function getPost() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  return response.data;
}
