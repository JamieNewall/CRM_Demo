class UIController {

  getStage(opportunity) {
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
    for (i = 0; i <= stage; i++) {

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
    circles.forEach((elem, index) => {
      if (elem.children.item(0).id === `circle-${stage}`) {
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
      if (stage === 0) {
        stage = 1
      }
      if (field.id === `stage-${stage}-fields`) {
        field.style.display = "grid";
      } else {
        field.style.display = 'none';
      }

    });


  }

  static radioButtonState(e) {


    let targetId = e.target.id;
    let siblingId = "";
    if (targetId.includes("yes")) {
      siblingId = targetId.replace("yes", "no");
    } else {
      siblingId = targetId.replace("no", "yes");
    }
    document.getElementById(siblingId).removeAttribute("checked");
    document.getElementById(siblingId).checked = false;
    document.getElementById(targetId).setAttribute("checked", "checked");

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
    let radioBtns = document.querySelectorAll('.form-check-input');
    radioBtns.forEach((btn) => {
      btn.addEventListener('click', this.radioButtonState)
    })
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

  static buildSummaryTable(data) {
    document.querySelectorAll('.summary-row').forEach((row) => row.remove());
    console.log('start build summary table');
    let table = document.getElementById("summary-table");
    let html = '';
    let lengthOf = data.length;




    data.forEach((row, index) => {
      if (row.one_OppName === undefined) {

      } else {


        html +=
            `

        <tr id="row-${row.one_OppName}" class="summary-row ">
        
        <td class="table-entry"><a href="/opportunity/${row.one_OppName}}">${row.one_OppName}</a></td>
        <td class="table-entry"><a href="/opportunity/${row.one_OppName}}">${row.opp_CurrentStage}</a></td>
        <td class="table-entry"><a href="/opportunity/${row.one_OppName}}">${row.one_PvLead}</a></td>
        <td class="table-entry"><a href="/opportunity/${row.one_OppName}}">${row.one_InvestmentAmount}</a></td>
        <td class="table-entry"><a href="/opportunity/${row.one_OppName}}">${row.one_Location}</a></td>
        <td class="table-entry"><a href="/opportunity/${row.one_OppName}}">${row.opp_Status}</a></td>
       
      </tr>
        `;
      }
    })
    table.innerHTML = html;

    this.createPagination(lengthOf);
    console.log('end build summary table');






  }

  static displayRows(endIndex) {
    let rows = document.querySelectorAll('.summary-row');
    let begIndex = (endIndex === 0) ? 0:(endIndex * 25) - 25;
    let finishIndex = (begIndex === 0) ? 25 :endIndex * 25;
    console.log(begIndex , finishIndex)


    rows.forEach((row, index) => {
      if (begIndex <= index && index < finishIndex) {
        row.style.display = 'table-row';
      } else {
        row.style.display = 'none';
      }
    })
  }

  static  async buildTable() {
    let data = await fetch('/getData').then(res => {return res.json()}).then((res) => {


      this.buildSummaryTable(res);


      console.log('build table done')

    }).catch((err) => console.log(err))



  }


  static createPagination(length) {
    let pagination = document.querySelector('.pagination');
    let backBtn = document.querySelector('.pagination-back');
    let numberOfButtons = Math.ceil(length / 50);
    let html = '';
    document.querySelectorAll('.pagination-link').forEach((node) => node.remove())
    for (let i = 1; i <= numberOfButtons; i++) {
      if (i === 1) {
        html += `<li class="page-item pagination-link active" ><a class="page-link" href="">${i}</a></li>`;

      } else {
        html += `<li class="page-item pagination-link" ><a class="page-link" href="">${i}</a></li>`;

      }

    }
    backBtn.parentNode.insertBefore(document.createRange().createContextualFragment(html), backBtn.nextSibling);

  }
}


module.exports = UIController;