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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAtividadeUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
let CreateAtividadeUseCase = class CreateAtividadeUseCase {
    constructor(atividadeRepository, tipoAtividadeRepository, igrejaRepository) {
        this.atividadeRepository = atividadeRepository;
        this.tipoAtividadeRepository = tipoAtividadeRepository;
        this.igrejaRepository = igrejaRepository;
    }
    execute({ id_tipo_atividade, id_igreja, data_atividade, hora_inicio_atividade, hora_termino_atividade, quantidade_visitantes_atividade, quantidade_membros_atividade, tema_atividade, responsavel_atividade, dizimo_atividade, oferta_atividade, num_reconciliacao_atividade, num_decisoes_atividade, preleitor_atividade, observacao_atividade, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoatividade = yield this.tipoAtividadeRepository.findById(id_tipo_atividade);
            const igreja = yield this.igrejaRepository.findById(id_igreja);
            if (!tipoatividade) {
                throw new AppError_1.AppError("O tipo de atividade não existe");
            }
            if (!igreja) {
                throw new AppError_1.AppError("A igreja informada não existe");
            }
            yield this.atividadeRepository.create({
                id_tipo_atividade,
                id_igreja,
                data_atividade,
                hora_inicio_atividade,
                hora_termino_atividade,
                quantidade_visitantes_atividade,
                quantidade_membros_atividade,
                tema_atividade,
                responsavel_atividade,
                dizimo_atividade,
                oferta_atividade,
                num_reconciliacao_atividade,
                num_decisoes_atividade,
                preleitor_atividade,
                observacao_atividade,
            });
        });
    }
};
CreateAtividadeUseCase = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("AtividadeRepository")),
    __param(1, tsyringe_1.inject("TipoAtividadeRepository")),
    __param(2, tsyringe_1.inject("IgrejaRepository")),
    __metadata("design:paramtypes", [Object, Object, Object])
], CreateAtividadeUseCase);
exports.CreateAtividadeUseCase = CreateAtividadeUseCase;
