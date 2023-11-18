const topNavTemplate = document.createElement('template');
topNavTemplate.innerHTML = `

<style>
.topnav {
    display:grid;
    grid-template-columns: 10% 80% 10%;
    text-align: center;
    height: 50px;
    background-color: rgb(54, 54, 117);
    padding-top: 5px;
}

.topnav-logo {
    width: 40px;
    height: 40px;
    background-color: transparent;
}

.topnav-title {
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