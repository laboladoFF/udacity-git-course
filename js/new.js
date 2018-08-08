var deck = document.querySelector('.deck');
var cards = document.getElementsByClassName('card');
var cardsOpened = [];
var matchedCards = [];

deck.addEventListener('click', function(event){
  var event = event || window.event;
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
//建立打开卡片组&检查图案是否一致
function addCardToOpenCards(e){
  cardsOpened.push(e.children[0]);
  var iCard = e.getElementsByTagName('i')[0];
  //通过点击e获取i元素，与cardsOpened【】元素进行对比
  if(cardsOpened.length >= 2){
    //console.log('>2');
    //console.log(iCard.className + cardsOpened);
    if(cardsOpened[0].className == iCard.className){
      console.log('match');
      addCardToMatchedCards(e, cardsOpened[0].parentNode);
      //console.log(e, iCard.parentNode);
    }else{
      console.log('nomatch');
      setTimeout(hideCardSymbol(e, cardsOpened[0].parentNode), 50000);
    }
    cardsOpened.splice(0,2);
  }else{
    console.log('<2');
  }
}
//对children[0],children[1]classname
//对比成功元素添加match，并添加到marchedCards数组中
//对比失败元素去掉样式open、show
function addCardToMatchedCards(x,y){
  matchedCards.push(x,y);
  x.classList.add('match');
  y.classList.add('match');
  Congratulations(matchedCards);
}
function hideCardSymbol(x,y){
  x.classList.remove('open','show');
  y.classList.remove('open','show');
}

function Congratulations(e){
  if(e.length >= 16){
    alert("恭喜");
  }
}

console.log(matchedCards);
// matchedCards = [] 等于16时，移除点击事件
