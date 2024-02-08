var number = [23, 47, 95, 56, 87, 29];
var max = number[0];
for (var i = 0; i < number.length; i++) {
    var element = number[i];
    if (element > max) {
        max = element;
    }
}
console.log("height value is=", max);