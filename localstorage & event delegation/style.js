//add dom elements
const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; //we check if there is something
                                                              //in localstorage and the we fall back to empty array
    
 const clearBtn = document.querySelector('.clear');

//functions
function addItem(e){
    e.preventDefault(); //  add value without refresh 
    const text = (this.querySelector('[name=item]')).value; //search inside of one form ....".value" shows the input
    const item ={
       text,       /*'item Name',  es6 shorthan property*/
        done: false
    };
    items.push(item);
    populateList(items,itemList);
    localStorage.setItem('items',JSON.stringify(items)); //update localstorage everytime
    this.reset();
    
}

function populateList(plates = [] , plateList){
  plateList.innerHTML = plates.map((plate,i) => { //i index
    return `
    
    <li>
    <input type = "checkbox" data-index="${i}" id= "item${i}" ${plate.done ? 'checked' : ''}/>
     <label for = "item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input[type="checkbox"]'))return; // Skip if it's not an input element
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done; //flip flop true and false
    localStorage.setItem('items',JSON.stringify(items)); //update localstorage everytime
    populateList(items,itemList);

}

function clearDone() {
    // Filter out the items that are not done
    const uncheckedItems = items.filter(item => !item.done);
    
    // Update local storage with the unchecked items
    localStorage.setItem('items', JSON.stringify(uncheckedItems));
    
    // Update the UI with the unchecked items
    populateList(uncheckedItems, itemList);
}

// function clearAll() {
//     // Clear items from local storage
//     localStorage.removeItem('items');
    
//     // Clear items from the UI
//     itemList.innerHTML = '';
    
//     // Update the items array to be empty
//     items.length = 0;
// }



// events
addItems.addEventListener('submit',addItem);
itemList.addEventListener('click',toggleDone);
clearBtn.addEventListener('click',clearDone)
// clearBtn.addEventListener('click',clearAll)

populateList(items,itemList);