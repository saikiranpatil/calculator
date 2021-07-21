str = "";
var bool = 0;
function disp() {
    if (str.length > 8) {
        document.getElementById('main-display').innerHTML = "Error";
        str = "";
    }
    else {
        document.getElementById('main-display').innerHTML = str;
    }
}
function add(x) {
    str = str + x;
    disp();
}
function root() {
    str = Math.sqrt(str);
    disp();
}
function ac() {
    str = "";
    disp();
}
function c() {
    str = str.slice(0, -1);
    disp();
}
function equal() {
    let len = str.length;
    ans = Math.round(eval(str));
    str = ans;
    disp();
    bool = 1;
}