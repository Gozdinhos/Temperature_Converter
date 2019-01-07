
var cTemp = document.getElementById("celcius_box");
var fTemp= document.getElementById("fahrenheit_box");
var kTemp = document.getElementById("kelvin_box");
var toFahr= 0;
var toKelvin=0;
var toCelc=0;
var toKelvi=0;
var toCel=0;
var toFah=0;

function cTofk(celcius) {
console.log("celcius fonksiyonuna girildi.");
if (celcius!="") {
   toFahr= ((parseFloat(celcius))*1.8 +32).toString();
   toKelvin= (parseFloat(celcius) + 273.15).toString();
  fTemp.value = toFahr;
  kTemp.value = toKelvin;
  console.log("fahrenheit is   " + toFahr);
  console.log("kelvin is   " + toKelvin);
} else {
  fTemp.value = "";
  kTemp.value = "";
}

}

function fTock (fahrenheit) {
if (fahrenheit!="") {
var toCelc=(((parseFloat(fahrenheit)-32)/1.8)).toString();
var toKelvi=(((parseFloat(fahrenheit)-32)/1.8 + 273.15)).toString();
cTemp.value = toCelc;
kTemp.value = toKelvi;
console.log("celcius is " + toCelc);
console.log("kelvin is " + toKelvi);
}else {
cTemp.value = "";
kTemp.value = "";
}

}

function kTocf (kelvin) {
if(kelvin!="") {
var toCel= (parseFloat(kelvin) - 273.15).toString();
var toFah= (1.8*(parseFloat(kelvin) - 273.15)+32).toString();
cTemp.value= toCel;
fTemp.value= toFah;
console.log("celcius is " + toCel);
console.log("fahrenheit is " + toFah);
}else {
cTemp.value= "";
fTemp.value= "";
}
}






function main() {
  celcius_box.addEventListener('input',function() {

  cTofk(cTemp.value);

  })

  fahrenheit_box.addEventListener('input',function() {

  fTock(fTemp.value);
  })

  kelvin_box.addEventListener('input',function() {

  kTocf(kTemp.value);
  })
}


main();
