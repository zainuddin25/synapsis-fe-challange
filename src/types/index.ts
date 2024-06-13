export type BlogTypes = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type CommentTypes = {
  id: number;
  post_id: string;
  name: string;
  email: string;
  body: string;
};

export type UserTypes = {
  id: number,
  name: string,
  email: string,
  gender: string,
  status: string
}