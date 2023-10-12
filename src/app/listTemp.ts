export class ListTemp{
    listOwner:any;
    inAddList=false;
    itemss:any;

    constructor(listOwnerr:any){
        this.listOwner=listOwnerr;
        this.itemss=[
            new ListItem("su",2),
            new ListItem("ekmek",4),
            new ListItem("elma",3),
        ]
    }
}
export class ListItem{
    name;
    amount;
    constructor(namee:any,amountt:any){
        
        this.name=namee;
        this.amount=amountt;
    }
}
export class ListTempHolder{

    listTemps:any;
    constructor(){
        this.listTemps=[
            new ListTemp("goktug"),
            new ListTemp("ahmet"),
            new ListTemp("mehmet")
        ]
    }
}