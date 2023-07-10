"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignerService = void 0;
const common_1 = require("@nestjs/common");
const designer_entity_1 = require("./entities/designer.entity");
let DesignerService = class DesignerService {
    constructor() {
        this.designers = [
            { id: 1, nombre: 'Ana Maria', experiencia: '3 años', nivelAceptacion: 'Alto' },
            { id: 2, nombre: 'Jose Carlos', experiencia: '5 años', nivelAceptacion: 'Medio' }
        ];
    }
    create(createEstudianteDto) {
        const designer = new designer_entity_1.Designer();
        designer.id = Math.max(...this.designers.map(elemento => elemento.id), 0) + 1;
        designer.nombre = createEstudianteDto.nombre;
        designer.experiencia = createEstudianteDto.experiencia;
        designer.nivelAceptacion = createEstudianteDto.nivelAceptacion;
        this.designers.push(designer);
        return designer;
    }
    findAll() {
        return this.designers;
    }
    findOne(id) {
        const designer = this.designers.find(designer => designer.id === id);
        if (!designer)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return designer;
    }
    update(id, updateDesignerDto) {
        const { nombre, experiencia, nivelAceptacion } = updateDesignerDto;
        const designer = this.findOne(id);
        if (nombre)
            designer.nombre = nombre;
        if (experiencia)
            designer.experiencia = experiencia;
        if (nivelAceptacion)
            designer.nivelAceptacion = nivelAceptacion;
        this.designers = this.designers.map(elemento => {
            if (elemento.id === id)
                return designer;
            return elemento;
        });
        return designer;
    }
    remove(id) {
        this.findOne(id);
        this.designers = this.designers.filter(elemento => elemento.id !== id);
    }
};
DesignerService = __decorate([
    (0, common_1.Injectable)()
], DesignerService);
exports.DesignerService = DesignerService;
//# sourceMappingURL=designer.service.js.map