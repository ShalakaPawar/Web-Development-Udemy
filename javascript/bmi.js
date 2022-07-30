function get_bmi(weight, height){
    var bmi = weight/(height*height);
    console.log(bmi);
    bmi = (weight / Math.pow( (height), 2 )).toFixed(1);
    console.log(bmi);
    return bmi;
}
//weight in kg
//height in meters
var output = get_bmi(68, 1.65);
console.log(output);