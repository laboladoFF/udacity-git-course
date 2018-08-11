/*
 * 创建一个包含所有卡片的数组
 */
//window.onload=function(){
var allCardsPatternName = [
    "fa fa-diamond","fa fa-paper-plane-o",
    "fa fa-anchor","fa fa-bolt",
    "fa fa-cube","fa fa-anchor",
    "fa fa-bomb","fa fa-leaf",
    "fa fa-bomb","fa fa-bolt",
    "fa fa-bicycle","fa fa-paper-plane-o",
    "fa fa-cube","fa fa-leaf"
];

var deck = document.querySelector('.deck');
var cards = document.getElementsByClassName('card');
var cardCheckTwo = []
var matchedCards = [];
var wrongCards = [];
var cardsName = [];
/*
 * 显示页面上的卡片
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */

// 洗牌函数来自于 http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//现有卡片样式数组重新被新的数组替换

/*
 * 设置一张卡片的事件监听器。 如果该卡片被点击：
 *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
 *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
 */

//绑定点击事件


deck.addEventListener('click', function(event){
    var event = event || window.event;
    var target = event.target || event.srcElement;
    //console.log('o');
    clickSum();
    if(target.className.toLowerCase() == 'card'){
      openTheCard(target) ;
    }
});
 // 记录鼠标点击次数
var clickCount = 0;
function clickSum(){
    clickCount ++;
    timeBegin(clickCount);
    //console.log(clickCount);
}
 //计时器
var t;
var second = 0;
var hour = 0;
var minute = 0;
var timer = document.getElementsByClassName('timer')[0];
var timeCount = timer.getElementsByTagName('span')[0];
function timeBegin(e){
    if(e === 1){
      t = setInterval(timeSum, 1000);
      console.log(second);//second始终为0
    }
}
function timeSum(){
    second ++;
    scoreTime(second);
      if(second >= 60){
        second = 0;
        minute += 1;
      }
      if(minute >= 60){
        minute = 0;
        hour += 1;
      }
    timeCount.textContent =`${hour} 时 ${minute} 分 ${second} 秒`;
    return;
  }

  //去掉星星
var stars = document.getElementsByClassName('stars')[0];
var star = stars.getElementsByTagName('li');
function scoreTime(e){
    // if(e > 5){
    //   star[2].style.display = 'none';
    // }else if(e > 50){
    //   star[1].style.display = 'none';
    // }
    console.log(e);
    switch(e){
      case 10:
        star[2].style.display = 'none';
        break;
      case 59:
        star[1].style.display = 'none';
        break;
    }
}
//恢复星星个数
function returnStar(){
  star[2].style.display = 'inline-block';
  star[1].style.display = 'inline-block';
}

 //打开卡片
function openTheCard(e){
    if(e.className = "card open show"){//一个等号。两个等号无效
      addCardToOpenCards(e)//为什么加 ；就出错
    }else{
      e.classList.add('open','show');
    }
}

 //建立打开卡片组&检查图案是否一致
function addCardToOpenCards(e){
    cardCheckTwo.push(e.children[0]);
    var iCard = e.getElementsByTagName('i')[0];
     //通过点击e获取i元素，与cardCheckTwo【】元素进行对比
    if(cardCheckTwo.length >= 2){
      if(cardCheckTwo[0].className == iCard.className){
        //console.log('match');
        addCardToMatchedCards(e, cardCheckTwo[0].parentNode);
      }else{
        //console.log('nomatch');
        wrongCards.push(e, cardCheckTwo[0].parentNode);
        wrongCard(wrongCards[0],wrongCards[1]);
        wrongCards.splice(0,2);
      }
      setTimeout(function(){
        hideCardSymbol(e, cardCheckTwo[0].parentNode);
        cardCheckTwo.splice(0,2);
      },200)
// 延迟函数对于匹配好的卡片，如果用户快速点击会出现错误
    }
}

 //对比成功元素添加match，并添加到marchedCards数组中
function addCardToMatchedCards(x,y){
    matchedCards.push(x,y);
    x.classList.add('match');
    y.classList.add('match');
    setTimeout(function(){
     Congratulations(matchedCards);
    }, 100);
}

 //没有匹配成功的卡片添加和删除样式
function wrongCard(x,y){
    x.classList.add('nomatch');
    y.classList.add('nomatch');
    //console.log(x,y);
    setTimeout(function(){
      x.classList.remove('nomatch');
      y.classList.remove('nomatch');
    }, 200);
}

 //没有匹配成功的卡片去掉open样式
function hideCardSymbol(x,y){
    x.classList.remove('open','show');
    y.classList.remove('open','show');
}

//全部卡片匹配成功后弹出的对话框
function Congratulations(e){
    if(e.length >= 16){
      clearTimeout(t);
      returnStar();
      alert(`恭喜！
        ${hour} 时 ${minute} 分 ${second} 秒`);
    }
}

//重置
var restart = document.getElementsByClassName('restart')[0];
restart.addEventListener(`click`,function(event){
    var event = event || window.event;
    console.log(second);
    checkMatching();
    clearTimeout(t);
    second = 0;//重置后显示为1
    hour = 0;
    minute = 0;
    timeCount.textContent =`${hour} 时 ${minute} 分 ${second} 秒`;
    clickCount = 0;
    returnStar();
    clearMatchCard();
    matchedCards = [];
    cardCheckTwo = [];
    gavePatternName();
}
)
function checkMatching(){
  if(cardCheckTwo.length === 1){
    cardCheckTwo[0].parentNode.classList.remove('open','show');
  }
}
//去掉所有匹配成功的卡片样式
function clearMatchCard(){
     matchedCards.forEach(function(matchedCard){
       matchedCard.className = "card";
    });
}

//获取所有I元素
var allCards = [];
function getAllCards(){
    for(let i = 0; i < cards.length; i++){
      allCards.push(cards[i].getElementsByTagName('i')[0]);
    }
}

//分别给I元素
function gavePatternName(){
    getAllCards();
    shuffle(allCardsPatternName);
    for(let i = 0; i < cards.length; i++){
      allCards[i].className = allCardsPatternName[i];
    }
}
//}
