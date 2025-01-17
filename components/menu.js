class SidebarMenu extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `

      <style>
      @import url('https://cdn.jsdelivr.net/npm/tailwindcss@^2/dist/tailwind.min.css');


        .menu-hidden {
          width: 8rem;
        }
    
        .menu-hidden .option-menu {
          display: none;
        }
    
        .menu-expanded {
          width: 18rem;
        }
      </style>
    
      <!-- Menú lateral -->
      <div class ="h-screen">
      <div id="sidebar" class="menu-expanded h-screen p-4 text-white transition-all duration-300 relative">
        <div id="particles-js" class="absolute h-full left-0 lg:w-1/2 md:w-full z-10"></div>
        <div class="bg-blue-800 rounded-lg h-full relative">
          <div class="p-4 flex flex-wrap items-center relative z-10">
            <img class="w-20 p-3" src="../assets/img/logomenu.png" alt="">
            <span class="font-bold my-4 text-center">Nómina Solutions</span>
          </div>
          <ul class="space-y-2 px-4 relative z-10">
            <li>
              <button class="text-left px-4 py-2 flex items-center justify-between hover:bg-blue-700"
                onclick="toggleDropdown('menu1')">
                <span class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    <path d="M9 21h6" />
                  </svg>
    
                  <span class="ml-4 option-menu">Inicio</span>
                </span>
              </button>
            </li>
            <li>
              <button class="text-left px-4 py-2 flex items-center justify-between hover:bg-blue-700"
                onclick="toggleDropdown('menu2')">
                <span class="flex items-center">
                  <span class="inline-block w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24"
                      viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="7" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </span>
                  <span class="ml-4 option-menu">Empleados</span>
                </span>
              </button>
    
            </li>
            <li>
              <button class="text-left px-4 py-2 flex items-center justify-between hover:bg-blue-700"
                onclick="toggleDropdown('menu3')">
                <span class="flex items-center">
                  <span class="inline-block w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="24"
                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="3" y="5" width="18" height="14" rx="3" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <line x1="7" y1="15" x2="7.01" y2="15" />
                      <line x1="11" y1="15" x2="13" y2="15" />
                    </svg>
                  </span>
                  <a href="../invitado/liquidacion/liquidacion.html">
                  <span class="ml-4 option-menu">Liquidar</span>
                  </a>
                </span>
              </button>
    
            </li>
            <li>
              <button class="text-left px-4 py-2 flex items-center justify-between hover:bg-blue-700"
                onclick="toggleDropdown('menu4')">
                <span class="flex items-center">
                  <span class="inline-block w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="24"
                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M7 12h14l-3 -3m0 6l3 -3" />
                    </svg>
                  </span>
                  <span class="ml-4 option-menu">Cerrar sesión</span>
                </span>
              </button>
    
            </li>
            <!-- Agregar más opciones según sea necesario -->
          </ul>
          <div class="p-6 flex justify-center relative z-10">
            <button id="toggleButton" class="bg-blue-600 text-white p-2 rounded-full focus:outline-none">
              &lt;
            </button>
          </div>
        </div>
      </div>
      </div>
`;

    shadow.appendChild(template.content.cloneNode(true));

    const particlesScript = document.createElement('script');
    particlesScript.src = '../../components/particles.js';
    particlesScript.onload = () => {
      setTimeout(() => {
        const particlesConfigScript = document.createElement('script');
        particlesConfigScript.src = '../../components/particles-config.js';
        shadow.appendChild(particlesConfigScript);
      }, 1000);
    };
    shadow.appendChild(particlesScript);
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#toggleButton').addEventListener('click', this.toggleMenu.bind(this));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggleButton').removeEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    const sidebar = this.shadowRoot.querySelector('#sidebar');
    sidebar.classList.toggle('menu-expanded');
    sidebar.classList.toggle('menu-hidden');
    this.shadowRoot.querySelector('#toggleButton').textContent = sidebar.classList.contains('menu-expanded') ? '<' : '>';
  }
}

customElements.define('sidebar-menu', SidebarMenu);