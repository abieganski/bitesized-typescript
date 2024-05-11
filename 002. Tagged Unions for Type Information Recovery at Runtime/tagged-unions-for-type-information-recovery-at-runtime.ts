interface Square {
    kind: 'square';
    width: number;
}

interface Rectangle {
    kind: 'rectangle';
    height: number;
    width: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape.kind === 'rectangle') {
        //shape; // Type is Rectangle
        return shape.width * shape.height;
    } else {
        //shape; // Type is Square
        return shape.width * shape.width;
    }
}



const rect : Shape = {
    kind: 'rectangle',
    width: 100,
    height: 200
};

console.log(calculateArea(rect))

const square : Shape = {
    kind: 'square',
    width: 100
};

console.log(calculateArea(square))


