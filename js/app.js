/*
 * 创建一个包含所有卡片的数组
 */
var cardPattern = [
  "fa fa-diamond","fa fa-paper-plane-o",
  "fa fa-anchor","fa fa-bolt",
  "fa fa-cube","fa fa-anchor",
  "fa fa-leaf","fa fa-bicycle",
  "fa fa-diamond","fa fa-bomb",
  "fa fa-leaf","fa fa-bomb",
  "fa fa-bolt","fa fa-bicycle",
  "fa fa-paper-plane-o","fa fa-cube"
];
var deck = document.querySelector('.deck');
var cards = document.getElementsByClassName('card');
var cardsOpened = [];
var matchedCards = [];
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
