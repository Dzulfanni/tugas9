// latihan2

var panjang = 5;
var lebar = 15;
var tinggi = 3;
var total = function (panjang, lebar, tinggi){
    return (panjang*lebar*tinggi); 
}



// luas permukaan balok
// rumus 2(p*l+p*t+l*t)

var p = 5;
var l = 15;
var t = 3;
var total = function (panjang, lebar, tinggi){
    return (2*(p*l+p*t+l*t)); 
}

document.write ("panjang = "+ p + "</br>");
document.write("lebar = "+ l + "</br>");
document.write("tinggi =" + t + "</br>");
document.write("Luas permukaan balok ="+ total(p, l, t)+ "</br>");
document.write("Volume balok ="+ total(5, 15, 3))