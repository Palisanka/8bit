/**
 * User - instanciate a user at a given index
 *
 * @param  {GameController} gameController the GameController instance
 * @param  {number} index          the index of the user
 * @param  {number} x              the x = numRow
 * @param  {number} y              the y = numColumn
 */
function User(gameController, index, x, y) {
	this.gc = gameController;
	this.index = index;
	this.x = x;
	this.y = y;

	this.domElm = qs('#user').cloneNode();
	qs('#user').remove();
	this.domElm.removeAttribute('hidden');
	this.domElm.style.top = this.gc.factorY + (96 * this.y)+"px";
	this.domElm.style.left = this.gc.factorX + (96 * this.x)+"px";


	// keybindings
	var self = this;
	document.body.addEventListener('keydown', function(e) {
		if(e.key == "ArrowDown" || e.key == "ArrowUp" || e.key == "ArrowLeft" || e.key == "ArrowRight" ){
			self.move(e.key);
		}
	});

	qs('main').appendChild(this.domElm);

}


/**
 * User.prototype.move - function to move the user
 *
 * @param  {String} mvt mouvement description like 'ArrowDown'
 */
User.prototype.move = function(mvt){

	var self = this;

	var elm = qs('#user');

	if(mvt == "ArrowDown"){
		elm.setAttribute("src","./assets/userBottom.png"); // set the image to look down
		var tmpY = self.y;
		tmpY++;
		if(self.gc.getIndexValue(self.x, tmpY) == 0){ // check with tmp var if the next position is reachable (set 0 in tabPosition)
			if(self.gc.getIndexValue(self.x, self.y) == "X") // check if it's the start position -> replace "X" with 0
				self.gc.setIndexValue(self.x, self.y, 0);
			elm.style.top = Number(elm.style.top.replace("px","") ) + 96 + "px"; // move the user
			self.y++; // update user position
		}
	} else if(mvt == "ArrowUp"){
		elm.setAttribute("src","./assets/userTop.png");
		var tmpY = self.y;
		tmpY--;
		if(self.gc.getIndexValue(self.x, tmpY) == 0){
			if(self.gc.getIndexValue(self.x, self.y) == "X")
				self.gc.setIndexValue(self.x, self.y, 0);
			elm.style.top = Number(elm.style.top.replace("px","") ) - 96 + "px";
			self.y--;
		}
	} else if(mvt == "ArrowLeft"){
		elm.setAttribute("src","./assets/userLeft.png");
		var tmpX = self.x;
		tmpX--;
		if(self.gc.getIndexValue(tmpX, self.y) == 0){
			if(self.gc.getIndexValue(self.x, self.y) == "X")
				self.gc.setIndexValue(self.x, self.y, 0);
			elm.style.left = Number(elm.style.left.replace("px","") ) - 96 + "px";
			self.x--;
		}
	} else if(mvt == "ArrowRight"){
		elm.setAttribute("src","./assets/userRight.png");
		var tmpX = self.x;
		tmpX++;
		if(self.gc.getIndexValue(tmpX, self.y) == 0){
			if(self.gc.getIndexValue(self.x, self.y) == "X")
				self.gc.setIndexValue(self.x, self.y, 0);
			elm.style.left = Number(elm.style.left.replace("px","") ) + 96 + "px";
			self.x++;
		}
	}

}
