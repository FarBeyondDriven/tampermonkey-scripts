// ==UserScript==
// @name KillBadEvents
// @description Kill unwanted javascript events that hijack/block browser events
// @version 59
// @author FBD
// @include http://*
// @include https://*
// @match http://*
// @match https://*
// @run-at document-start
// @grant none
// @updateURL https://github.com/FarBeyondDriven/tampermonkey-scripts/raw/main/killBadEvents.user.js
// @downloadURL https://github.com/FarBeyondDriven/tampermonkey-scripts/raw/main/killBadEvents.user.js
// ==/UserScript==

// add more events to block here
var evts = ["contextmenu"];

EventTarget.prototype.addEventListenerBase = EventTarget.prototype.addEventListener;

EventTarget.prototype.addEventListener = function(type, listener) {
  if (evts.includes(type)) {
    console.log("Event trigger for " + type + " skipped");
  } else {
    console.log("Trigger activated for " + type);
    this.addEventListenerBase(type, listener);
  }
};
