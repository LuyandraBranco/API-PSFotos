
import { IsNotEmpty, Length } from "class-validator";

export class CreateAlbumDto {
   // @IsNotEmpty()
    name?: string;
    
  /*  @IsNotEmpty(
        {
            message: 'The camp username should not be empty.'
        }
    )
    @Length(8,100)*/
    authorId?:number;
    
    catalog?: string;

    idFolder?: string;
   
    
}