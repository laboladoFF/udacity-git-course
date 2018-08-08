//点击元素变化css样式
// var cardOpen = document.getElementsByClassName('card');
//
// var cards = [];
//
// for(let i = 0; i <= cardOpen.length; i++){
//   cards.push(cardOpen[i]);
//   cards[i].addEventListener('click',function cardClick(){
//     cards[i].classList.toggle('open');//不能同时放两个css样式
//     cards[i].classList.toggle('show');
//   });
// }



var closeCards = document.getElementsByClassName('card');
var cards = [];
for(let i = 0; i <= closeCards.length; i++){
  cards.push(closeCards[i]);
  cards[i].addEventListener('click',function() {
  openCard(i);
  });
}
//打开卡片
function openCard(e){
    cards[e].classList.add('open','show');
    //openNum();
}
function addCardToOpenCards(){
  var openLi = document.getElementsByClassName('open');
  //var is = openLi.children;
  console.dir(openLi);
}


//确定打开卡片奇偶数
function openNum(){
  var openLi = document.getElementsByClassName('open');
  var is = openLi.children;
  //var is = openLi.getElementsByClassName('fa')[0];
    if(openLi.length % 2 === 0){
      //var lis = [];
      //var is = [];
      for(let i = 0; i <= openLi.length; i++){
        //lis.push(openLi[i]);
        is = open[i].getElementsByClassName('fa')[0];
        //is = lis[i];
        //console.log(open[i]);
      }
      console.log(is);
      console.log('even');
    }else{
      console.log('odd');
    }//console.log(openLi);
}
//openLi[i].innerHTML

//思路建立open数组，丢数组元素内容进行对比 通过后两位获取
function checkOpen(e){
  for(let i = 0; i <= e.length; i++){
  lis.push(e[i]);
  }
  console.log(lis);
  checkName(lis)
}
function checkName(e){

}

 function checkName(e){
     if(e[0].className === e[1].className){
       console.log('match');
       // e[0].classList.add('match');
       // e[1].classList.add('match');
     }else{
       console.log(e[1],e[0]);
       // e[0].classList.remove('open','show');
       // e[1].classList.remove('open','show');
     }
 }
