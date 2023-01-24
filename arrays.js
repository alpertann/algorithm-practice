/* Soru: let dizi = [2,5,8,11,15,17];

Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları 
içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi 
oluşturun. (sonuç [55, 75, 85] olmalı.) */

let dizi = [2,5,8,11,15,17];

let sayilar = dizi.filter(function(a){
    return a > 10;
});

let y = sayilar.map(function(b){
    return b*5;
});

/* 2. Soru
Uygun dizi metotlarını kullanarak, 
yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.

Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." 
yoksa "5'ten büyük eleman mevcut değil." yazdır.*/

console.log(y)

let dizi1 = [3,6,9,14,16];

function myFunction (dizi1){
    let y = dizi.filter(function(a){
        return a > 5;
    })

if (y.length > 0){
    console.log("Beşten büyük bir sayı var");
} else {
    console.log("5'ten küçük eleman mevcut değil.")
}
    }
myFunction(dizi);

/* 3. Soru
Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının 
sonucunu (24) veren bir fonksiyon yazınız. */

let dizi3 = [2,3,4];

let carpimi = ( x , y) => ( x * y)
let carpim = dizi3.reduce(carpimi)
console.log(carpim)
