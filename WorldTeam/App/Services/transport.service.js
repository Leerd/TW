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
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var TransportService = /** @class */ (function () {
    function TransportService(http) {
        this.http = http;
    }
    TransportService.prototype.postData = function (url, request) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, JSON.stringify(request), { headers: headers })
            .map(function (res) { return (res.json()); })
            .toPromise();
    };
    TransportService.prototype.getData = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); })
            .toPromise();
    };
    TransportService.prototype.postImg = function (url, eventFile, id) {
        var fileList = eventFile;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('id', file, id);
            formData.append('uploadFile', file, file.name);
            var headers = new http_1.Headers();
            var options = new http_1.RequestOptions({ headers: headers });
            return this.http.post(url, formData, options)
                .map(function (res) { return res.json(); })
                .toPromise();
        }
    };
    TransportService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TransportService);
    return TransportService;
}());
exports.TransportService = TransportService;
//# sourceMappingURL=transport.service.js.map