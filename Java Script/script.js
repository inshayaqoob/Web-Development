let hw=document.querySelector('button');
hw.addEventListener('click',inputMsg);
function inputMsg(){
    let name=prompt('enter name of student')
    hw.textContent='roll no,1:'+name;
}
let x ="my name is insha"
console.log(x.length)
let great ='my name is  arfa'
console.log(great[3])
let arfa = 'Punjab college '
console.log(arfa.indexOf('b'))
var pgc='games shows are the best'
console.log(pgc.slice(2,4))
console.log(pgc.toLowerCase())
console.log(pgc.toUpperCase())