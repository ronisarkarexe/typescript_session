// a type is dependent on another type

type a1 = string;
type a2 = a1 extends string ? string : null

type a3 = boolean;
type a4 = a3 extends string ? string : null


type a5 = null;
type a6 = a5 extends string ? string : null

// nested condition type

type a7 = boolean;
type b = string;
// for see the result hover mouse on d
type d = a7 extends undefined ? undefined : b extends number ? number : a1 extends string ? string : null;

type roni = {
    name: string;
    age: number;
}

// check age in roni, if found then true or false
type checkProperty<T> = T extends {age: number} ? true : false;
type checkPropertyT<T> = T extends {name: string} ? true : false;

type CheckAge = checkProperty<roni>
type CheckAgeT = checkProperty<roni>

// another way
type A = keyof roni // ('name' | 'age') it mean union
                            // 'name' extends 'name' | 'age'
type checkPropertyTA<T , K> = K extends keyof roni ? true : false;

type checkUnknone = checkPropertyTA<roni, 'hello'>
type checkAge = checkPropertyTA<roni, 'age'>


// 3 friends

type friends = 'roni' | 'sarkar' | 'sark'

type RemoveFriend<T> = T extends 'sarkar' ? never : T
type currentFriends = RemoveFriend<friends>

type RemoveFriendS<T, K> = T extends K ? never : T

type currentFrien = RemoveFriendS<friends, "sark">
