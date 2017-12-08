

/**
 * qs - Get element(s) by CSS selector
 *
 * @param  {selector} selector 	 like '#id'
 * @param  {DOMelement} scope    like 'document.body'
 * @return {DOMelement}          the matched DOMelement
 */
window.qs = function (selector, scope) {
	return (scope || document).querySelector(selector);
};
