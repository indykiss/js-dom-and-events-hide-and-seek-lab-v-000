
function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('div#nested div.target');
}


function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML =  parseInt(lis[i].innerHTML) + n;
  }
}


function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div');
  let new_ele = ""

  for (let i = 0; i < elements.length; i++) {
     new_ele = elements[i];
  }
  return new_ele

}
