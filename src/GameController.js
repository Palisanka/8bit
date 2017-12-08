
function GameController(width, nbX, nbY){
	this.width = width;
	this.worldElm = qs('.world');
	this.factorX = this.worldElm.getBoundingClientRect().left - this.width;
	this.factorY = this.worldElm.getBoundingClientRect().top - this.width;
	this.nbX = 12;
	this.nbY = 8;
	this.indexTab = [
		1,1,1,1,1,0,0,1,1,1,1,1,
		1,1,1,1,1,0,0,1,1,1,1,1,
		1,1,1,1,1,0,0,1,"X",0,1,1, // 9 | 3 -> 33
		1,0,0,1,1,0,0,1,0,1,1,1,
		1,0,0,1,1,0,0,1,0,1,1,1,
		0,0,0,0,0,0,0,0,0,0,1,1,
		0,0,0,0,0,0,0,0,1,1,1,1,
		0,0,0,0,0,0,0,0,1,1,1,1,
	];
}

GameController.prototype.getIndex = function ( numRow, numColumn ) {
	return ( (this.nbX)*(numColumn-1) + numRow);
}

GameController.prototype.getIndexValue = function ( numRow, numColumn ) {
    return this.indexTab[this.getIndex(numRow, numColumn) - 1];
}

GameController.prototype.getNumCol = function ( index ) {

}
