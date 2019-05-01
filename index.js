
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  let nodes = document.getElementById('grand-node').querySelectorAll('div');
  let deepest_node = "";

  for (let i = 0; i < nodes.length; i++) {
     deepest_node = nodes[i];
  }
  return deepest_node
}
