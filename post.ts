export type Post = {
  id: number;
  userID: number;
  title: string;
  content?: string;
}

export const data: Post[] = [
  {
    "id": 1,
    "userID": 100,
    "title": "First post!",
    "content": "I can't wait for G-Post to launch."
  },
  {
    "id": 2,
    "userID": 100,
    "title": "Second post!",
    "content": "I looooove GraphQL!"
  },
  {
    "id": 3,
    "userID": 200,
    "title": "Test",
    "content": "test test test test"
  }
];