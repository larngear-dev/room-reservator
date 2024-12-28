import { initClient } from "@ts-rest/core";
import { contract } from "@repo/api";

// `contract` is the AppRouter returned by `c.router`
const client = initClient(contract, {
  baseUrl: "http://localhost:4001",
  baseHeaders: {},
});

export async function getPosts() {
  const { body, status } = await client.getPosts();

  if (status === 200) {
    // body is Post[]c
    console.log(body);
  } else {
    // body is unknown
    console.log(body);
  }
}

export async function createPost() {
  const { body, status } = await client.createPost({
    body: {
      title: "Post Title",
      body: "Post Body",
    },
  });

  if (status === 201) {
    // body is Post
    console.log(body);
  } else {
    // body is unknown
    console.log(body);
  }
}
