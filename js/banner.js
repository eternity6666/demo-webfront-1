var arr = [
    "./img/lb1.jpg",
    "./img/lb2.jpg",
    "./img/lb3.jpg",
    "./img/lb4.jpg",
    "./img/lb5.jpg",
    "./img/lb6.jpg",
    "./img/lb7.jpg",
    "./img/lb8.jpg"
]
var len = arr.length;
var now = 0;
var yimgNow = document.getElementById('yimg-now');
var yimgNew = document.getElementById('yimg-new');
var yradioGrp = document.getElementsByClassName('yradio-grp')[0];
yimgNow.src = arr[now];
window.onload = function () {
    function createRadio() {
        var yradioGrp = document.getElementsByClassName('yradio-grp')[0];
        for (i = 0; i < len; ++i) {
            yradioGrp.innerHTML += '<input class="yradio" name="radio" type="radio" onclick=setNew(' + i + ')>'
        }
        yradioGrp.children[now].checked = true;
    }
    createRadio();
}

function left() {
    var newImg;
    if (now == 0) newImg = len - 1;
    else newImg = now - 1;
    setNew(newImg);
}

function right() {
    var newImg;
    if (now == len - 1) newImg = 0;
    else newImg = now + 1;
    setNew(newImg);
}

function setNew(newImg) {
    now = newImg;
    yimgNow.src = arr[now];
    console.log(now);
    yradioGrp.children[now].checked = true;
    clearInterval(int);
    int = self.setInterval("right()", 2000);
}

function animateCSS(element, callback) {
    const nodes = document.querySelectorAll('.' + element);
    if (!nodes.length) {
        return
    }
    nodes.forEach(function (node, index) {
        setTimeout(function () {
            fadeIn(node, element);
        }, index * 500)
    })
}
var int = self.setInterval("right()", 2000);

function onMouseOver() {
    clearInterval(int);
}

function onMouseOut() {
    int = self.setInterval("right()", 2000);
}