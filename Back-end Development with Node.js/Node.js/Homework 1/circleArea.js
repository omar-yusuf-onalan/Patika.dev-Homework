const argument = process.argv.slice(2);

function calcCircleArea (radius) {
    circleArea = Math.PI * Math.pow(radius, 2);
    console.log(circleArea);
}

calcCircleArea(argument[0]);