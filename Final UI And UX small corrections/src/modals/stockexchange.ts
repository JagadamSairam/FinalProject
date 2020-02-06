export class StockExchange{
    id : number;
    stockexchange : string;
    brief: string;
    contactadress : string;
    remarks :string ;
    constructor ( id : number, stockexchange : string , brief : string,contactadress : string, remarks : string ){
        this.id=id;
        this.stockexchange=stockexchange;
        this.brief=brief;
        this.contactadress=contactadress;
        this.remarks=remarks;

    }
}
