var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')
filter.addEventListener('keyUp', filterItems);
itemList.addEventListener('click', removeItem);
form.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();
    var newItem =document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);



    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);

}
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
    
    
}
function filterItems(e) {
    var text = e.target.value.toLowercase();
    console.log(text);

    
}