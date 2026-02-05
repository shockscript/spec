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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview.html"><strong aria-hidden="true">1.</strong> Overview</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/embed.html"><strong aria-hidden="true">1.1.</strong> Embed</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/language-comparison.html"><strong aria-hidden="true">1.2.</strong> Language comparison</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/language-comparison/reactjs.html"><strong aria-hidden="true">1.2.1.</strong> React.js</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/language-comparison/mxml.html"><strong aria-hidden="true">1.2.2.</strong> MXML</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/language-comparison/as3.html"><strong aria-hidden="true">1.2.3.</strong> ActionScript 3</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/language-comparison/javascript.html"><strong aria-hidden="true">1.2.4.</strong> JavaScript</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/language-comparison/java.html"><strong aria-hidden="true">1.2.5.</strong> Java</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/e4x.html"><strong aria-hidden="true">1.3.</strong> E4X</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/e4x/whack.html"><strong aria-hidden="true">1.3.1.</strong> E4X application to Whack</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/whack_ds.html"><strong aria-hidden="true">1.4.</strong> Whack DS</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/tooling.html"><strong aria-hidden="true">1.5.</strong> Tooling</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/namespaces.html"><strong aria-hidden="true">1.6.</strong> Namespaces</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/event-model.html"><strong aria-hidden="true">1.7.</strong> Event model</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/conditional-compilation.html"><strong aria-hidden="true">1.8.</strong> Conditional compilation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/iteration.html"><strong aria-hidden="true">1.9.</strong> Iteration</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/env.html"><strong aria-hidden="true">1.10.</strong> Environment variables</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/type-matching.html"><strong aria-hidden="true">1.11.</strong> Type matching</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="overview/namespace-methods.html"><strong aria-hidden="true">1.12.</strong> Namespace methods</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="scope.html"><strong aria-hidden="true">2.</strong> Scope</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="definitions.html"><strong aria-hidden="true">3.</strong> Definitions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="notational-conventions.html"><strong aria-hidden="true">4.</strong> Notational conventions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types.html"><strong aria-hidden="true">5.</strong> Types</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/wildcard.html"><strong aria-hidden="true">5.1.</strong> Wildcard type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/void.html"><strong aria-hidden="true">5.2.</strong> void type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/null.html"><strong aria-hidden="true">5.3.</strong> null type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/string.html"><strong aria-hidden="true">5.4.</strong> string type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/boolean.html"><strong aria-hidden="true">5.5.</strong> boolean type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/float.html"><strong aria-hidden="true">5.6.</strong> float type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/double.html"><strong aria-hidden="true">5.7.</strong> double type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/decimal.html"><strong aria-hidden="true">5.8.</strong> decimal type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/int.html"><strong aria-hidden="true">5.9.</strong> int type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/uint.html"><strong aria-hidden="true">5.10.</strong> uint type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/bigint.html"><strong aria-hidden="true">5.11.</strong> bigint type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/array.html"><strong aria-hidden="true">5.12.</strong> Array type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/map.html"><strong aria-hidden="true">5.13.</strong> Map type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/tuple.html"><strong aria-hidden="true">5.14.</strong> Tuple types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/function.html"><strong aria-hidden="true">5.15.</strong> Function types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/record.html"><strong aria-hidden="true">5.16.</strong> Record types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/union.html"><strong aria-hidden="true">5.17.</strong> Union types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/object.html"><strong aria-hidden="true">5.18.</strong> Object type</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="conversions.html"><strong aria-hidden="true">6.</strong> Conversions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="property-lookup.html"><strong aria-hidden="true">7.</strong> Property lookup</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="packages.html"><strong aria-hidden="true">8.</strong> Packages</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="namespaces.html"><strong aria-hidden="true">9.</strong> Namespaces</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="classes.html"><strong aria-hidden="true">10.</strong> Classes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="enums.html"><strong aria-hidden="true">11.</strong> Enumerations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="interfaces.html"><strong aria-hidden="true">12.</strong> Interfaces</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="remote-classes.html"><strong aria-hidden="true">13.</strong> Remote classes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="variables.html"><strong aria-hidden="true">14.</strong> Variables</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="virtual-variables.html"><strong aria-hidden="true">15.</strong> Virtual variables</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods.html"><strong aria-hidden="true">16.</strong> Methods</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aliases.html"><strong aria-hidden="true">17.</strong> Aliases</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="metadata.html"><strong aria-hidden="true">18.</strong> Meta-data</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics.html"><strong aria-hidden="true">19.</strong> Generics</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lexical-scopes.html"><strong aria-hidden="true">20.</strong> Lexical scopes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="implicit-lexical-scope.html"><strong aria-hidden="true">21.</strong> Implicit lexical scope</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="conditional-compilation.html"><strong aria-hidden="true">22.</strong> Conditional compilation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="implicit-configuration-constants.html"><strong aria-hidden="true">23.</strong> Implicit configuration constants</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unit-testing.html"><strong aria-hidden="true">24.</strong> Unit testing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="shockdoc.html"><strong aria-hidden="true">25.</strong> ShockDoc comments</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="meta-methods.html"><strong aria-hidden="true">26.</strong> Meta-methods</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lexical-conventions.html"><strong aria-hidden="true">27.</strong> Lexical conventions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions.html"><strong aria-hidden="true">28.</strong> ShockScript: Expressions</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/identifiers.html"><strong aria-hidden="true">28.1.</strong> Identifiers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions.html"><strong aria-hidden="true">28.2.</strong> Primary expressions</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/null-literal.html"><strong aria-hidden="true">28.2.1.</strong> Null literal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/this-literal.html"><strong aria-hidden="true">28.2.2.</strong> This literal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/all-literal.html"><strong aria-hidden="true">28.2.3.</strong> All literal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/boolean-literal.html"><strong aria-hidden="true">28.2.4.</strong> Boolean literal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/numeric-literal.html"><strong aria-hidden="true">28.2.5.</strong> Numeric literal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/string-literal.html"><strong aria-hidden="true">28.2.6.</strong> String literal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/regex-literal.html"><strong aria-hidden="true">28.2.7.</strong> Regular expression literal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/xml-literal.html"><strong aria-hidden="true">28.2.8.</strong> XML literal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/array-literal.html"><strong aria-hidden="true">28.2.9.</strong> Array literal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/object-literal.html"><strong aria-hidden="true">28.2.10.</strong> Object literal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/embed-expression.html"><strong aria-hidden="true">28.2.11.</strong> Embed expression</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/fixed-expression.html"><strong aria-hidden="true">28.2.12.</strong> Fixed expression</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/primary-expressions/paren-expressions.html"><strong aria-hidden="true">28.2.13.</strong> Parenthesized expressions</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/super-expression.html"><strong aria-hidden="true">28.3.</strong> Super expression</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/postfix-expressions.html"><strong aria-hidden="true">28.4.</strong> Postfix expressions</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/postfix-expressions/property-accessors.html"><strong aria-hidden="true">28.4.1.</strong> Property accessors</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/postfix-expressions/query-operators.html"><strong aria-hidden="true">28.4.2.</strong> Query operators</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/postfix-expressions/call-expressions.html"><strong aria-hidden="true">28.4.3.</strong> Call expressions</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/new-expressions.html"><strong aria-hidden="true">28.5.</strong> New expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/unary-expressions.html"><strong aria-hidden="true">28.6.</strong> Unary expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions.html"><strong aria-hidden="true">28.7.</strong> Binary expressions</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions/exponentiation-expressions.html"><strong aria-hidden="true">28.7.1.</strong> Exponentiation expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions/multiplicative-expressions.html"><strong aria-hidden="true">28.7.2.</strong> Multiplicative expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions/additive-expressions.html"><strong aria-hidden="true">28.7.3.</strong> Additive expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions/shift-expressions.html"><strong aria-hidden="true">28.7.4.</strong> Shift expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions/relational-expressions.html"><strong aria-hidden="true">28.7.5.</strong> Relational expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions/equality-expressions.html"><strong aria-hidden="true">28.7.6.</strong> Equality expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions/bitwise-expressions.html"><strong aria-hidden="true">28.7.7.</strong> Bitwise expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions/logical-expressions.html"><strong aria-hidden="true">28.7.8.</strong> Logical expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions/coalesce-expression.html"><strong aria-hidden="true">28.7.9.</strong> Coalesce expression</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/binary-expressions/short-circuit-expressions.html"><strong aria-hidden="true">28.7.10.</strong> Short circuit expressions</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/conditional-expressions.html"><strong aria-hidden="true">28.8.</strong> Conditional expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/non-assignment-expressions.html"><strong aria-hidden="true">28.9.</strong> Non assignment expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/assignment-expressions.html"><strong aria-hidden="true">28.10.</strong> Assignment expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/function-expression.html"><strong aria-hidden="true">28.11.</strong> Function expression</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-expressions/list-expressions.html"><strong aria-hidden="true">28.12.</strong> List expressions</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-type-expressions.html"><strong aria-hidden="true">29.</strong> ShockScript: Type expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-patterns.html"><strong aria-hidden="true">30.</strong> ShockScript: Patterns</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-patterns/array-pattern.html"><strong aria-hidden="true">30.1.</strong> Array pattern</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-patterns/object-pattern.html"><strong aria-hidden="true">30.2.</strong> Object pattern</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements.html"><strong aria-hidden="true">31.</strong> ShockScript: Statements</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/empty-statement.html"><strong aria-hidden="true">31.1.</strong> Empty statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/expression-statement.html"><strong aria-hidden="true">31.2.</strong> Expression statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/dxns-statement.html"><strong aria-hidden="true">31.3.</strong> Default XML namespace statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/super-statement.html"><strong aria-hidden="true">31.4.</strong> Super statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/block-statement.html"><strong aria-hidden="true">31.5.</strong> Block statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/labeled-statement.html"><strong aria-hidden="true">31.6.</strong> Labeled statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/if-statement.html"><strong aria-hidden="true">31.7.</strong> If statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/switch-statements.html"><strong aria-hidden="true">31.8.</strong> Switch statements</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/do-statement.html"><strong aria-hidden="true">31.9.</strong> Do statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/while-statement.html"><strong aria-hidden="true">31.10.</strong> While statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/for-statements.html"><strong aria-hidden="true">31.11.</strong> For statements</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/continue-statement.html"><strong aria-hidden="true">31.12.</strong> Continue statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/break-statement.html"><strong aria-hidden="true">31.13.</strong> Break statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/with-statement.html"><strong aria-hidden="true">31.14.</strong> With statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/return-statement.html"><strong aria-hidden="true">31.15.</strong> Return statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/throw-statement.html"><strong aria-hidden="true">31.16.</strong> Throw statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-statements/try-statement.html"><strong aria-hidden="true">31.17.</strong> Try statement</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-directives.html"><strong aria-hidden="true">32.</strong> ShockScript: Directives</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-directives/attributes.html"><strong aria-hidden="true">32.1.</strong> Attributes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-directives/import-directive.html"><strong aria-hidden="true">32.2.</strong> Import directive</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-directives/use-namespace-directive.html"><strong aria-hidden="true">32.3.</strong> Use namespace directive</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-directives/use-decimal-directive.html"><strong aria-hidden="true">32.4.</strong> Use decimal directive</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-directives/use-xml-directive.html"><strong aria-hidden="true">32.5.</strong> Use XML directive</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-definitions.html"><strong aria-hidden="true">33.</strong> ShockScript: Definitions</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-definitions/namespace-definition.html"><strong aria-hidden="true">33.1.</strong> Namespace definition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-definitions/variable-definition.html"><strong aria-hidden="true">33.2.</strong> Variable definition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-definitions/function-definition.html"><strong aria-hidden="true">33.3.</strong> Function definition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-definitions/class-definition.html"><strong aria-hidden="true">33.4.</strong> Class definition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-definitions/enum-definition.html"><strong aria-hidden="true">33.5.</strong> Enum definition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-definitions/interface-definition.html"><strong aria-hidden="true">33.6.</strong> Interface definition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-definitions/type-definition.html"><strong aria-hidden="true">33.7.</strong> Type definition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-definitions/package-definition.html"><strong aria-hidden="true">33.8.</strong> Package definition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lang-definitions/program-definition.html"><strong aria-hidden="true">33.9.</strong> Program definition</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

