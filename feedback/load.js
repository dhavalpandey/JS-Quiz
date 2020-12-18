var container = document.getElementById('container');
var loader = document.getElementById('loader');
var robot = document.getElementById('man')

console.log(document.readyState)
if (document.readyState === 'interactive') {
    container.classList.remove('active');
    robot.classList.remove('active');
    loader.classList.add('active');
  }
