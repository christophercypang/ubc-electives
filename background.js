chrome.contextMenus.create({

	title: "UBC EZ Electives",
	contexts: ["selection"],
	onclick: saveText

});


function saveText() {
	alert("you just clicked me");
}