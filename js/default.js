//答えを用意
var number = Math.floor(Math.random()*8);
var answer = parseInt(window.prompt('数あてゲーム！0～8の数字を入力してください！'));

var message;
if(answer === number) {
   message = 'あたり！';}
else if (answer < number){
   message = '残念...もっと大きいです....';}
else if (number< answer){
   message ='残念...もっと小さいです....';}
else{
   message ='0～8の数字を入力してください！！';}


//結果を表示
document.getElementById('choice').textContent = message;
   
