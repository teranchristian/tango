var elements = document.getElementsByTagName('*');
// node type : http://www.javascriptkit.com/domref/nodetype.shtml
var TEXT_NODE = 3;
var blackList = [
  'title',
  'style',
  'a',
  'script',
  'body',
  'noscript'
];

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (
      node.nodeType === TEXT_NODE &&
      blackList.indexOf(node.parentElement.localName) === -1
    ) {
      var text = node.nodeValue;
      var divNode = document.createElement('span');
      divNode.textContent = 'たんご';
      divNode.className = 'tooltip';

      var tooltip = document.createElement('span');
      tooltip.className = 'tooltiptext';
      tooltip.textContent = 'Romanji: tango';

      divNode.appendChild(tooltip);
      var replacedText = text.replace(/\bword\b/gi, divNode.outerHTML);

      if (replacedText !== text) {
        var textNode = document.createTextNode(replacedText);
        element.innerHTML = replacedText;
      }
    }
  }
}
