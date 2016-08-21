//sublime chat

function commentList() {

	//var variable and textnode
	var variable = "var "
	var varText = document.createTextNode(variable)

	//username text variable and textnode
	var us = "username"
	var usText = document.createTextNode(us)

	// = variable and textnode
	var equal = " = "
	var eqText = document.createTextNode(equal)

	//username value and create text from value
	var username = document.getElementById("username").value
	var userText = document.createTextNode(username)

	//written comment value and create text from value
	var comment = "//" + document.getElementById("commentBox").value
	var typeText = document.createTextNode(comment)



	//create Li elements for user, comment, and space
	var commentLiUser = document.createElement("li")//user li
	var commentLiComment = document.createElement("li")//comment li
	var space = document.createElement("li")//empty li

	//create p elements
	var user = document.createElement("p")//varText + usText + =text + username
	var textComment = document.createElement("p")//typeText
	var pVariable = document.createElement("p")//variable
	var pequal = document.createElement("p")//equal
	var pUsText = document.createElement("p")//us

	var objDiv = document.getElementById("main");
	

	

	if (username == "" || document.getElementById("commentBox").value == "") {
		return false
	}
	else {

	objDiv.scrollTop = objDiv.scrollHeight;

	//nameclasses
	textComment.className = "comment"
	pVariable.className = "em"
	pequal.className = "pequal"
	pUsText.className = "pUsText"
	

	//insert h1 and h2 inside of li
	commentLiUser.appendChild(user)
	commentLiComment.appendChild(textComment)
	user.appendChild(pVariable)
	user.appendChild(pUsText)
	

	//insert respective texts in h1 and h2 and p
	user.appendChild(pequal)
	user.appendChild(userText)
	textComment.appendChild(typeText)
	pVariable.appendChild(varText)
	pUsText.appendChild(usText)
	pequal.appendChild(eqText)
	


	//create variable "list" for ol
	document.getElementById("commentList").appendChild(commentLiUser)
	document.getElementById("commentList").appendChild(commentLiComment)
	document.getElementById("commentList").appendChild(space)

	//resets comment area
	document.getElementById("commentBox").value = ""


	


	
	}

}

//WHEN ENTER KEY IS PRESSED DOWN,
document.getElementById("comment").onkeydown = function(e){
	if(e.keyCode == 13) {
		//prevent refresh when enter key is pressed
		e.preventDefault();
		//run function commentlist() above
		commentList();

	}
};











