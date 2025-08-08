/*
 * Custom Plugin by me
 * 
 * Fixes tips and warns to center-align the icon when the tip/warn has more than 1 line.
 * They are currently aligned towards the top.
 */

fixTips = function() {
    var tips = document.querySelectorAll('p.tip, p.warn');
    tips.forEach(tip => {
        let newTip = document.createElement('span');
        newTip.innerHTML = tip.innerHTML;
        tip.replaceChildren(newTip);
    })
}

var fixTipsPlugin = function (hook, vm) {
    hook.doneEach(function () {
        fixTips();
    });
};

$docsify = $docsify || {};
$docsify.plugins = [fixTipsPlugin, ...($docsify.plugins || [])];