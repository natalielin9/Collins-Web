"use strict";
/*
	author: Natalie Lin
   
	filename: cw(1)_partnerFormOptions.js

	Codes for form options in the community partner drop down question in the new event form in cw(1)_newEventForm.html. 
*/

/*Set up for initial part of HTML code*/
var partnerFormOptionsHTML = "<label for='partnerName'>Community Partner Name</label>";

partnerFormOptionsHTML += "<select name='partner name' id='partnerName' required>";

partnerFormOptionsHTML += "<option selected disabled>choose here</option>";

/*For loop that goes through the partner list in cw(1)_partnerList.js and codes each of them in HTML as options for the drop-down question.*/
for (var i = 0; i < partnerList.length; i++) {
    partnerFormOptionsHTML += "<option value='" + partnerList[i] + "'>" + partnerList[i] + "</option>";
}

partnerFormOptionsHTML += "</select>";

/*Finds ID "partnerNameOptions" which is in cw(1)_newEventForm.html.*/
document.getElementById("partnerNameOptions").innerHTML = partnerFormOptionsHTML;
