import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDesignerDto {

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    experiencia:string;
    

    @IsString()
    @IsNotEmpty()
    nivelAceptacion:string;

}
