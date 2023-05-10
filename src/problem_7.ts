/*Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red"). */

enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
}

function colorValue(color: Color){
    console.log(`You seleted ${color}`)
}
colorValue(Color.Green)