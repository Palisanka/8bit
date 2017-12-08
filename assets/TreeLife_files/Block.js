function Block(gameController, index, type, i,j) {
	this.gc = gameController;
	this.type = type;
	this.x = i;
	this.y = j;
	// TODO : type manager
	qs('main').innerHTML += "<div class='empty' style='left:" + (this.gc.factorX + 96*this.x) + "px; top:" + (this.gc.factorY + 96*this.y) + "px'></div>";
}

Block.prototype.getType = function(){
	return this.type;
}
