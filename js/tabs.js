
class TabLink {
    constructor(tabLink) {
      this.tabLink = tabLink;
      this.data = tabLink.dataset.tab;
      this.itemElement = document.querySelector(`.tab-item[data-tab="${tabLink.dataset.tab}"]`);
      this.tabItem = new TabItem(this.itemElement);

      tabLink.addEventListener('click', () => this.select());
    };

    select() {
      const links = document.querySelectorAll('.tab-link');
      links.forEach((link) => {
        if(link.classList.contains('tab-link-selected')) {
          link.classList.remove('tab-link-selected');
        } else { 
          this.tabLink.classList.add('tab-link-selected');
        }
      });
      this.tabItem.select()
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
    
    select() {
      const items = document.querySelectorAll('.tab-item');
      items.forEach(item => {
        if(item.classList.contains('tab-item-selected')) {
          item.classList.remove('tab-item-selected');
        }
          this.element.classList.add('tab-item-selected');
      });
      
    }
  }
  

  
  const links = document.querySelectorAll('.tab-link')
  
  links.forEach((link) => {
    const tabLink = new TabLink(link);  
  });