// https://tools.ietf.org/html/rfc4180

Prism.languages.csv = {
    'punctuation': /\s{4}/,
    'value': /[\s]{4}|[^\r\n"]+|"(?:[^"]|"")*"(?!")/,
};

const csvColors = ['#FFA000', '#D32F2F', '#CE93D8', '#00897B', '#BCAAA4', '#8BC34A', '#80D8FF', '#E6EE9C', '#CFD8DC', '#B388FF'];

var fixcsv = function (hook) {
    hook.doneEach(function () {
        let csvCode = document.querySelectorAll('pre[data-lang="csv"]');
        csvCode.forEach(function (code) {
            let elements = code.getElementsByClassName('token value');
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.color = csvColors[i % csvColors.length];
            }
            elements = code.getElementsByClassName('token punctuation');
            for (let i = 0; i < elements.length; i++) {
                elements[i].innerHTML = "&#9;";
            }
        })
    });
};

$docsify = $docsify || {};
$docsify.plugins = [fixcsv, ...($docsify.plugins || [])];

