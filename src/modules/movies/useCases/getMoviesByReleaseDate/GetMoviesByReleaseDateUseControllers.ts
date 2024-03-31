import { Request, Response } from "express";
import { GetMoviesByReleaseDateUseCase } from "./GetMoviesByReleaseDateUseCase";



export class GetMoviesByReleaseDateControllers {
    async handle(req: Request, res: Response) {

        const getMovieByReleaseDateUseCase = new GetMoviesByReleaseDateUseCase();

        const result = await getMovieByReleaseDateUseCase.execute();
        return res.status(201).json(result);
    }
}