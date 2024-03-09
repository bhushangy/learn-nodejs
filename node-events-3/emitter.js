// Say an event happened and also respond to it...
// listener - code that responds ti the event
function Emitter() {
  this.events = {};
}

// On - when the event happens, execute the corresponding listener
Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
  this.events[type]?.forEach((listener) => listener());
};

module.exports = new Emitter();
