const arrValue = [1,2,3,4];

const val = arrValue.map(a => a*a);
console.log(val);

const strVal = arrValue.map(a => a.toString())
console.log(strVal)


// type
type AreaNumber = {
    height: number;
    weight: number
}

// static
type Area = {
    [key in 'height' | 'weight']: string
}

type Volume = {
    height: number;
    weight: string;
    depth: number;
}

// dynamic ( javascript map like typescript)
type Area2 = {
    [key in keyof Volume] : string
}

// batter version of avobe code
type Area3 = {
    readonly [key in keyof Volume] : Volume[key]
}

// lets make generic

type Area4<T> = {
    [key in keyof T] : T[key]
}

const dec:Area4<Volume> = {
    height: 3,
    weight: '1',
    depth: 1,
}

type x = AreaNumber['height'] // look up type
type y = keyof AreaNumber; // 'width' | 'height' (union)


// readonly type
type AreaReadOnly = {
    readonly height: number;
    weight: number;
}

const valueRead:AreaReadOnly = {
    height:12,
    weight:10
}

// valueRead.height = 9

// const obj = {
//     name: "roni"
// }
// obj['name']