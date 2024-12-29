import { Controller } from '@nestjs/common';
import {
  nestControllerContract,
  NestControllerInterface,
  NestRequestShapes,
  TsRest,
  TsRestRequest,
} from '@ts-rest/nest';
import { contract } from '@app/contract';
import { PostsService } from './posts.service';

const c = nestControllerContract(contract);
type RequestShapes = NestRequestShapes<typeof c>;

@Controller()
export class PostsController implements NestControllerInterface<typeof c> {
  constructor(private readonly postService: PostsService) {}

  @TsRest(c.getPosts)
  async getPosts() {
    const posts = await this.postService.getPosts();

    return { status: 200 as const, body: posts };
  }

  @TsRest(c.getPost)
  async getPost(@TsRestRequest() { params: { id } }: RequestShapes['getPost']) {
    const post = await this.postService.getPost(id);

    return { status: 200 as const, body: post };
  }

  @TsRest(c.createPost)
  async createPost(@TsRestRequest() { body }: RequestShapes['createPost']) {
    const post = await this.postService.createPost({
      title: body.title,
      body: body.body,
    });

    return { status: 201 as const, body: post };
  }
}
