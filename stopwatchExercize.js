function Stopwatch() {
  // Initialize stopwatch with 0s on the clock
  let defaultDuration = 0;
  let duration = defaultDuration;

  // Bool that controls whether the stopwatch is running or not
  let isRunning = false;
  let startTime = null;

  this.start = function() {
    if (isRunning) {
      throw new Error("Stopwatch is already started.");
    } else {
      startTime = new Date();
      isRunning = true;
    }
  };

  this.stop = function() {
    if (!isRunning) {
      throw new Error("Stopwatch is not running.");
    } else {
      let stopTime = new Date();
      duration += (stopTime - startTime) / 1000;
      isRunning = false;
    }
  };

  this.reset = function() {
    if (duration == 0 || isRunning) {
      throw new Error("Stopwatch cannot currently be reset.");
    } else {
      duration = 0;
    }
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

const sw = new Stopwatch();
