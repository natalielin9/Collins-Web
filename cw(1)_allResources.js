"use strict";
/*
	author: Natalie Lin
   
	filename: cw(1)_allResources.js

	Codes for the HTML code to create the list of all the resources. 
*/

/*HTML code for list items that contain an inline image, a title, a contact number, and a description (in a p element).*/
var resourcesHTML = "<ul id='allResourcesList'>";

for (var i = 0; i < resourceList.length; i++) {
    resourcesHTML += "<li>";
	resourcesHTML += "<img src='" + resourceImage[i] + "' alt='" + resourceList[i] + "' />";
    resourcesHTML += "<h3>" + resourceList[i] + "</h3>";
	if (resourceContact[i].length>7){
		resourcesHTML += "<a href= 'tel:" + resourceContact[i] + "'>";
		resourcesHTML += "(" + resourceContact[i].substring(0,3) + ") " + resourceContact[i].substring(3,6) + "-" + resourceContact[i].substring(6,11) +"</a>";
    } else {
		resourcesHTML += "<p>Text 'HELLO' to " + resourceContact[i] + "</p>"
	}
	resourcesHTML += "<p>" + resourceDescription[i] + "</p>";
	resourcesHTML += "</li>"
}

resourcesHTML += "</ul>";

/*Finds ID "allResources" which is in cw(1)_resources.html.*/
document.getElementById("allResources").innerHTML = resourcesHTML;