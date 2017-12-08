/**
 * Block - init a html block (the quick and dirty way)
 *
 * @param  {type} gameController the GameController instance
 * @param  {type} index          the index of the block
 * @param  {type} type           the type of the frame (0 = reachable, 1 = locked)
 * @param  {type} i              the x
 * @param  {type} j              the y
 */
function Block(gameController, index, type, i,j) {
	this.gc = gameController;
	this.type = type;
	this.x = i;
	this.y = j;
	qs('main').innerHTML += "<div class='empty' style='left:" + (this.gc.factorX + this.gc.width*this.x) + "px; top:" + (this.gc.factorY + this.gc.width*this.y) + "px'></div>";
}
