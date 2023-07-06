var shoppingList = [];
const itemInput = document.getElementById("itemInput");
const listOutput = document.getElementById("listOutput");

itemInput.addEventListener("keypress", (e) => {
    if(e.key === 'Enter'){
        addList();
    }
});

// Function to add an item to the shopping list
function addList(){
    const item = itemInput.value;
    if (item.trim() !== '') {
        shoppingList.push(item);
        itemInput.value = '';
        displayList();
    }
}

// Function to display the shopping list
function displayList() {
    listOutput.innerHTML = '';
    if (shoppingList.length === 0) {
        const listItem = document.createElement('li');
        listItem.setAttribute("class","card-item");
        listItem.innerHTML = 'The shopping list is empty.';
        listOutput.appendChild(listItem);
    } 
    else {
        shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute("class","card-item");
        listItem.innerHTML = `${index + 1}. ${item}`;
        listOutput.appendChild(listItem);
      });
    }
}

function clearList(){
        shoppingList = [];
        displayList();
}

displayList();