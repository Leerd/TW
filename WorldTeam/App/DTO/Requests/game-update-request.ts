export class GameUpdateRequests {
    userId: string;
    gameId: string;
    create: boolean;

    constructor(userId: string, gameId: string, create: boolean) {
        this.userId = userId;
        this.gameId = gameId;
        this.create = create;
    }
}