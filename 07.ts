const str:String = `Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali

Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib

Aku ingin terbang bebas Di angkasa Hei… baling baling bambu

La... la... la... Aku sayang sekali Doraemon

La... la... la... Aku sayang sekali`;

let aku:number = (str.match(/aku/ig) || []).length;
let ingin:number = (str.match(/ingin/ig) || []).length;
let dapat:number = (str.match(/dapat/ig) || []).length;


console.log(aku)
console.log(ingin)
console.log(dapat)
