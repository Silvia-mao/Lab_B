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
// 導覽器終點

function displayLargeImage(imageSrc) {
    var largeImageElement = document.getElementById('largeImage');
    largeImageElement.src = imageSrc;
}

// 數量選擇器
document.addEventListener("DOMContentLoaded", function () {
    const minusBtn = document.querySelector('.buttonminus');
    const plusBtn = document.querySelector('.buttonplus');
    const inputElement = document.querySelector('.numberinput');

    plusBtn.addEventListener('click', function () {
        let currentValue = parseInt(inputElement.value);
        inputElement.value = currentValue + 1;
    });

    minusBtn.addEventListener('click', function () {
        let currentValue = parseInt(inputElement.value);
        if (currentValue > 1) {
            inputElement.value = currentValue - 1;
        }
    });
});