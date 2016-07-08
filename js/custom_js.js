
/**
This function adds the attribute to the positive or negative list
depending on the user input.
**/
function addElement(){
    var term = document.getElementById("term").value;

	
    // Making sure maximum length of the term field

    if(term.length > 50){
    //alert("Your term length is greater than 50.");
    document.getElementById("alertmessage1").innerHTML = "Your term length is greater than 50.";
    document.getElementById("alertmessage1").style.display = "inline";
    return;
    }

    // Making sure that the user has entered something Or term field is not blank

    if(term == ""){
    document.getElementById("alertmessage1").style.display = "inline";
    return;
    }

    // Checking for duplicate entry

    var checkOldTerm = document.getElementById(term);
    if (checkOldTerm){
        document.getElementById("alertmessage1").innerHTML = "Your have already used this term.";
        document.getElementById("alertmessage1").style.display = "inline";
        document.getElementById("term").value = "";
        return;
    }

    // Making sure that user has selected at least positive or negative type

    var type = document.getElementById("type").value;
    if(type == "default"){
        //alert("Please select atleast positive or negative as a type");
        document.getElementById("alertmessage").style.display = "inline";
        return;
    }

    // postive or negative Attribute addition logic

    if (type == "positive"){
        var olName = "positive-list";
        var buttonClass = "btn btn-success btn-sm";
    }
    else{
        var olName = "negative-list";
        var buttonClass = "btn btn-danger btn-sm";
    }

    var ol = document.getElementById(olName);
    var li = document.createElement("li");
    li.setAttribute("id", term);
    li.setAttribute("style", "list-style-type: none; margin: 10px");

    var div = document.createElement("div");
    div.setAttribute("class","btn-group");
    div.setAttribute("role", "group");


    var button = document.createElement("button");
    button.setAttribute("class", buttonClass);
    button.setAttribute("type", "button");
    button.setAttribute("onclick","fillTermBox(\"" + term +"\")");

    var closeButton = document.createElement("button");
    closeButton.setAttribute("class", buttonClass);
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("onclick","removeTerm(\"" + olName + "\",\"" + term + "\")");


    var span = document.createElement("span");
    span.setAttribute("class","glyphicon glyphicon-remove");
    span.setAttribute("aria-hidden", "true");

    var text =  document.createTextNode(" " + term + " ");
    var br = document.createElement("br");

    // appending all the dynamically created elements

    button.appendChild(text);
    closeButton.appendChild(span);
    div.appendChild(button);
    div.appendChild(closeButton);
    li.appendChild(div);
    li.appendChild(br);
    ol.appendChild(li);

    // Resetting the form

    document.getElementById("term").value = "";
    document.getElementById("type").value = "default";
    
}


/**
This function removes terms from the positive or negative list
using the term id
**/
function removeTerm(olName, term){
    var myOl = document.getElementById(olName);
    var myTerm = document.getElementById(term);
    myOl.removeChild(myTerm);
    document.getElementById("term").value = "";
}


/**
This function hides the alert using alert id
**/
function hideAlert(alertId){
    document.getElementById(alertId).style.display = "none";
}


/**
This method simply fills the term text box when a particular term is clicked
**/
function fillTermBox(text){
    var termBox = document.getElementById("term");
    term.value = text;
	var typeBox = docuent.getElementById("type");
	type.value = text;	
	
	}
	
	function sort() {
    term.sort();
    document.getElementById("term").innerHTML = term;
}