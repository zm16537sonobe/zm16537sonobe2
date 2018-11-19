function hyoji(){
  //表示する文字
var str="一文字ずつ表示します。";
//テキストボックスの文字数
// var count=document.timer.moji.value.length;
 var count=document.timer.moji.value.length; 
//文字が全部表示されているか確認

if(count < 11){
  //現在より１文字多く切り出して表示
  document.timer.moji.value=str.substr(0,count+1);}
else{
  //全て表示されたら、空文字に戻す
  document.timer.moji.value="";
}}
function startfnc(){
  //関数hyouji()を1000ミリ秒間隔で呼び出す
  setInterval("hyoji()",1000);}

function mes(){
  alert("３秒経ちました！");
}
