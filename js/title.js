const titleTemplate = document.createElement('template');
titleTemplate.innerHTML = `

<style>
.title {
    position: relative;
    font-size: 24px;
    background-color: transparent;
    top: -20%;
}

.left {
    text-align: left;
}

.right {
    text-align: right;
}

.center {
    text-align: center;
}
</style>

<div class="topnav">
    <div class="left" style="padding-left: 10px;">
        <img class="topnav-logo" src="http://localhost/base/images/btn_home.png" onclick="location.href='http://localhost/base/index.html'">
    </div>
    <div class="center">
        <img class="topnav-logo" src="http://localhost/base/images/logo.png">
        <span class="topnav-title">klamey</span>
    </div>
    <div class="right" style="padding-right: 10px;">
        <img class="topnav-logo" src="http://localhost/base/images/btn_menu.png">
    </div>
</div>
`

class TopNav extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(topNavTemplate.content);
    }
}

customElements.define('topnav-component', TopNav);