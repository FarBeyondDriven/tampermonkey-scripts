// ==UserScript==
// @name         Twitch Looter
// @description  Twitch Looter
// @namespace    
// @version      92
// @author       FBD
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const claimString = [ "Claim" ];

  setInterval(function() {
	  // Looting Claim Buttons
	  var pageButtons = document.querySelectorAll('button');

	  if (pageButtons) {
	    console.log("Looter triggered on " + pageButtons.length);

  	  for (let i = 0; i < pageButtons.length; i++) {
	    	if (pageButtons.item(i).attributes[1] && claimString.includes(pageButtons.item(i).attributes[1].nodeValue)) {
		      pageButtons.item(i).click();

		      setTimeout(function() {
			      location.reload();
		      },10000);

		      break;

		    } else if (claimString.includes(pageButtons.item(i).textContent)) {
		      pageButtons.item(i).click();

		      setTimeout(function() {
			      location.reload();
		      },10000);

		      break;
		    }
      }
    }

    var ButtonsArray = [
      "button[data-a-target='DropsCampaignInProgressRewardPresentation-claim-button']", // claim drop on inventory page
	    "button[data-a-target='player-overlay-mature-accept']",    // accept mature stream confirm
	    "button.tw-button.tw-button--success", // channel points claim
	    "button[aria-label='Claim Bonus']",    // channel points 2
    ];

    for (var i = 0; i < ButtonsArray.length; i++) {
      var button = document.querySelectorAll(ButtonsArray[i]);
	    if (button.length === 1) {
	      button[0].click();
      }
    }
  },10000);
}());
