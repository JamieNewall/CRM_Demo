class UIController {

  getStage (opportunity) {
    return opportunity.stage
  }

  // sets PV circles on load
  static setLoadState(stage) {
    let container = document.getElementsByClassName('grid-container')[0];
    // Set Grid
    if (stage <= 4) {
      container.style.gridTemplateColumns = `repeat(auto-fill, minmax(200px,1fr)`
    } else {
    container.style.gridTemplateColumns = `repeat(auto-fit, minmax(70px,1fr)`
    }
    // Add circles
    let html = '';
    let i;   
    for ( i = 0 ; i <= stage; i++) {
      
      html += `<div class="pv-circle"> 
      <span class="node-number" id="circle-${i}">${i}</span>    
      </div>`
    }


    

    container.innerHTML = html;
    let selector = `#circle-${stage}`;
    document.querySelector(selector).parentNode.style.background = '#008cf0';

    // Color Circles
    let circles = document.querySelectorAll('pv-circle');

    // convert html collecton to aray
    circles.forEach((elem,index) => {
      if(elem.children.item(0).id === `circle-${stage}`) {
        elem.style.background = '#008cf0';
      }
      
    });
    
    let fields = document.querySelectorAll('.field-set');
    fields.forEach((field) => {
      if (field.id === `stage-${stage}-fields`) {
        field.style.display = "grid";
      } else {
        field.style.display = 'none';
      }
    });
    
    



  }


  getState() {

  }

  static setFields(stage) {
    let fieldSets = document.querySelectorAll('.field-set');
        
    fieldSets.forEach((field, index) => {
      // console.log(field.id,index);
      if(stage === 0){stage = 1}
      if (field.id === `stage-${stage}-fields`) {
        field.style.display = "grid";
      } else {
        field.style.display = 'none';
      }
      
      });
  
      
      
    }

  
  static loadEventListeners() {
    let circles = document.querySelectorAll('.pv-circle');
    circles.forEach(circle => {
      circle.addEventListener('click', (e) => {
        let circles = document.querySelectorAll('.pv-circle');
        let stage;
        circles.forEach(circle => circle.style.background = '#03ceab');
        if (e.target.tagName === 'SPAN') {
          e.target.parentNode.style.background = '#008cf0';
          console.log(e.target.innerHTML);
          stage = e.target.innerHTML; 
        } else {
          e.target.style.background = '#008cf0';
          console.log(e.target.children[0].innerHTML);
          stage = e.target.children[0].innerHTML;
          
        }

        this.setFields(stage);
      });
    });
    let mobileMenu = document.querySelector('#mobile-menu');
    mobileMenu.addEventListener('click', this.toggleMobileMenu)
    // mobileMenu.addEventListener("mouseover", this.mobileMenuAnimation)
  }

  static toggleMobileMenu() {
    let mobileMenu = document.querySelector('.mobile-menu-dropdown');
    console.log('running')
    if (mobileMenu.style.display === "none") {
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.style.display = "none"
    }
  }

  // static mobileMenuAnimation() {
  //   let mobileMenu = document.querySelector('#mobile-menu');
  //   console.log(mobileMenu.childNodes);
  //
  // }
          
   
  

  addNumberNode(stage) {
    
  }

  setStageUiState(stage) {

  }

  

}


module.exports = UIController;