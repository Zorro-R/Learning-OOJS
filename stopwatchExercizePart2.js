function Stopwatch() {
  // Initialize stopwatch with 0s on the clock
  let defaultDuration = 0;
  let duration = defaultDuration;

  // Bool that controls whether the stopwatch is running or not
  let isRunning = false;
  let startTime = null;

  Object.defineProperty(this, "isRunning", {
    get: function() {
      return isRunning;
    },
    set: function(value) {
      isRunning = value;
    }
  });

  Object.defineProperty(this, "startTime", {
    get: function() {
      return startTime;
    },
    set: function(value) {
      startTime = value;
    }
  });

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    },
    set: function(value) {
      duration = value;
    }
  });
}

Stopwatch.prototype.start = function() {
  if (this.isRunning) {
    throw new Error("Stopwatch is already started.");
  } else {
    this.startTime = new Date();
    this.isRunning = true;
  }
};

Stopwatch.prototype.stop = function() {
  if (!this.isRunning) {
    throw new Error("Stopwatch is not running.");
  } else {
    let stopTime = new Date();
    this.duration += (stopTime - this.startTime) / 1000;
    this.isRunning = false;
  }
};

Stopwatch.prototype.reset = function() {
  if (this.duration == 0 || this.isRunning) {
    throw new Error("Stopwatch cannot currently be reset.");
  } else {
    this.duration = 0;
  }
};

const sw = new Stopwatch();
