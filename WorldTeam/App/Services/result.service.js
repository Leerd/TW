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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var transport_service_1 = require("../Services/transport.service");
var ResultService = /** @class */ (function () {
    function ResultService(transport) {
        this.transport = transport;
    }
    ResultService.prototype.Autorizetion = function (request) {
        return this.transport.postData("api/Authorize/GetUser", request);
    };
    ResultService.prototype.UploadImg = function (eventFile, id) {
        return this.transport.postImg("/api/Authorize/Upload", eventFile, id);
    };
    ResultService.prototype.GetAllGames = function () {
        return this.transport.getData("/api/Values/GetAllGames");
    };
    ResultService.prototype.UpdateGameStatus = function (request) {
        return this.transport.postData("/api/Values/UpateGameStatus", request);
    };
    ResultService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [transport_service_1.TransportService])
    ], ResultService);
    return ResultService;
}());
exports.ResultService = ResultService;
//# sourceMappingURL=result.service.js.map