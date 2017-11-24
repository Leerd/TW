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
var http_1 = require("@angular/http");
var result_service_1 = require("../../Services/result.service");
var authorization_1 = require("../../DTO/authorization");
var authorization_request_1 = require("../../DTO/Requests/authorization-request");
var game_update_request_1 = require("../../DTO/Requests/game-update-request");
var Authorization = /** @class */ (function () {
    function Authorization(result, http) {
        this.result = result;
        this.http = http;
        this.authorizationModel = new authorization_1.AuthorizationModel();
        this.games = new Array();
    }
    Authorization.prototype.send = function () {
        var _this = this;
        debugger;
        this.result.Autorizetion(new authorization_request_1.AuthorizationRequests(this.authorizationModel.login, this.authorizationModel.password)).then(function (resp) {
            _this.userid = resp.data.id;
            debugger;
        });
    };
    Authorization.prototype.sendq = function (event) {
        debugger;
        this.result.UploadImg(event.target.files, "wqr").then(function (resp) {
        });
    };
    Authorization.prototype.updateGameStatus = function (id) {
        debugger;
        this.result.UpdateGameStatus(new game_update_request_1.GameUpdateRequests(this.userid, id, this.checkBox));
    };
    Authorization.prototype.getgame = function () {
        var _this = this;
        this.result.GetAllGames().then(function (resp) {
            _this.games = resp;
            debugger;
        });
    };
    Authorization = __decorate([
        core_1.Component({
            selector: 'authorization',
            template: require('./authorization.html')
        }),
        __metadata("design:paramtypes", [result_service_1.ResultService, http_1.Http])
    ], Authorization);
    return Authorization;
}());
exports.Authorization = Authorization;
//# sourceMappingURL=authorization.js.map