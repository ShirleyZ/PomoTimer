var Timer = function(displayID) {
  var obj = {
    'counter': 3000,
    'displayID': displayID,
    'intervalID': ''
  }
  $.extend(obj, Timer.methods);
  console.log(obj);
  return obj;
}

Timer.methods = {
  setTimer: function(time) {
    var newTime = time * 60;
    this.counter = newTime;

    var times = this.calcTimeUnits();
    this.updateTimer(times.minutes,times.seconds);
  },
  startTimer: function() {
    console.log("Begin timer");
    this.tickCounter.bind(this)
    this.intervalID = window.setInterval(this.tickCounter.bind(this), 1000);
  },
  stopTimer: function() {
    console.log("Stop timer");
    window.clearInterval(this.intervalID);
  },
  calcTimeUnits: function() {
    var times = {
      'minutes': 0, 
      'seconds': 0
    };
    var newTotal;

    times.minutes = Math.floor(this.counter / 60);
    newTotal = this.counter % 60;

    times.seconds = newTotal;

    return times;
  },
  tickCounter: function() {
    this.counter -= 1;

    var times = this.calcTimeUnits();
    
    this.updateTimer(times.minutes,times.seconds);

    console.log("Page changed");
  },
  updateTimer: function(minutes, seconds) {
    document.getElementById(this.displayID+'-minute').innerHTML = minutes;
    document.getElementById(this.displayID+'-second').innerHTML = seconds;
  }
}

var workTimer = Timer('workTimer');
var breakTimer = Timer('breakTimer');
