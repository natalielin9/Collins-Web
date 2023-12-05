"use strict";

/*
	author: Natalie Lin

	filename: cw(1)_list.js

	The function that happens when the user submits the new event form. 
*/

                 
//Function that stores input after a form for a new event is submitted.
function storeInput() {
	//Array of default events
	var defaultEvents = [	
		{eventName: "Free Bowling", eventPrice: "0", eventDate: "December 1, 2023 11:00:00", partnerName: "Chippers Lanes"},
		{eventName: "Free Drinks", eventPrice: "0", eventDate: "December 1, 2023 11:00:00", partnerName: "DAZBOG Coffee"},
		{eventName: "Free Bowling", eventPrice: "0", eventDate: "December 2, 2023 11:00:00", partnerName: "Chippers Lanes"},
		{eventName: "Youth Priced Arcade", eventPrice: "0", eventDate: "December 3, 2023 11:00:00", partnerName: "Chippers Lanes"},
		{eventName: "Free Drinks", eventPrice: "0", eventDate: "December 4, 2023 11:00:00", partnerName: "DAZBOG Coffee"},
		{eventName: "Free Bowling", eventPrice: "0", eventDate: "December 5, 2023 11:00:00", partnerName: "Chippers Lanes"},
		{eventName: "Crafting Class", eventPrice: "0", eventDate: "December 12, 2023 11:00:00", partnerName: "Poudre Libraries"},
		{eventName: "Free Bowling", eventPrice: "0", eventDate: "December 14, 2023 11:00:00", partnerName: "Chippers Lanes"}
	];
	
	//Grabbing each of the elements from the form.
	var partnerName = document.getElementById("partnerName").value;
	var eventName = document.getElementById("eventName").value;
	var eventDate = document.getElementById("eventTime").value;
	var eventPrice = document.getElementById("eventPrice").value;

	//Getting the array of events from the local server (or taking the default array of events.
	const collinsWebEvents = JSON.parse(localStorage.getItem("collinsWebEvents")) || defaultEvents;
	
	//Adding the new event to the array.
	collinsWebEvents.push({eventName, eventPrice, eventDate,  partnerName});
	
	//Storing the updated array to the local server.
	localStorage.setItem("collinsWebEvents", JSON.stringify(eventsInformation));

}

