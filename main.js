var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);
//add item
function addItem(e) {
    e.preventDefault();
    
    //Get input value
    var newItem = document.getElementById('item').value;
    
    //new li
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    //create delete button element
    var deleteBtn = document.createElement('button');
    
    //add classes to delete
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //append button to li
    li.appendChild(deleteBtn);
    
    //append li to list
    itemList.appendChild(li);
}

//remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//Filter items
function filterItems(e) {
    //lowercase conversion
    var text = e.target.value.toLowerCase();
    console.log(text);
    //get list
    var items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    });
    
    
}








