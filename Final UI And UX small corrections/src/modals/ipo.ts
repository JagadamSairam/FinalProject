export class IPO{
id : number;
companyname : string;
pricepershare:number;
shares:number;
address:string;
city : string;
state:string;
pincode:number;
date: string;

constructor(id : number,companyname:string,pricepershare :number,shares : number, address : string, city : string, state:string,pincode:number,date:string){
    this.id=id;
    this.companyname=companyname;
    this.pricepershare=pricepershare;
    this.shares=shares;
    this.address=address;
    this.city=city;
    this.state=state;
    this.pincode=pincode;
    this.date=date;

}

}
