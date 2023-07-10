import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDesignerDto } from './dto/create-designer.dto';
import { UpdateDesignerDto } from './dto/update-designer.dto';
import { Designer } from './entities/designer.entity';
import exp from 'constants';

@Injectable()
export class DesignerService {

  private designers: Designer[]=[
    {id:1, nombre:'Ana Maria' , experiencia:'3 años',nivelAceptacion:'Alto'},
    {id:2,nombre:'Jose Carlos',experiencia:'5 años',nivelAceptacion:'Medio'} 
   ]

  create(createEstudianteDto: CreateDesignerDto) {
    const designer = new Designer();
    designer.id=  Math.max( ... this.designers.map(elemento => elemento.id),0 )+1 ;
    designer.nombre= createEstudianteDto.nombre;
    designer.experiencia= createEstudianteDto.experiencia;
    designer.nivelAceptacion= createEstudianteDto.nivelAceptacion;
  
    this.designers.push(designer);
    return designer;
  }

  findAll() : Designer[] {
    return this.designers;
  }

  findOne(id: number) {
    const designer =  this.designers.find(designer=> designer.id===id);
    if (!designer) throw new NotFoundException(`ID ${id} not found`)
    return designer;
  }

  update(id: number, updateDesignerDto: UpdateDesignerDto) {
    const { nombre, experiencia, nivelAceptacion} = updateDesignerDto;
    const designer = this.findOne(id);
    if (nombre) designer.nombre= nombre;
    if (experiencia) designer.experiencia= experiencia;
    if (nivelAceptacion) designer.nivelAceptacion= nivelAceptacion;


    this.designers =  this.designers.map( elemento=> {
      if (elemento.id===id) return designer;
      return elemento;
    } )

    return designer;

  }

  remove(id: number) {
    this.findOne(id);
    this.designers =  this.designers.filter(elemento=> elemento.id!== id);
  }
}
