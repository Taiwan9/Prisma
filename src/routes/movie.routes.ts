import { Router } from "express";
import { CreateMovieControllers } from "../modules/movies/useCases/createMovie/CreateMovieControllers";
import { CreateMovieRentControllers } from "../modules/movies/useCases/createMovieRent/CreateMovieRentControllers";
import { GetMoviesByReleaseDateControllers } from "../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateUseControllers";

const createMovieController = new CreateMovieControllers();
const createMovieRentController = new CreateMovieRentControllers();
const getMovieByReleaseDateUseController = new GetMoviesByReleaseDateControllers;
const movieRoutes = Router();

movieRoutes.post('/', createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle)
movieRoutes.get("/release", getMovieByReleaseDateUseController.handle)
export { movieRoutes };