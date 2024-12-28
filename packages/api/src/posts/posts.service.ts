import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPost(id: string) {
    return {
      id,
      title: 'Hello, world!',
      body: 'This is the body of the post.',
    };
  }

  createPost(post: { title: string; body: string }) {
    return { id: '1', ...post };
  }

  getPosts() {
    return [
      {
        id: '1',
        title: 'Hello, world!',
        body: 'This is the body of the post.',
      },
    ];
  }
}
