class MyBankAccoint2 {
    id: number;
    name: string;
    private _balance: number; // prive mean encapsulation
    protected userName: string 

    constructor(id: number, name: string, balance: number, userName: string) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this.userName = userName;
    }

    //getter
    get balance():number{
        return this._balance
    }

    // setter
    set newBalance(balance:number) {
        this._balance += balance;
    }

    getTestBalance():number { 
        return this._balance
    }
    get Test():number{
        return this.getTestBalance()
    }
}

class cars extends MyBankAccoint2 {
    test() {
        this.Test
    }
}