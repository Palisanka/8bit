/**
 * qs - Return dom element(s) by CSS selector
 *
 * @param  {selector} selector 	 like '#id'
 * @param  {DOMelement} scope    like 'document.body'
 * @return {DOMelement}          the matched DOMelement
 */
window.qs = function (selector, scope) {
	return (scope || document).querySelector(selector);
};

/**
 * qsa - Return all dom element(s) by CSS selector
 *
 * @param  {selector} selector 	 like '.class'
 * @param  {DOMelement} scope    like 'document.body'
 * @return {[DOMelement]}        an array of matched DOMelement
 */
window.qsa = function (selector, scope) {
	return (scope || document).querySelectorAll(selector);
};
