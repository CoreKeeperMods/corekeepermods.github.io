/*
* Edited docsify-dark-switcher
* https://github.com/w3teal/docsify-dark-switcher
* */

function docsifyDarkSwitcher() {
    var element = document.querySelector('body');
    var btn = document.querySelector('button.docsify-dark-switcher');
    element.classList.toggle("docsify-dark-mode");
    
    if (element.classList.contains("docsify-dark-mode")) {
        localStorage.setItem('docsify-dark-mode', 'true');
        btn.title = "Toggle light mode";
        btn.ariaLabel = "Toggle light mode";
    } else {
        localStorage.removeItem('docsify-dark-mode');
        btn.title = "Toggle dark mode";
        btn.ariaLabel = "Toggle dark mode";
    }
}

function applyInitialMode() {
    var element = document.querySelector('body');
    var btn = document.querySelector('button.docsify-dark-switcher');
    if (localStorage.getItem('docsify-dark-mode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
        element.classList.add("docsify-dark-mode");
        btn.title = "Toggle light mode";
        btn.ariaLabel = "Toggle light mode";
    } else {
        btn.title = "Toggle dark mode";
        btn.ariaLabel = "Toggle dark mode";
    }
}

var install = function (hook, vm) {
    hook.mounted(function() {
        var themeSwitcherBtn = document.createElement('button');
        themeSwitcherBtn.id = "docsify-dark-switcher";
        themeSwitcherBtn.className = 'docsify-dark-switcher';
        themeSwitcherBtn.onclick = docsifyDarkSwitcher;
        var main = document.querySelector('.sidebar');
        main.insertBefore(themeSwitcherBtn, main.firstChild);
        applyInitialMode();
    });
}

$docsify.plugins = [].concat(install, $docsify.plugins);
