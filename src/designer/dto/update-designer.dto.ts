import { PartialType } from '@nestjs/mapped-types';
import { CreateDesignerDto } from './create-designer.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateDesignerDto extends PartialType(CreateDesignerDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
