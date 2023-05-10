/* 

*/
// if want to access private property with name, withour call function name, so we use getter
class MyBankAccoint {
    id: number;
    name: string;
    private _balance: number;
    protected userName: string // this property we can assess from outside

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
}

const myNewAccount = new MyBankAccoint(1,"roni",123, "sarkar");
myNewAccount.newBalance =500
console.log(myNewAccount.balance)