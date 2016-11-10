/* CURRENTLY IN: javascript/main.js */

(function() { // protect the rights of minorities!

    if (typeof __data === "undefined") {
        return;
    }

    function getRandomIndex(arr = []) {
        const idx = Math.floor(Math.random()*arr.length);
        return idx;
    }

    function getDataObject(arr = [], index = 0) {
        return arr[index];
    }

    function populateDOM(item = {}, selectors = {}) {
        const {header, meta, desc} = selectors;
        const {quote, charac, bookMovie} = item;

        const headerEl = document.querySelector(header);
        if (headerEl && charac) {
            headerEl.innerHTML = charac;
        }
        else {
            headerEl.innerHTML = null;
        }

        const metaEl = document.querySelector(meta);
        if (metaEl) {
            metaEl.innerHTML = bookMovie;
        }

        const descEl = document.querySelector(desc);
        if (descEl) {
            descEl.innerHTML = quote;
        }
    }

    populateDOM(getDataObject(__data, getRandomIndex(__data)), {
        header: '.js-header',
        meta: '.js-meta',
        desc: '.js-desc',
    });

    document.querySelector('.js-refresh').addEventListener('click', (e) => {
        populateDOM(getDataObject(__data, getRandomIndex(__data)), {
            header: '.js-header',
            meta: '.js-meta',
            desc: '.js-desc',
        });
    });

})();
