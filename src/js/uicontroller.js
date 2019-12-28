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
    for ( i = 1 ; i <= stage; i++) {
      
      html += `<div class="pv-circle"> 
      <span class="node-number" id="circle-${i}">${i}</span>    
      </div>`
    }
    

    container.innerHTML = html;

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
      if (field.id === `Stage-${stage}-Fields`) {
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
      if (field.id === `Stage-${stage}-Fields`) {
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
        console.log('function runs');
        this.setFields(stage);
      });
    });
  }
          
   
  

  addNumberNode(stage) {
    
  }

  setStageUiState(stage) {

  }

  

}


module.exports = UIController;