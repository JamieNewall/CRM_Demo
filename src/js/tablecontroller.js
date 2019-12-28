export default class TableController {

  // adds event listeners and font awesome toggle
  static filterToggle() {
    let headers = document.querySelectorAll('.table-header');
    headers.forEach((header) => {  
      header.addEventListener('click',(e) => {
        console.log(e.target.className)
        if (e.target.tagName === 'TH') {
          if (e.target.children[0].className === "fas fa-sort") {
            console.log('its a match')
            e.target.children[0].className = "fas fa-sort-up"
          } else if (e.target.children[0].className === "fas fa-sort-up") {
            e.target.children[0].className = "fas fa-sort-down"
          } else {
            e.target.children[0].className = "fas fa-sort"
          }
        } else {
          if (e.target.className === "fas fa-sort") {
            console.log('its a match on the arrow')
            e.target.className = "fas fa-sort-up"
          } else if (e.target.className === "fas fa-sort-up") {
            e.target.className = "fas fa-sort-down"
          } else {
            e.target.className = "fas fa-sort"
          }

        }
        let currentState = e.target;
        
        
      });
    });
  }




}