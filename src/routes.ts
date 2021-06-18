import express from 'express'
import WelcomeController from './controllers/WelcomeController'
import ContactController from './controllers/ContactController'
import AboutController from './controllers/AboutController'
import PostsController from './controllers/PostsController'
import ProjectsController from './controllers/ProjectsController'

const routes = express.Router()

const welcomeControllers = new WelcomeController()
const contactController = new ContactController()
const aboutController = new AboutController()
const postsController = new PostsController()
const projectsController = new ProjectsController()

routes.get('/welcome', welcomeControllers.index)
routes.get('/contact', contactController.index)
routes.get('/about', aboutController.index)
routes.get('/posts', postsController.index)
routes.get('/posts/count', postsController.count)
routes.get('/projects', projectsController.index)

export default routes