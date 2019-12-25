function Stopwatch() {
  // Initialize stopwatch with 0s on the clock
  let defaultDuration = 0;
  let duration = defaultDuration;

  // Bool that controls whether the stopwatch is running or not
  let isRunning = false;
  let start = null;

  this.start = function() {
    if (isRunning) {
      throw new Error("Stopwatch is already started.");
    } else {
      start = new Date();
      isRunning = true;
    }
  };

  this.stop = function() {
    if (!isRunning) {
      throw new Error("Stopwatch is not running.");
    } else {
      let stop = new Date();
      this.duration += (stop - start) / 1000;
      isRunning = false;
    }
  };

  this.reset = function() {
    if (this.duration == 0 || isRunning) {
      throw new Error("Stopwatch cannot currently be reset.");
    } else {
      this.duration = 0;
    }
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

const sw = new Stopwatch();
