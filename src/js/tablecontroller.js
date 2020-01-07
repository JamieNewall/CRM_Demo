class TableController {

  // adds event listeners and font awesome toggle
  //TODO need to add logic to filter data
  static filterToggle() {
    let headers = document.querySelectorAll('.table-header');
    headers.forEach((header) => {
      header.addEventListener('click', (e) => {
        let headers = document.querySelectorAll('.table-header');
        let targetState = '';
        let targetNode;
        let columnText = '';
        if (e.target.tagName === 'TH') {
          targetState = e.target.children[0].className;
          targetNode = e.target.children[0];
          columnText = e.target.textContent;

        } else {
          targetState = e.target.className;
          targetNode = e.target;
          columnText = e.target.parentNode.textContent;

        }

        //remove state from all first
        headers.forEach((header) => {
          header.children[0].className = "fas fa-sort";
        })

        if (targetState === "fas fa-sort") {
          targetNode.className = "fas fa-sort-up";


        } else if (targetState === "fas fa-sort-up") {
          targetNode.className = "fas fa-sort-down"
        } else {
          targetNode.className = "fas fa-sort-up"
        }

        let data = document.querySelectorAll('.summary-row');
        let arrData = Array.from(data);
        let filterMethod = targetNode.className;
        let filter = '';

        if (filterMethod === "fas fa-sort-up") {
          filter = 'ASC';
        } else {
          filter = 'DESC';
        }

        let cleansedData = arrData.filter((item) => {

          if (item.style.display === 'table-row') {

            return true;
          } else {
            return false;
          }
        })

        let column = 0;
        switch (columnText) {
          case 'Name':
            column = 1;
            break;
          case 'Stage':
            column = 2;
            break;
          case 'Person/Owner':
            column = 3;
            break;
          case 'Person/Owner':
            column = 3;
            break;
          case 'Investment Amount':
            column = 4;
            break;
          case 'Location':
            column = 5;
            break;
          case 'Status':
            column = 6;
            break;
        }


        this.sortLoadedData(cleansedData, filter, column);


      });
    });
  }

  static sortLoadedData(data, order, column) {
    console.log(order)
    let cleansedData = [];
    data.forEach((item) => {

      cleansedData.push(item.children[column - 1]);

    })


    if (column === 2 || column === 4) {
    //  Number sort

      if (order === 'ASC') {
        cleansedData.sort(function compare(a,b) {
          console.log(a.textContent , b.textContent)
          a = Number.parseInt(a);
          b = Number.parseInt(b)
          if(a > b) return 1;
          if (b > a) return -1;
          return 0;


      })} else {
          cleansedData.sort(function compare(a,b) {
            console.log(a.textContent , b.textContent)
            a = Number.parseInt(a);
            b = Number.parseInt(b)
            if(a < b) return 1;
            if (b < a) return -1;
            return 0;
      })


    }} else {
    //String sort
      if (order === 'ASC') {
        console.log(cleansedData)
        cleansedData.sort(function compare(a,b) {
          console.log(a.textContent , b.textContent)
          if(a.textContent > b.textContent) return 1;
          if (b.textContent > a.textContent) return -1;
          return 0;
        })



      } else {
        cleansedData.sort(function compare(a,b) {
          if(a.textContent < b.textContent) return 1;
          if (b.textContent < a.textContent) return -1;
          return 0;
        })
      }
      let renderData = [];
      cleansedData.forEach((row) => {
        renderData.push(row.parentNode)
      })
      document.querySelectorAll('.summary-row').forEach((row) => {
        if (row.style.display === 'table-row') {
          row.remove();
        }

      })

      let table = document.querySelector('#summary-table');
      renderData.forEach((row) => {
        table.appendChild(row)
      })

    }



  }
}

module.exports = TableController;