//設定倒數截止的時間
var future = new Date("11/13/2023 09:59:59");

//每1毫秒執行一次
window.setInterval(countDown, 1);

function countDown() {
    var now = new Date();
    var timeLeft = future - now;
    var milli = timeLeft;
    var mills = now.getMilliseconds();

    var seconds = milli / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    var spareMills = milli.toString().charAt(milli.toString().length - 3); //字串尾巴往前取順序2開始算，再只取長度1
    var spareSeconds = seconds % 60;
    var spareMinutes = minutes % 60;
    var spareHours = hours % 24;
    var spareDays = days % 365;

    minutes = parseInt(minutes);
    hours = parseInt(hours);
    days = parseInt(days);
    spareSeconds = parseInt(spareSeconds);
    spareMinutes = parseInt(spareMinutes);
    spareHours = parseInt(spareHours);
    spareDays = parseInt(spareDays);

    days = padNumber(days);
    hours = padNumber(hours);
    minutes = padNumber(minutes);
    spareSeconds = padNumber(spareSeconds);
    spareMinutes = padNumber(spareMinutes);
    spareHours = padNumber(spareHours);
    spareDays = padNumber(spareDays);

    timeLeft =
        spareDays +
        "天" +
        spareHours +
        "時" +
        spareMinutes +
        "分" +
        spareSeconds +
        "." +
        spareMills;
    var mySpan = document.getElementById("timer");
    mySpan.innerHTML = timeLeft;

    if (milli <= 0) {
        //時間已經到了的話則顯示"00:00:00"
        mySpan.innerHTML = "00:00:00";
    }
}

function padNumber(number) {
    if (number < 10) {
        number = "0" + number;
        //如果數字小於兩位數，則會在剩下的數字(1~9)前加個0（ex:01）
    }
    return number;
}