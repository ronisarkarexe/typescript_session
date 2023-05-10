

interface Me0{
    name: string;
    email?: string;
    contact: number
}

//pick
type Email = Pick<Me0, 'email'>
type Name = Pick<Me0, 'name'>
type Contact = Pick<Me0, 'contact' | 'email'>


// omit
type email = Omit<Me0, 'email' | 'name'>

// partial and requried

// to make all property be optional type
type optional = Partial<Me0>
type requried = Required<Me0>

// readonly
const persone0: Readonly<Me0> = {
    name: 'name',
    email: 'email',
    contact:12
}

// record type
type myObj = {
    a:string;
    b:string;
    c:string;
}

type myObj2 = {
    [key:string]:string;
}

// record type
type myObj3 = Record<string,string>
type myObj4 = Record<'a'|'b'|'c',string>

const obj0:myObj4 = {
    a: '1',
    b: '2',
    c: '3',
}