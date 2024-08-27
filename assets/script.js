document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-tab');

            tabButtons.forEach(button => button.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});

// カウントダウンの終了日を設定
const countDownDate = new Date("September 30, 2024 23:59:59").getTime();

// カウントダウンの関数を設定
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // 時間の計算
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTMLの要素に表示
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // カウントダウン終了時の処理
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").textContent = "キャンペーン終了";
    }
}, 1000);


const countDownDate2 = new Date("September 30, 2024 23:59:59").getTime();

const countdown2Function = setInterval(() => {
    const now2 = new Date().getTime();
    const distance2 = countDownDate2 - now2;

    const days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    const hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    document.getElementById("days2").textContent = days2;
    document.getElementById("hours2").textContent = hours2;
    document.getElementById("minutes2").textContent = minutes2;
    document.getElementById("seconds2").textContent = seconds2;

    if (distance2 < 0) {
        clearInterval(countdown2Function);
        document.querySelector(".countdown-2").textContent = "キャンペーン終了";
    }
}, 1000);

document.getElementById('button1').addEventListener('click', function() {
    openPopup('popup1');
});

document.getElementById('button2').addEventListener('click', function() {
    openPopup('popup2');
});

function openPopup(id) {
    document.getElementById(id).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    const draggable = document.querySelector('.Section10-表');
    const container = document.querySelector('.比較表');
    let startX, scrollLeft;

    // タッチ開始イベント
    const startTouch = (e) => {
        if (e.touches.length < 2) return; // 二本指でなければ何もしない
        startX = e.touches[0].pageX;
        scrollLeft = draggable.offsetLeft;
        e.preventDefault(); 
    };

    // タッチムーブイベント
    const duringTouch = (e) => {
        if (e.touches.length < 2) return; // 二本指でなければ何もしない
        const x = e.touches[0].pageX;
        const walk = (x - startX);
        let newPosition = scrollLeft + walk;

        // 境界チェック
        const maxLeft = 0;
        const maxRight = container.clientWidth - draggable.clientWidth;
        newPosition = Math.max(maxLeft, Math.min(newPosition, maxRight));

        draggable.style.left = `${newPosition}px`;
        e.preventDefault(); 
    };

    // タッチエンドイベント
    const endTouch = () => {
        // タッチ終了時には特に処理しない
    };

    // イベントリスナーの設定
    draggable.addEventListener('touchstart', startTouch, { passive: false });
    window.addEventListener('touchmove', duringTouch, { passive: false });
    window.addEventListener('touchend', endTouch);
});
