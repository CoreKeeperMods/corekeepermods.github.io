/*
 * Custom Plugin by me
 * 
 * Sets up headers that are links to make a fa-link icon that becomes the link instead of the header.
 * The header would then act as normal as an internal link.
 */

var CONFIG = {class: 'fa fa-link-fa-2xs'};

addFALink = function() {
    let linkList = document.querySelectorAll(
        'h1 > a:not([class])[target="_blank"]' +
        ',h2 > a:not([class])[target="_blank"]' +
        ',h3 > a:not([class])[target="_blank"]' +
        ',h4 > a:not([class])[target="_blank"]' +
        ',h5 > a:not([class])[target="_blank"]' +
        ',h6 > a:not([class])[target="_blank"]');
    linkList.forEach(link => {
        let parent = link.parentElement;
        parent.firstChild.firstChild.textContent = parent.textContent;
        let el = document.createElement('i');
        el.className = CONFIG.class;
        let newAnchor = link;
        newAnchor.textContent = "";
        parent.insertBefore(newAnchor, parent.firstChild);
        newAnchor.appendChild(el);
    })
}

var linkedHeadersPlugin = function (hook, vm) {
    let opts = vm.config.linkHeaders || CONFIG;
    CONFIG.class = opts.class && typeof opts.class === 'string' ? opts.class : CONFIG.class;
    hook.doneEach(function () {
        addFALink();
    });
};

$docsify = $docsify || {};
$docsify.plugins = [].concat(linkedHeadersPlugin, $docsify.plugins || []);