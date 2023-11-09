import { IsNotEmpty, Length } from "class-validator";

export class UserDTO{
    @IsNotEmpty()
    username: string;
    @IsNotEmpty(
        {
            message: 'The camp username should not be empty.'
        }
    )
    @Length(8,100)
    password: string;
}