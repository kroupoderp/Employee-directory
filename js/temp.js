

var a = "Santa clarita";

let reg = /\s{1}/g;


function cpfl(string) {

    return string.slice(0, reg.lastIndex -1) +
        ' ' + string.charAt(reg.lastIndex).toUpperCase() +
        string.slice(reg.lastIndex + 1);
}


if (reg.test(a)) {
    console.log(cpfl(a, reg.lastIndex));
}



console.log(reg.lastIndex);