import { CreateDesignerDto } from './dto/create-designer.dto';
import { UpdateDesignerDto } from './dto/update-designer.dto';
import { Designer } from './entities/designer.entity';
export declare class DesignerService {
    private designers;
    create(createEstudianteDto: CreateDesignerDto): Designer;
    findAll(): Designer[];
    findOne(id: number): Designer;
    update(id: number, updateDesignerDto: UpdateDesignerDto): Designer;
    remove(id: number): void;
}
