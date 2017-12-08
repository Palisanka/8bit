
/**
 * map - Object map
 *
 * @param  {type} nbX description
 * @param  {type} nbY description
 */
function Map(gameController) {
	this.gc = gameController;
  this.nbX = gc.nbX;
  this.nbY = gc.nbY;
}


/**
 * Init the map
 *
 * @return {type}  description
 */
Map.prototype.init = function(){

	var self = this;

	for (var y = 1; y < self.nbY+1; y++) {
		for (var x = 1; x < self.nbX+1; x++) {

			if ( self.gc.getIndexValue(x,y) == "X" ) { // add user
				new Block(self.gc, self.gc.getIndex(x,y), 0, x, y);
				self.user = new User(self.gc, self.gc.getIndex(x,y), x, y);
			} else if ( self.gc.getIndexValue(x,y) == 0 ) { // add freeBlock
				new Block(self.gc, self.gc.getIndex(x,y), 0, x, y);
			} else if ( self.gc.getIndexValue(x,y) == 1 ) { // add locked Block
				new Block(self.gc, self.gc.getIndex(x,y), 1, x, y);
			}
		}
	}
}
