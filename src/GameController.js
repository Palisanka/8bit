/**
 * GameController - The Game Controller
 *
 * @param  {number} width the width in PX of a frame
 * @param  {number} nbX   the number of X frame
 * @param  {number} nbY   the number of Y frame
 */
function GameController(place){
	this.width = 96;

	if(place == "world"){
		this.worldElm = qs('.world');
		this.worldElm.removeAttribute("hidden");
		qs('.home').setAttribute("hidden",true);
		this.nbX = 12;
		this.nbY = 8;
		this.dialog = null;
		this.tabPosition = [
			1 , 1 , 1 , 1 , 1 , 0 , 0 , 1 , 10, 1 , 1 , 1 ,
			1 ,"t", 1 , 1 , 1 , 0 , 0 , 1 , 0 , 0 , 0 , 1 ,
			1 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ,"X", 0 , 0 , 0 ,
			1 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 0 ,"i", 1 , 1 ,
			0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ,
			0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ,
			0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 1 , 0 , 1 ,
			0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 1 , 0 , 1 ,
		];
	} else if (place == "home") {
		this.worldElm = qs('.home');
		this.worldElm.removeAttribute("hidden");
		qs('.world').setAttribute("hidden",true);
		this.nbX = 7;
		this.nbY = 5;
		this.dialog = null;
		this.tabPosition = [
			1 , 1 ,"m", "n" ,"c", 1 , 1 ,
			1 , 0 , 0 , 0 , 0 , 0 , 0 ,
			1 , 0 , 0 , 0 , 0 , 0 , 0 ,
			0 , 0 , 0 , 0 , 0 , 0 , 1 ,
			1 , 1 , 1 , 1 ,"X", 1 , 1 ,
			1 , 1 , 1 , 1 , 11, 1 , 1 ,
		];
	}

	this.factorX = this.worldElm.getBoundingClientRect().left - this.width;
	this.factorY = this.worldElm.getBoundingClientRect().top - this.width;

}


/**
 * GameController.prototype.init - init the map depending on tabPosition
 * add all the html frames
 *
 */
GameController.prototype.init = function(){

	var self = this;

	qsa(".empty").forEach(function(e){
		e.remove();
	});

	for (var y = 1; y < self.nbY+1; y++) {
		for (var x = 1; x < self.nbX+1; x++) {

			if ( self.getIndexValue(x,y) == "X" ) { // add user
				new Block(self, self.getIndex(x,y), 0, x, y);
				self.user = new User(self, self.getIndex(x,y), x, y);
			} else if ( self.getIndexValue(x,y) == 0 ) { // add freeBlock
				new Block(self, self.getIndex(x,y), 0, x, y);
			} else if ( self.getIndexValue(x,y) == 1 ) { // add locked Block
				new Block(self, self.getIndex(x,y), 1, x, y);
			}
		}
	}
}

/**
 * GameController.prototype.getIndex - return the index of a set of (x = numColumn and y = numRow) depending on nbX the number of x frame
 *
 * @param  {number} numRow    the number of Y
 * @param  {number} numColumn the number of X
 * @return {number}           the index
 */
GameController.prototype.getIndex = function ( numRow, numColumn ) {
	return ( (this.nbX)*(numColumn-1) + numRow);
}


/**
 * GameController.prototype.getIndexValue - return the value in tabPosition of a set of (x = numColumn and y = numRow)
 *
 * @param  {number} numRow    the number of Y
 * @param  {number} numColumn the number of X
 * @return {type}           the value of tabPosition[index]
 */
GameController.prototype.getIndexValue = function ( numRow, numColumn ) {
  return this.tabPosition[this.getIndex(numRow, numColumn) - 1];
}

/**
 * GameController.prototype.setIndexValue - set the value in tabPosition of a set of (x = numColumn and y = numRow)
 *
 * @param  {number} numRow    the number of Y
 * @param  {number} numColumn the number of X
 * @param  {type} value 			the new value of tabPosition[index]
 */
GameController.prototype.setIndexValue = function ( numRow, numColumn, value ) {
    this.tabPosition[this.getIndex(numRow, numColumn) - 1] = value;
}
