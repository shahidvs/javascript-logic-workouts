
// Groceries delete action
let groceryUl = document.querySelector("#grocery-list ul");
groceryUl.addEventListener('click',deleteItem);

function deleteItem(e){
  let targetElement = e.target;
  if(targetElement.className ==='delete'){
    targetElement.parentElement.remove();
  }
}

// add an item
let formelement = document.getElementById('add-item');
formelement.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault()
        let inputValue = formelement.querySelector('input[type=text]').value;
        let ulElement =document.getElementsByTagName('ul')[0];

        const liElement= document.createElement('li');
        const itemElement = document.createElement('span');
        const deleteElement = document.createElement('span');

        itemElement.textContent =inputValue;
        deleteElement.textContent = 'delete';
        itemElement.classList.add('item');
        deleteElement.classList.add('delete')

        liElement.appendChild(itemElement);
        liElement.appendChild(deleteElement);
        ulElement.appendChild(liElement);
}


//hide items

let hideCheckbox = document.getElementById('hide');
hideCheckbox.addEventListener('change',hideItems)
function hideItems(){
    let GroceryItems= document.getElementById('grocery-list');
    GroceryItems.style.display ='block';
    if(hideCheckbox.checked){
        GroceryItems.style.display ='none';
    }

    
}

//search items
let searchElement = document.forms['search-item'].querySelector('input[type=text]');
searchElement.addEventListener('keyup', (event)=>{
   let searchText = event.target.value.toLowerCase();

   const groceriesLIst = document.querySelector('#grocery-list ul');
   let grocery = groceriesLIst.getElementsByTagName('li');
   grocery = Array.from(grocery);

   grocery.forEach((groceries) =>{
   let groceriesName = groceries.firstElementChild.textContent.toLowerCase();
   if(groceriesName.indexOf(searchText) !== -1){
       groceries.style.display = 'block';
   }else{
       groceries.style.display ='none';
   }
   });
});