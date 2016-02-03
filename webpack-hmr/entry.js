require('style!css!./entry.css');

var div = document.createElement('div');
div.textContent = 'Cooling';
// div.textContent = (require('./getName'));
document.body.appendChild(div);

if (module.hot) {
  module.hot.dispose(function (){
    div.parentNode.removeChild(div);
  });
}

module.hot.accept();
