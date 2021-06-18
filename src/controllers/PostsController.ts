import {Request, Response} from 'express'

import POSTSJSON from '../database/json/postsResponse.json'

export type PostID = number;

export type PostAuthor = {
  id: PostID;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostCategory = {
  id: PostID;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  id: PostID;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type PostData = {
  id: PostID;
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_by: PostCreatedBy;
  updated_by: PostCreatedBy;
  created_at: string;
  updated_at: string;
  cover: PostCover;
};


export default class ClassesController {

    async index(request: Request, response: Response) {

        let posts: any

        if (request.query.slug) {
            const postsIndex = POSTSJSON.findIndex(post => post.slug === request.query.slug)
            posts = POSTSJSON[postsIndex]
        } else
            posts = POSTSJSON

        return response.json(posts)
    }

    async count(request: Request, response: Response) {
        return response.json(POSTSJSON.length)
    }

}