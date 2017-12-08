
function User(gameController, index, i, j) {
	this.gc = gameController;
	this.index = index;
	this.x = i;
	this.y = j;

	this.domElm = qs('#user').cloneNode();
	qs('#user').remove();
	this.domElm.removeAttribute('hidden');
	this.domElm.style.top = this.gc.factorY + (96 * j)+"px";
	this.domElm.style.left = this.gc.factorX + (96 * i)+"px";


	// keybindings
	var self = this;
	document.body.addEventListener('keydown', function(e) {
		if(e.key == "ArrowDown" || e.key == "ArrowUp" || e.key == "ArrowLeft" || e.key == "ArrowRight" ){
			self.move(e.key);
		}
	});

	qs('main').appendChild(this.domElm);

}

// TODO : add verification if we can move on the next block
User.prototype.move = function(mvt){

	var self = this;

	var elm = qs('#user');

	// console.log(self.gc.getIndexValue(self.x, self.y));

	if(mvt == "ArrowDown"){ // && self.gc.getIndexValue(self.x, self.y) != 1
		elm.style.top = Number(elm.style.top.replace("px","") ) + 96 + "px";
		self.y--;
	} else if(mvt == "ArrowUp"){
		elm.style.top = Number(elm.style.top.replace("px","") ) - 96 + "px";
		self.y++;
	} else if(mvt == "ArrowLeft"){
		elm.style.left = Number(elm.style.left.replace("px","") ) - 96 + "px";
		self.x--;
	} else if(mvt == "ArrowRight"){
		elm.style.left = Number(elm.style.left.replace("px","") ) + 96 + "px";
		self.x++;
	}

}
