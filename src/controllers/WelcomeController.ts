import { Request, Response } from 'express'

import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

import WELCOMEJSON from '../database/json/welcomeResponse.json';

interface HomeWelcome {
    id: number
    welcome: {
        name: string
        role: string
        banner: BannerFormat
    }
}

interface BannerFormat {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: null
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: null
    provider: string
    provider_metadata: {
      public_id: string
      resource_type: string
    }
  }


export default class ClassesController {

    async index(request: Request, response: Response) {

        const welcome = WELCOMEJSON

        return response.json(welcome)
    }
    
}