export class ListTemp{
    listOwner:any;
    inAddList:boolean;
    itemss:ListItem[];

    constructor(listOwnerr:string, itemss: ListItem[]=[]){
        this.listOwner=listOwnerr;
        this.inAddList=false;
        this.itemss=itemss;
    }

    getItems(){
        return this.itemss;
    }
    getInAddList():boolean{
        return this.inAddList;
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

    listTemps:ListTemp[];
    constructor(listTempss:ListTemp[]){
        this.listTemps=listTempss;
    }
}