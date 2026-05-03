// ==UserScript==
// @name         Blank
// @namespace    https://github.com/reemaouati
// @version      1.0
// @description  Opens links in a new background tab right next to your current one.
// @author       Reem Aouati
// @run-at       document-start
// @match        *://*/*
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';

    // Intercept clicks on the capture phase
    document.addEventListener('click', function(e) {
        // Locate anchor element
        const link = e.target.closest('a');

        // Filter for valid HTTP/S links only
        if (link && link.href && link.href.startsWith('http')) {
            e.preventDefault();
            e.stopImmediatePropagation();

            /**
             * GM_openInTab Options:
             * active: false   -> Ensures the tab stays in the background.
             * insert: true    -> Positions the new tab next to the current one.
             * setParent: true -> Links the new tab to the current one for navigation logic.
             */
            GM_openInTab(link.href, {
                active: false,
                insert: true,
                setParent: true
            });
        }
    }, true);
})();
