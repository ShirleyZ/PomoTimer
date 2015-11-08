var Timer = function(displayID) {
  var obj = {
    'counter': 0,
    'hours': 0,
    'minutes': 0,
    'seconds': 0,
    'displayID': displayID,
    'intervalID': ''
  }
  $.extend(obj, Timer.methods);
  console.log(obj);
  return obj;
}

Timer.methods = {
  setTimer: function(time) {
    var newTime = time * 60; // into minutes then seconds
    this.counter = newTime;
    console.log('Time set to ' + newTime);
  },
  startTimer: function() {
    console.log("Begin timer");
    this.intervalID = window.setInterval(this.tickCounter.bind(this), 1000);
  },
  stopTimer: function() {
    console.log("Stop timer");
    window.clearInterval(this.intervalID);
  },
  tickCounter: function() {
    this.counter -= 1;

    // var hours, 
    var minutes, seconds;
    var newTotal;
    console.log(this.counter);

    // hours = this.counter / 3600;
    // newTotal = this.counter % 3600;

    minutes = Math.floor(this.counter / 60);
    newTotal = this.counter % 60;
    // newTotal = newTotal % 60;
    console.log("Minutes");
    console.log(minutes);

    seconds = newTotal;
    console.log("seconds");
    console.log(seconds);

    console.log("Changing page");
    // document.getElementByID(this.displayID+'-hours').innerHTML = hours;
    findThis = this.displayID+'-minute';
    console.log("Looking for");
    console.log(findThis);
    var minElem = document.getElementById(findThis);
    console.log("Found");
    console.log(minElem);
    minElem.innerHTML = minutes;
    document.getElementById(this.displayID+'-second').innerHTML = seconds;
    console.log("Page changed");
  }
}

// window.onload = function() {
  var workTimer = Timer('workTimer');
  var breakTimer = Timer('breakTimer');

// }