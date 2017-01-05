// var Lives = 3;
// Lives = Lives + 1;

var VisitorsAge = prompt("How many years have you been alive for?");

//文字列を受け取って数字で返すメソッド
var YearsAlive = parseInt(VisitorsAge);

YearsAlive = YearsAlive * 365;

document.write(" You have been alive for " + YearsAlive + " Days!!!!");

//0〜1の値がランダム(Math.random)に出る → 与えられた数字以下の最大の整数を返す(Math.floor)
var RNumber = Math.floor(Math.random() *50) +1;
alert(RNumber);
