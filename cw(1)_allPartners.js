"use strict";
/*
	author: Natalie Lin
   
	filename: cw(1)_allPartners.js

	Codes for the HTML code to create the list of all the community partners. 
*/

//HTML code for list items that contain an inline image, a title, an address, and a description (in a p element).
var partnersHTML = "<ul id='allPartnersList'>";

for (var i = 0; i < partnerList.length; i++) {
    partnersHTML += "<li>";
	partnersHTML += "<img src='" + partnerImage[i] + "' alt='" + partnerList[i] + "' />";
    partnersHTML += "<h3>" + partnerList[i] + "</h3>";
	partnersHTML += "<address>" + partnerLocation[i] + "</address>"
    partnersHTML += "<p>" + partnerDescription[i] + "</p>";
	partnersHTML += "</li>"
}

partnersHTML += "</ul>";

//Finds ID 'allPartners' which is in cw(1)_communityPartners.html.
document.getElementById("allPartners").innerHTML = partnersHTML;

