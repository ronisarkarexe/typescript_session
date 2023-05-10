// properties

interface Model<TData, TMethod> {
    data: TData;
    method: TMethod;
}

interface Iuser {
    firstName: string
    lastName: string
}

// methods
interface IMethod {
    fullName(): string
}

type model = Model<Iuser, IMethod>


class userModel implements model {
    data: Iuser;
    method: IMethod;
    
    constructor(firstName: string, lastName: string){
        this.data = {firstName, lastName}
        this.method = {
            fullName:()=> `${firstName} ${lastName}`
        }
    }
}
const user1 = new userModel('roni','sarkar')
console.log(user1.method.fullName())