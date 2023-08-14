import { Router } from "express";
import EventRepositoryMongoose from "../repositories/EventRepositoryMongoose";
import EventUseCase from "../useCases/EventUseCase";
import EventController from "../controllers/EventController";

export default class EventRoutes {
  router: Router;
  private eventController: EventController;

  constructor() {
    this.router = Router();
    const eventRepository = new EventRepositoryMongoose();
    const eventUseCase = new EventUseCase(eventRepository);
    this.eventController = new EventController(eventUseCase);
    this.initRoutes();
  }

  initRoutes() {
    this.router.post('/', this.eventController.create.bind(this.eventController))
  }

}
