// type is dependent on another type

type p = string;
type q = p extends string ? string : null;

type r = undefined;
type t = null;
type s = r extends string ? string : t extends number ? number : never


type car = {
    model1: string,
    model2: string
}

type car2<T> = T extends {model1: string} ? 'model2' : undefined;
type checkModel = car2<car>;

type car3 = car extends keyof 'model2'? true : false;

type car4<T> = T extends {model2: string} ? true : false;
type checkModel2 = car4<car>;

// extends => model1 | model2 (union)
type car6<T, U> = U extends keyof T ? true : false;

type checkModel4 = car6<car, 'model1'>;


// litaral type
type friend = 'roni' | 'joni' | 'koni'

// jokon amara union e never type apply korbo mean, we want to delete this value from union.
type removeFriend<T> = T extends 'joni' ? never : T
type checkF = removeFriend<friend>

// more complex

type removeF<T, U> = T extends U ? never : T;
type check = removeF<friend, 'koni'>