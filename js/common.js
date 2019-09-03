var inputForm = document.getElementById("user-data");
var editButton = document.getElementById("edit");
var cancelButton = document.getElementById("cancel");
editButton.onclick = function() {
    cancelButton.style.display = "block";
	inputForm.disabled = false;
	console.log('yes');
};

cancelButton.onclick = function() {
	inputForm.disabled = true;
	cancelButton.style.display = "none";
}





