//1st way (use if else)
var doctor = 350;
var engineer = 450;
var businessman = 400;
if (doctor > engineer && doctor > businessman) {
    console.log("Doctor is bigger");
}
else if (engineer > doctor && engineer > businessman) {
    console.log("Engineer is bigger");
}
else {
    console.log("businessman is bigger");
}



//2nd way (use math.max)
var max = Math.max(doctor, engineer, businessman);
console.log(max);