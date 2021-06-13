export class Evenement {

    constructor(	public id: string,
                    public description: string,
                    public travel: string,
                    public date: Date,
                    public order: number,
                    public type: string
                    ){}

    static fromData(data: any) {
        let date = new Date(data.date);
        return new this(data.id, data.description, data.travelId, date, data.order, data.type);
    }
}