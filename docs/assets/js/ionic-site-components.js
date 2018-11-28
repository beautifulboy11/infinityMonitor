/*!
 * Built with http://stenciljs.com
 * 2018-10-09T22:52:34
 */
!function(e, t, n, i, o, r, s, c, a, l, u, d, p, m) {
    for ((u = e[n] = e[n] || {}).components = a,
    (p = a.filter(function(e) {
        return e[2]
    }).map(function(e) {
        return e[0]
    })).length && ((d = t.createElement("style")).innerHTML = p.join() + "{visibility:hidden}.hydrated{visibility:inherit}",
    d.setAttribute("data-styles", ""),
    t.head.insertBefore(d, t.head.firstChild)),
    function(e, t, n) {
        (e["s-apps"] = e["s-apps"] || []).push("IonicSiteComponents"),
        n.componentOnReady || (n.componentOnReady = function() {
            var t = this;
            function n(n) {
                if (t.nodeName.indexOf("-") > 0) {
                    for (var i = e["s-apps"], o = 0, r = 0; r < i.length; r++)
                        if (e[i[r]].componentOnReady) {
                            if (e[i[r]].componentOnReady(t, n))
                                return;
                            o++
                        }
                    if (o < i.length)
                        return void (e["s-cr"] = e["s-cr"] || []).push([t, n])
                }
                n(null)
            }
            return e.Promise ? new e.Promise(n) : {
                then: n
            }
        }
        )
    }(e, 0, l),
    o = o || u.resourcesUrl,
    d = (p = t.querySelectorAll("script")).length - 1; d >= 0 && !(m = p[d]).src && !m.hasAttribute("data-resources-url"); d--)
        ;
    p = m.getAttribute("data-resources-url"),
    !o && p && (o = p),
    !o && m.src && (o = (p = m.src.split("/").slice(0, -1)).join("/") + (p.length ? "/" : "") + "/"),
    d = t.createElement("script"),
    function(e, t, n, i) {
        return !(t.search.indexOf("core=esm") > 0) && (!(!(t.search.indexOf("core=es5") > 0 || "file:" === t.protocol) && e.customElements && e.customElements.define && e.fetch && e.CSS && e.CSS.supports && e.CSS.supports("color", "var(--c)") && "noModule"in n) || function(e) {
            try {
                return new Function('import("")'),
                !1
            } catch (e) {}
            return !0
        }())
    }(e, e.location, d) ? d.src = o + "ionic-site-components.l95dtovp.js" : (d.src = o + "ionic-site-components.dkndf4dd.js",
    d.setAttribute("type", "module"),
    d.setAttribute("crossorigin", !0)),
    d.setAttribute("data-resources-url", o),
    d.setAttribute("data-namespace", "ionic-site-components"),
    t.head.appendChild(d)
}(window, document, "IonicSiteComponents", 0, 0, 0, 0, 0, [["icon-external", "9l6b9pzb", 1], ["ion-icon", "2bl18lom", 1, [["ariaLabel", 2, 0, "aria-label", 2], ["color", 1, 0, 1, 2], ["doc", 3, 0, 0, 0, "document"], ["el", 7], ["icon", 1, 0, 1, 2], ["ios", 1, 0, 1, 2], ["isServer", 3, 0, 0, 0, "isServer"], ["isVisible", 5], ["lazy", 1, 0, 1, 3], ["md", 1, 0, 1, 2], ["mode", 1, 0, 1, 2], ["name", 1, 0, 1, 2], ["resourcesUrl", 3, 0, 0, 0, "resourcesUrl"], ["size", 1, 0, 1, 2], ["src", 1, 0, 1, 2], ["svgContent", 5], ["win", 3, 0, 0, 0, "window"]], 1], ["ionic-button", "gfhvucn0", 1, [["color", 1, 0, 1, 2], ["disabled", 1, 0, 1, 3], ["type", 1, 0, 1, 2]]], ["ionic-newsletter-signup", "gfhvucn0", 1, [["arrowMode", 1, 0, "arrow-mode", 3], ["buttonText", 1, 0, "button-text", 2], ["darkMode", 1, 0, "dark-mode", 3], ["email", 5], ["hasSubmitted", 5], ["isLoading", 5], ["lg", 1, 0, 1, 3], ["placeholder", 1, 0, 1, 2]]], ["ionic-search", "9d8r7ed9", 1, [["active", 5], ["dragStyles", 5], ["el", 7], ["mobile", 1, 0, 1, 3], ["pending", 5], ["query", 5], ["results", 5]]], ["ionic-snap-bar", "yfzb1piu", 1, [["active", 5]]]], HTMLElement.prototype);
