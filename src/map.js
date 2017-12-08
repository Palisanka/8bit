
/**
 * map - Object map
 *
 * @param  {type} nbX description
 * @param  {type} nbY description
 */
function Map(nbX, nbY) {
    this.nbX = nbX;
    this.nbY = nbY;
		this.worldElm = qs('.world');
		this.factorX = this.worldElm.getBoundingClientRect().left;
		this.factorY = this.worldElm.getBoundingClientRect().top;

		console.log(this.factorX);

}


/**
 * Init the map
 *
 * @return {type}  description
 */
Map.prototype.init = function(){

	var self = this;

	for (var i = 0; i < this.nbX; i++) {
		for (var j = 0; j < this.nbY; j++) {

			if ( j == 2 && i == 8  ) { // si random est égal à 1 et que le perso1 n'est pas encore sur la map
				console.log(qs('main'));
				var str = "<img src='./assets/user0.png' class='user' id='user' style='left:" + (self.factorX + (96 * i)) + "px; top:" + (self.factorY + (96 * j)) + "px'>"
				qs('main').innerHTML += str;
				// $carte.append("<div class='casevideClass'></div>");
				// this.perso1_sur_la_map = true;
				// tab_position.push(3); // id du perso1
				// perso1 = $("#perso1");
			} else { // pour tout autre valeur de random on insert systématiquement une case vide
					qs('main').innerHTML += "<div class='empty test' style='left:" + (self.factorX + (96 * i)) + "px; top:" + (self.factorY + (96 * j)) + "px'></div>";
					// tab_position.push(0); // id de la case vide
			}
			//console.log("case" + " " + i + j);
		}
	}
}
