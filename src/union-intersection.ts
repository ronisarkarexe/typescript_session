/* 
What i learn
1. intersection ( & )
2. union ( | )
*/

type HeroTypeA = {
    name: string;
    age: number;
}

// Intersection
type HeroTypeB = HeroTypeA & {
    salary: number;
    position: string;
    isSingle: boolean;
}

const HeroData: HeroTypeB = {
    name: "string",
    age: 12,
    salary: 123,
    position: "string",
    isSingle: true
}


// Union
const favor: HeroTypeA | HeroTypeB = {
    name: "string",
    age: 12,
    // salary: 123,
    // position: "string",
    // isSingle: true
}

// Another example

type day1 = {
    name: string,
}
type day2 = {
    name: string,
    age: number,
    exp: string,
}
type day3 = {
    name: string,
    age: number,
    exp: string,
    roll: string,
    level: number,
}

// union
const fullDay: day1 | day2 | day3 = {
    name: "hello",
    age: 12,
    roll: "Dev",
    level: 30
}


// intersection
/*
type week1 = {
    name: string,
}

const w:week1 = {
    name: "Sun",
}

type week2 = week1 & {
    age: number,
    exp: string,
}

const we:week2 = {
    name: "hello",
    age: 12,
    exp: "Dev",
}
type week3 = week2 & {
    roll: string,
    level: number,
}

const fullWeek: week3 = {
    name: "hello",
    age: 12,
    exp: "Dev",
    roll: "Dev",
    level: 30
}

*/


/*enum Leve { it is not best practice
    junior="junior",
    mid="mid",
    senior="senior"
}*/


type week1 = {
    name: string,
}

type week2 = week1 & {
    age: number,
    exp: string,
}

type week3 = week2 & {
    roll: string,
    level: "junior" | "mid" | "senior", // it is union type
}

const fullWeek: week3 = {
    name: "hello",
    age: 12,
    exp: "Dev",
    roll: "Dev",
    level: "mid"
}