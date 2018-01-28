
/**
 * Dialog - Open a new dialog with the content depending of the position
 *
 * @param  {GameController} gameController the GameController instance
 * @param  {number} x              				 the x = numRow
 * @param  {number} y              				 the y = numColumn
 */
function Dialog(gameController, x, y) {
	this.gc = gameController;
	this.x = x;
	this.y = y;

	// Init the dialog html
	this.dialogElm = qs(".dialog").cloneNode();
	this.dialogElm.removeAttribute('hidden');
	this.dialogElm.style.top = (gc.factorY + gc.nbY*gc.width) + "px";
	this.dialogElm.style.left = (gc.factorX + 2*gc.width) + "px";

	this.dialogElm.textContent = this.textContent();

	qs("main").appendChild(this.dialogElm);

}


/**
 * Dialog.prototype.textContent - get the content to display depending of the position
 *
 * @return {string}  the content to display
 */
Dialog.prototype.textContent = function(){
	var self = this;
	if(self.gc.getIndexValue(self.x, self.y) == "t"){
		return "C'est un bien bel arbre ❤️";
	} else if (self.gc.getIndexValue(self.x, self.y) == "i") {
		var iframeTodo = document.createElement("iframe");
		iframeTodo.setAttribute("src","./plugins/todo-list/index.html");
		document.body.addEventListener('click', function(e) { // move
			iframeTodo.remove();
			self.remove();
		});
		qs("main").appendChild(iframeTodo);
		return "Une belle todo list !!";
	} else if (self.gc.getIndexValue(self.x, self.y) == "n") {
		var iframeNotes = document.createElement("iframe");
		iframeNotes.setAttribute("src","./plugins/static-laverna/index.html");
		document.body.addEventListener('click', function(e) { // move
			iframeNotes.remove();
			self.remove();
		});
		qs("main").appendChild(iframeNotes);
		return "Mes notes privées 😈";
	} else if (self.gc.getIndexValue(self.x, self.y) == "m") {
		return "Money money 😊💰";
	} else if (self.gc.getIndexValue(self.x, self.y) == "c") {
		window.open("https://calendar.google.com/calendar/", "_self");
		return "Google Calendar opened";
	}

}

/**
 * Dialog.prototype.remove - remove the dialog from the DOM
 *
 */
Dialog.prototype.remove = function(){
	this.dialogElm.remove();
}
