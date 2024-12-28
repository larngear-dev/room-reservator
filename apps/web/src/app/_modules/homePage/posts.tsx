import { getPosts } from "@/services/client";

export async function Posts() {
  const posts = await getPosts();

  if (!posts) {
    return <div>Posts not found</div>;
  }

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
