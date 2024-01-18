
//generate and copy password
const geninput = document.querySelector("#igen");

let length = 15;

let upc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lwc = "abcdefghijklmnopqrstuvwxyz";
let numr = "123456789";
let spc = "!@#$%^&*()";

const ac = upc + lwc + numr + spc;

function genPass() {
    let passw = "";

    passw += upc[Math.floor(Math.random() * upc.length)];
    passw += lwc[Math.floor(Math.random() * lwc.length)];
    passw += numr[Math.floor(Math.random() * numr.length)];
    passw += spc[Math.floor(Math.random() * spc.length)];

    while(length > passw.length) {
        passw += ac[Math.floor(Math.random() * ac.length)];
    }

    geninput.value = passw;
}

function copypw() {
    geninput.select();
    document.execCommand("copy");
}
