/* 
What we learn
1. public
2. private (name should be _(property name))
3. protected
*/
class BankAccoint {
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
    getBalance(){
        console.log(`My aurrent balance ${this._balance}`)
    }
    addBalance(money: number) {
        this._balance += money;
    }
}

class newAccount extends BankAccoint {
    test(){
        this.userName // we can access username , so dont use (protected)
    }
}

const myAccount = new BankAccoint(1,"roni",123, "sarkar");
// myAccount.balance = 0;
myAccount.addBalance(190)
console.log(myAccount)
