import { initClient } from "@ts-rest/core";
import { contract } from "../../../api/src/contract";

// `contract` is the AppRouter returned by `c.router`
const client = initClient(contract, {
  baseUrl: "http://localhost:4001",
  baseHeaders: {},
});

export async function getPosts() {
  const { body, status } = await client.getPosts();

  if (status === 200) {
    // body is Post[]c
    return body;
  } else {
    // body is unknown
    return [];
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
    return body;
  } else {
    // body is unknown
    return [];
  }
}
