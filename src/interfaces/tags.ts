import { IPost as Posts } from "./posts";

export interface ITags {
  id: string;

  tagName: string;

  Aticles: Posts[];

  createdAt: Date;

  updatedAt: Date;
}
