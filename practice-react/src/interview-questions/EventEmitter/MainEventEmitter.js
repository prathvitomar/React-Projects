export default class EventEmitter {
    constructor() {
      // Store events and their listeners in an object
      this.events = {};
    }
  
    // Add a listener for a specific event
    on(eventName, listener) {
      if (!this.events[eventName]) {
        this.events[eventName] = []; // Create an array if event does not exist
      }
      this.events[eventName].push(listener); // Add the listener to the event
      return this; // Allow chaining
    }
  
    // Remove a specific listener from an event
    off(eventName, listener) {
      if (!this.events[eventName]) return this; // Do nothing if event doesn't exist
  
      this.events[eventName] = this.events[eventName].filter(fn => fn !== listener);
      return this; // Allow chaining
    }
  
    // Emit an event and call all its listeners with provided arguments
    emit(eventName, ...args) {
      if (!this.events[eventName]) return false; // Return false if no listeners
  
      this.events[eventName].forEach(listener => listener(...args)); // Call each listener with the provided arguments
      return true; // Return true if event had listeners
    }
  }
  