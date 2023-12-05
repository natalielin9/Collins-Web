"use strict";

/*
	author: Natalie Lin
   
	filename: cw(1)_table.js

	Codes for the HTML code to create the table of events. 
*/

/*Array of default events*/
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

/*Array of events (grabbed from local server)*/
const collinsWebEvents = JSON.parse(localStorage.getItem('collinsWebEvents')) || defaultEvents;

/*Variables to set the time range that will be viable to be displayed in the table.*/
var thisDay = new Date();
var tableHTML = "<table id='eventTable'><h2>Upcoming Events</h2><tr><th>Date</th><th>Event</th><th>Host</th><th>Price</th></tr>";
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

/*For loop that goes through each of the events and grabs the information about each of them to add to the HTML code for the table.*/
for (var i = 0; i < collinsWebEvents.length; i++) {
	var eventDate = new Date(collinsWebEvents[i].eventDate);
	var eventDay = eventDate.toDateString();
	var eventTime = eventDate.toLocaleTimeString();
	var price = "$" + collinsWebEvents[i].eventPrice;

	if (price=="$0") {
		price="Free";
	}

	if ((thisDay <= eventDate) && (eventDate <= endDate)) {
		tableHTML += "<tr>";
		tableHTML += "<td>" + eventDay + " @ " + eventTime + "</td>";
		tableHTML += "<td>" + collinsWebEvents[i].eventName + "</td>";
		tableHTML += "<td>" + collinsWebEvents[i].partnerName + "</td>";
		tableHTML += "<td>" + price + "</td>";
		tableHTML += "</tr>";
	}
}

tableHTML += "</table>";

/*Finds the ID and implements the code at that position*/
document.getElementById("eventList").innerHTML = tableHTML;
