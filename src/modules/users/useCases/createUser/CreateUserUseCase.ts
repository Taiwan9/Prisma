import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../erros/AppError";

export class CreateUserUseCase {
    async execute({ name, email }: CreateUserDTO):Promise<User> {
        //verificar se o usuario ja existe
        const userAlreadyExist = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if(userAlreadyExist){
            //error
            throw new AppError("User Already exist");
        }
        //criar o usuario
        const user =await prisma.user.create({
            data:{
                name,email
            }
        });
        return user;
    }

}