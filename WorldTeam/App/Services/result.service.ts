import { Injectable } from '@angular/core';
import { TransportService } from '../Services/transport.service';

import { AuthorizationRequests } from '../DTO/Requests/authorization-request';
import { GameUpdateRequests } from '../DTO/Requests/game-update-request';

@Injectable()
export class ResultService {
    constructor(private transport: TransportService) { }

    public Autorizetion(request: AuthorizationRequests){
        return this.transport.postData("api/Authorize/GetUser", request)
    }

    public UploadImg(eventFile: FileList, id: string) {
        return this.transport.postImg("/api/Authorize/Upload", eventFile, id)
    }

    public GetAllGames() {
        return this.transport.getData("/api/Values/GetAllGames")
    }

    public UpdateGameStatus(request: GameUpdateRequests) {
        return this.transport.postData("/api/Values/UpateGameStatus", request)
    }
}