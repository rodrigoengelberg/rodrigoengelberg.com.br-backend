import { Request, Response } from 'express'

import CONTACTJSON from '../database/json/contactResponse.json'

export type HomeContact = {
    id: number
    contact: ContactFormat[]
}

export type ContactFormat = {
    id: number
    label: string
    url: string
}

export default class ConnectionsController {

    async index(request: Request, response: Response) {

        const contact = CONTACTJSON

        return response.json(contact)
    }

}