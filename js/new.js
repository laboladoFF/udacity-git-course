var deck = document.querySelector('.deck');
var cards = document.getElementsByClassName('card');
var cardsOpened = [];
var matchedCards = [];

deck.addEventListener('click', function(event){
  var target = event.target || event.srcElement;
  console.log('o');
  if(target.className.toLowerCase() == 'card'){
  //console.log(target.children[0].className);
  openTheCard(target) ;
  }
});
//打开卡片
function openTheCard(e){
    if(e.className = "card open show"){//一个等号。两个等号无效
      addCardToOpenCards(e)
    }else{
      e.classList.add('open','show');
    }
}
//建立打开卡片组
function addCardToOpenCards(e){
  cardsOpened.push(e.children[0].className);
  var iCard = e.getElementsByTagName('i')[0];
  //通过点击e获取i元素，与cardsOpened【】元素进行对比
  if(cardsOpened.length >= 2){
    //console.log('>2');
    //console.log(iCard.className + cardsOpened);
    if(cardsOpened[0] == iCard.className){
      console.log('match');
      console.log(cardsOpened[0], cardsOpened[1]);
    }else{
      console.log('nomatch');
    }
    cardsOpened.splice(0,2);
  }else{
    console.log('<2');
  }
}
//检查图案是否一致
//对children[0],children[1]classname
//对比成功元素添加match，并添加到marchedCards数组中
//对比失败元素去掉样式open、show
function checkPattern(e){
  if（cardsOpened[0] == cardsOpened[1]）{
    console.log('match');
  }else{
    console.log('nomatch');
  }
}
