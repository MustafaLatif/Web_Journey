🎯 Introduction to Event-Driven Architecture (EDA)
Event-Driven Architecture is a design pattern used in software development where the flow of the program is determined by events.
🧠 NodeJS handles I/O operations using EDA, making it efficient for asynchronous, non-blocking tasks like file reads, network requests, etc.

🔁 Core Components of EDA:
Event Emitter 📨
The source that generates or emits events.
Event Listener 👂
A function that listens for specific events and triggers an action when the event occurs.
Event Handler 🛠️
The actual logic/function that runs in response to the event.

🧪 Real-Life Examples of EDA:
✅ NodeJS internal architecture
✅ DOM events in browsers
✅ Chat applications (e.g., message received)
✅ Operating Systems handling keyboard/mouse input
✅ YouTube notifications
✅ Payment systems (e.g., success/failure callbacks)

🔍 Code Example :
const h1 = document.querySelector("h1");
h1.addEventListener("click", () => {  
console.log("h1 clicked");
});
Explanation:
h1 → Event Emitter
addEventListener() → Event Listener
The callback function → Event Handler

Node js Event Emitter
 Event Emitter in Node.js
Node.js provides a built-in EventEmitter class to implement the Event-Driven Architecture pattern in server-side applications.

🔧 How to Use:
You can import it like this:
import EventEmitter from "events";
This class gives access to many powerful methods for working with custom events — such as:
.on() → Register an event listener
.emit() → Trigger the event
.once() → Handle the event only once
.setMaxListeners() → Set the max number of listeners per event

📂 Internally:
When an event is registered:
It’s stored as a key inside the internal _events object
The value is the handler function (or an array of handlers, if multiple are added)
💡 If you register multiple handlers for the same event, Node will automatically convert the value into an array of functions, and all will be executed when the event is emitted.

✨ Example:
import EventEmitter from "events";
const emitter = new EventEmitter();
emitter.on("abc", () => {  
console.log("abc event fired 1");
});

emitter.on("abc", () => {  
console.log("abc event fired 2");
});

emitter.on("x", () => {  
console.log("x event fired");
});

emitter.on("y", () => {  
console.log("y event fired ");
});

emitter.emit("x");

🧠 Summary:
abc event has two handlers, stored as an array under _events.abc
x and y each have one handler
When emitter.emit("x") runs, only the "x" handler executes
Use .once() if you want an event to fire only once and auto-remove the listener after that