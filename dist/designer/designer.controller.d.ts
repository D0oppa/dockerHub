import { DesignerService } from './designer.service';
import { CreateDesignerDto } from './dto/create-designer.dto';
import { UpdateDesignerDto } from './dto/update-designer.dto';
import { Designer } from './entities/designer.entity';
export declare class DesignerController {
    private readonly designerService;
    constructor(designerService: DesignerService);
    create(createDesignerDto: CreateDesignerDto): Designer;
    findAll(): Designer[];
    findOne(id: number): Designer;
    update(id: string, updateDesignerDto: UpdateDesignerDto): Designer;
    remove(id: string): void;
}
