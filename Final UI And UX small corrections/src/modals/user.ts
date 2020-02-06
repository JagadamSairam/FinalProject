export class User{
    id :  number;
    username : string;
    password : string;
    reenterpass : string;
    contact : number;
    email : string;
    cemail : string;
    constructor(id:number,username:string,password:string,reenterpass: string,contact :number,email :string,cemail :string){
        this.id=id;
        this.username=username;
        this.password=password;
        this.reenterpass=reenterpass;
        this.contact=contact;
        this.email=email;
        this.cemail=cemail;
    }
}
 