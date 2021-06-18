import {Request, Response} from 'express'

import PROJECTSJSON from '../database/json/projectsResponse.json'

export default class ClassesController {

    async index(request: Request, response: Response) {

        const projects = PROJECTSJSON

        return response.json(projects)
    }
    
}