export class Company{
   
    name : string;
    location : string;
    turnover : number;
    contact : number;
    ceoname : string;
    team : number;

    constructor(name : string, location :string, turnover : number,contact :number, ceoname : string, team :number ){
        this.name=name;
        this.location=location;
        this.turnover=turnover;
        this.contact=contact;
        this.ceoname=ceoname;
        this.team=team;
    }
}
 