var mili = 0;
var sec = 0;
var miliadd = document.getElementById("mili");
var secadd = document.getElementById("sec");
var x;

function myTimer() {
    mili += 1;
    if (mili <= 9) {
        miliadd.innerHTML = "0" + mili;
    }
    if (mili > 9 && mili < 60) {
        miliadd.innerHTML = mili;
    }
    if (mili == 60) {
        sec += 1;
        secadd.innerHTML = "0" + sec;
        mili = 0;
        // miliadd.innerHTML = '0' + '0'
    }

}
function startfun() {
    x = setInterval(myTimer, 100);
}

function stopfun() {
    clearInterval(x);
}

function resetfun() {
    clearInterval(x);
    mili = 0;
    sec = 0;
    miliadd.innerHTML = "0" + "0"
    secadd.innerHTML = "0" + "0"
}