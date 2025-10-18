// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="overview.html"><strong aria-hidden="true">1.</strong> Overview</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="overview/embedding-resources.html"><strong aria-hidden="true">1.1.</strong> Embedding resources</a></li><li class="chapter-item "><a href="overview/relation.html"><strong aria-hidden="true">1.2.</strong> Relation to other technologies</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="overview/relation/mxml.html"><strong aria-hidden="true">1.2.1.</strong> MXML</a></li><li class="chapter-item "><a href="overview/relation/reactjs.html"><strong aria-hidden="true">1.2.2.</strong> React.js</a></li><li class="chapter-item "><a href="overview/relation/as3.html"><strong aria-hidden="true">1.2.3.</strong> ActionScript 3</a></li><li class="chapter-item "><a href="overview/relation/javascript.html"><strong aria-hidden="true">1.2.4.</strong> JavaScript</a></li><li class="chapter-item "><a href="overview/relation/java.html"><strong aria-hidden="true">1.2.5.</strong> Java</a></li></ol></li><li class="chapter-item "><a href="overview/xml-capabilities.html"><strong aria-hidden="true">1.3.</strong> XML capabilities</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="overview/xml-capabilities/whack.html"><strong aria-hidden="true">1.3.1.</strong> Whack</a></li></ol></li><li class="chapter-item "><a href="overview/whackds.html"><strong aria-hidden="true">1.4.</strong> WhackDS</a></li><li class="chapter-item "><a href="overview/tooling.html"><strong aria-hidden="true">1.5.</strong> Tooling</a></li><li class="chapter-item "><a href="overview/access-control.html"><strong aria-hidden="true">1.6.</strong> Access control namespaces</a></li><li class="chapter-item "><a href="overview/metadata.html"><strong aria-hidden="true">1.7.</strong> Meta-data</a></li><li class="chapter-item "><a href="overview/generics.html"><strong aria-hidden="true">1.8.</strong> Generics</a></li><li class="chapter-item "><a href="overview/event-model.html"><strong aria-hidden="true">1.9.</strong> Event model</a></li><li class="chapter-item "><a href="overview/conditional-compilation.html"><strong aria-hidden="true">1.10.</strong> Conditional compilation</a></li><li class="chapter-item "><a href="overview/clonage.html"><strong aria-hidden="true">1.11.</strong> Clonage</a></li><li class="chapter-item "><a href="overview/iteration.html"><strong aria-hidden="true">1.12.</strong> Iteration capabilities</a></li><li class="chapter-item "><a href="overview/env.html"><strong aria-hidden="true">1.13.</strong> Environment variables</a></li><li class="chapter-item "><a href="overview/type-matching.html"><strong aria-hidden="true">1.14.</strong> Type matching</a></li></ol></li><li class="chapter-item "><a href="scope.html"><strong aria-hidden="true">2.</strong> Scope</a></li><li class="chapter-item "><a href="definitions.html"><strong aria-hidden="true">3.</strong> Definitions</a></li><li class="chapter-item "><a href="notational-conventions.html"><strong aria-hidden="true">4.</strong> Notational conventions</a></li><li class="chapter-item "><a href="types.html"><strong aria-hidden="true">5.</strong> Types</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="types/wildcard.html"><strong aria-hidden="true">5.1.</strong> Wildcard</a></li><li class="chapter-item "><a href="types/void.html"><strong aria-hidden="true">5.2.</strong> void</a></li><li class="chapter-item "><a href="types/null.html"><strong aria-hidden="true">5.3.</strong> null</a></li><li class="chapter-item "><a href="types/string.html"><strong aria-hidden="true">5.4.</strong> String</a></li><li class="chapter-item "><a href="types/boolean.html"><strong aria-hidden="true">5.5.</strong> Boolean</a></li><li class="chapter-item "><a href="types/number.html"><strong aria-hidden="true">5.6.</strong> Number</a></li><li class="chapter-item "><a href="types/bigint.html"><strong aria-hidden="true">5.7.</strong> BigInt</a></li><li class="chapter-item "><a href="types/float.html"><strong aria-hidden="true">5.8.</strong> float</a></li><li class="chapter-item "><a href="types/decimal.html"><strong aria-hidden="true">5.9.</strong> decimal</a></li><li class="chapter-item "><a href="types/int.html"><strong aria-hidden="true">5.10.</strong> int</a></li><li class="chapter-item "><a href="types/uint.html"><strong aria-hidden="true">5.11.</strong> uint</a></li><li class="chapter-item "><a href="types/array.html"><strong aria-hidden="true">5.12.</strong> Array</a></li><li class="chapter-item "><a href="types/map.html"><strong aria-hidden="true">5.13.</strong> Map</a></li><li class="chapter-item "><a href="types/tuple.html"><strong aria-hidden="true">5.14.</strong> Tuple</a></li><li class="chapter-item "><a href="types/structural-function.html"><strong aria-hidden="true">5.15.</strong> Structural function</a></li><li class="chapter-item "><a href="types/record.html"><strong aria-hidden="true">5.16.</strong> Record</a></li><li class="chapter-item "><a href="types/union.html"><strong aria-hidden="true">5.17.</strong> Union</a></li><li class="chapter-item "><a href="types/object.html"><strong aria-hidden="true">5.18.</strong> Object</a></li><li class="chapter-item "><a href="types/this.html"><strong aria-hidden="true">5.19.</strong> This</a></li></ol></li><li class="chapter-item "><a href="conversions.html"><strong aria-hidden="true">6.</strong> Conversions</a></li><li class="chapter-item "><a href="property-lookup.html"><strong aria-hidden="true">7.</strong> Property lookup</a></li><li class="chapter-item "><a href="packages.html"><strong aria-hidden="true">8.</strong> Packages</a></li><li class="chapter-item "><a href="namespaces.html"><strong aria-hidden="true">9.</strong> Namespaces</a></li><li class="chapter-item "><a href="classes.html"><strong aria-hidden="true">10.</strong> Classes</a></li><li class="chapter-item "><a href="enums.html"><strong aria-hidden="true">11.</strong> Enumerations</a></li><li class="chapter-item "><a href="interfaces.html"><strong aria-hidden="true">12.</strong> Interfaces</a></li><li class="chapter-item "><a href="variables.html"><strong aria-hidden="true">13.</strong> Variables</a></li><li class="chapter-item "><a href="virtual-variables.html"><strong aria-hidden="true">14.</strong> Virtual variables</a></li><li class="chapter-item "><a href="methods.html"><strong aria-hidden="true">15.</strong> Methods</a></li><li class="chapter-item "><a href="aliases.html"><strong aria-hidden="true">16.</strong> Aliases</a></li><li class="chapter-item "><a href="lexical-scopes.html"><strong aria-hidden="true">17.</strong> Lexical scopes</a></li><li class="chapter-item "><a href="default-lexical-scope.html"><strong aria-hidden="true">18.</strong> Default lexical scope</a></li><li class="chapter-item "><a href="conditional-compilation.html"><strong aria-hidden="true">19.</strong> Conditional compilation</a></li><li class="chapter-item "><a href="sxdoc.html"><strong aria-hidden="true">20.</strong> SXDoc</a></li><li class="chapter-item "><a href="proxies.html"><strong aria-hidden="true">21.</strong> Proxies</a></li><li class="chapter-item "><a href="lexical-conventions.html"><strong aria-hidden="true">22.</strong> Lexical conventions</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
