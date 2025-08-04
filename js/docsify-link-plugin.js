addFALink = function() {
    var linkList = document.querySelectorAll('a:not([class])[target="_blank"]');
    linkList.forEach(link => {
        var tagNames = ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9"];
        var parent = link.parentElement;
        var text = parent.textContent;
        if(tagNames.some(tag => parent.tagName === tag)) {
            parent.firstChild.firstChild.textContent = text;
        }
        var el = document.createElement('i');
        el.className = 'fa fa-link fa-2xs';
        
        if(tagNames.some(tag => parent.tagName === tag)) {
            var newAnchor = link;
            newAnchor.textContent = "";
            parent.insertBefore(newAnchor, parent.firstChild);
            newAnchor.appendChild(el);
        } else {
            link.insertBefore(el, link.firstChild);
        }
        
    })
}

var install = function (hook, vm) {
    hook.doneEach(function() {
        addFALink();
    });
}

$docsify.plugins = [].concat(install, $docsify.plugins);