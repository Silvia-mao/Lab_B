// 取得年份元素
const birthyearSelect = document.getElementById('birthyear');
for (let year = 1911; year <= 2023; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year.toString();
    birthyearSelect.appendChild(option);
}
// 取得月份元素
const birthmonthSelect = document.getElementById('birthmonth');
for (let i = 1; i <= 12; i++) {
    const option = new Option(i, i);
    birthmonthSelect.appendChild(option);
}
//取得日期元素
const birthdaySelect = document.getElementById('birthday');
for (let i = 1; i <= 31; i++) {
    const option = new Option(i, i);
    birthdaySelect.appendChild(option);
}
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

function registerSuccess() {
    alert('註冊成功');
    window.location.href = '../HTML/homepage1205.html'; 
    // 將此處的 URL 替換為你想要跳轉的頁面
}