// https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

const sidebarTemplate = document.createElement('template');
sidebarTemplate.innerHTML = `
    <style>
        :host {
            flex-shrink: 0;
            width:200px;
            position: sticky;
            top: 0;
            align-self: flex-start;
            font-size: 18px;
        }
        h1 {
            font-size: var(--heading_text_size);
            text-align: center;
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .sidebar_img {
            position: relative;
            width: 75%;
            left: 12.5%;
        }
        .sidebar_links {
            white-space: pre-line;
            margin-top: -8px;
            padding-left: 10px;
        }
        a, a:visited {
            text-decoration: none;
            color: var(--text_color);
        }
        a:focus, a:hover  {
            color: white;
            text-decoration: none;
            background-color: var(--hover_color);
        }
        a:active {
            background: var(--focus_color);
        }
    </style>
   
    <h1>Vincent Wolfe</h1>
    <img src="../img/tmp.png" class="sidebar_img"/>
    <div class="sidebar_links">
        <a href="../about.html">About</a>
        <a href="../contact.html">Contact</a>
        <a href="../cv.html">CV</a>

        Portfolios
        <a href="../index.html">The Eternal Now</a>
        <a href="../internal_world.html">Internal World</a>
        <a href="../clothing.html">Textile/For Sale</a>
        <a href="../webcomics.html">Webcomics</a>
        

`;

class Sidebar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(sidebarTemplate.content);
  }
}
customElements.define('sidebar-component', Sidebar);

