import { Movie} from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../erros/AppError";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class CreateMovieUseCase {
    async execute({ title, duration, release_date }: CreateMovieDTO):Promise<Movie> {
        //verificar se o filme ja existe
        const movieAlreadyExist = await prisma.movie.findUnique({
            where: {
                title
            }
        });
        if(movieAlreadyExist){
            //error
            throw new AppError("Movies Already exist");
        }
        //criar o usuario
        const movie =await prisma.movie.create({
            data:{
                title,
                duration,
                release_date
            }
        });
        return movie;
    }

}