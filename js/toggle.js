class Toggle {
    constructor(menu) {
        this.menu = menu;
        this.button = document.querySelector('.navbar-toggle');
        this.links = document.querySelectorAll('.nav-links');

        this.button.addEventListener('click', () => {
            this.toggleLinks();
        });

    }
        toggleLinks() {
            this.links.forEach((link) => 
            {
            if(link.classList.contains('active')) {
                link.classList.remove('active');
            } else {
                link.classList.add('active')
                // const header = document.querySelector('header');
                // const nav = document.querySelector('nav');
                // header.style.flexFlow = "column";
                // nav.style.flexFlow = "row";
                // nav.style.fontSize = "";
            }
        });
            
        
        }
}

const menu = document.querySelector('.mobile');

new Toggle(menu)