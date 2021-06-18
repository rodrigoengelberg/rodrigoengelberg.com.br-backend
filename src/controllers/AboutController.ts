import {Request, Response} from 'express'

import ABOUTJSON from '../database/json/aboutResponse.json'

export type HomeAbout = {
    id: number;
    about: {
      id: number;
      title: string;
      content: string;
    };
  };

export default class ClassesController {

    async index(request: Request, response: Response) {

        const about = ABOUTJSON

        return response.json(about)
    }

}