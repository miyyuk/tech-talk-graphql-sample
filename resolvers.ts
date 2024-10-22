import { Post, data as posts } from "./post";

const post = (_: any, args: { id: string }) => posts.find((post: Post) => post.id === Number(args.id));

type inputPost = {
  title: string;
  content?: string
}

const createPost = (_: any, args: { input: inputPost} ) => {
  const newPost: Post = {
    id: posts[posts.length-1].id + 1,
    userID: 100, // Fixed value as it is not important here
    title: args.input.title,
    content: args.input?.content,
  }
  posts.push(newPost);
  return newPost;
};

const updatePost = (_: any, args: { id: string, input: inputPost}) => {
  const updateIdx = posts.findIndex((post: Post) => post.id === Number(args.id));
  const updatedPost = {
    ...posts[updateIdx],
    title: args.input.title,
    content: args.input?.content || posts[updateIdx].content,
  }
  posts.splice(updateIdx, 1, updatedPost);
  return updatedPost;
};

const deletePost = (_: any, args: {id: string}) => {
  const deleteIdx = posts.findIndex((post: Post) => post.id === Number(args.id));
  const deletedPost = posts.splice(deleteIdx, 1);
  return deletedPost[0];
};

// Provide resolver functions for your schema fields
export const resolvers = {
  // Resolvers for Queries
  Query: {
    post,
    posts: () => posts,
  },

  // Resolvers for Mutations
  Mutation: {
    createPost,
    updatePost,
    deletePost,
  },
};