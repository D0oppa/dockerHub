"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignerController = void 0;
const common_1 = require("@nestjs/common");
const designer_service_1 = require("./designer.service");
const create_designer_dto_1 = require("./dto/create-designer.dto");
const update_designer_dto_1 = require("./dto/update-designer.dto");
let DesignerController = class DesignerController {
    constructor(designerService) {
        this.designerService = designerService;
    }
    create(createDesignerDto) {
        return this.designerService.create(createDesignerDto);
    }
    findAll() {
        return this.designerService.findAll();
    }
    findOne(id) {
        return this.designerService.findOne(id);
    }
    update(id, updateDesignerDto) {
        return this.designerService.update(+id, updateDesignerDto);
    }
    remove(id) {
        return this.designerService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_designer_dto_1.CreateDesignerDto]),
    __metadata("design:returntype", void 0)
], DesignerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], DesignerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DesignerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_designer_dto_1.UpdateDesignerDto]),
    __metadata("design:returntype", void 0)
], DesignerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DesignerController.prototype, "remove", null);
DesignerController = __decorate([
    (0, common_1.Controller)('designer'),
    __metadata("design:paramtypes", [designer_service_1.DesignerService])
], DesignerController);
exports.DesignerController = DesignerController;
//# sourceMappingURL=designer.controller.js.map