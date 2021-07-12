if (window.innerWidth > 1024) {
    $(document).ready(function () {
        (function () {
            window.a = document.querySelector('.sidebar__wrap');
            console.log(window.a);
            window.b = null;
            window.P = 15; // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
            window.ascroll = function () {

                if (window.b == null) {
                    console.log('b == null');
                    var Sa = getComputedStyle(window.a, ''),
                        s = '';
                    for (var i = 0; i < Sa.length; i++) {
                        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                            s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                        }
                    }
                    window.b = document.createElement('div');
                    window.b.style.cssText = s + ' box-sizing: border-box; width: ' + window.a.offsetWidth + 'px;';
                    window.a.insertBefore(window.b, window.a.firstChild);
                    var l = window.a.childNodes.length;
                    for (var i = 1; i < l; i++) {
                        window.b.appendChild(a.childNodes[1]);
                    }
                    window.a.style.height = window.b.getBoundingClientRect().height + 'px';
                    window.a.style.padding = '0';
                    window.a.style.border = '0';
                }

                var Ra = window.a.getBoundingClientRect(),
                    R = Math.round(Ra.top + window.b.getBoundingClientRect().height - document.querySelector('.business').getBoundingClientRect().top + 100); // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
                if ((Ra.top - 72 - window.P) <= 0) {
                    if ((Ra.top - 72 - window.P) <= R) {
                        window.b.className = 'sidebar--stop';
                        window.b.style.top = -R + 'px';
                    } else {
                        window.b.className = 'sidebar--sticky';
                        window.b.style.top = window.P + 'px';
                    }
                } else {
                    window.b.className = '';
                    window.b.style.top = '';
                }
                window.addEventListener('resize', function () {
                    window.a.children[0].style.width = getComputedStyle(window.a, '').width
                }, false);
            }

            window.addEventListener('scroll', window.ascroll, false);


        })()

    });
}