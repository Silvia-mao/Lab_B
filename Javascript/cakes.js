//隱藏導覽器
let prevScrollPos = window.pageYOffset;
const toplogo = document.querySelector('.toplogo');

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        toplogo.style.top = '0';
    } else {
        toplogo.style.top = '-' + toplogo.offsetHeight + 'px'; // 將整個導覽列隱藏在視窗上方
    }

    prevScrollPos = currentScrollPos;
}

