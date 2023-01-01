// Add event listener to all existing items
document.querySelectorAll('li').forEach(x => {
        x.addEventListener('click', toggleDone)
    }
)


function appendItemToList(value) {
    const list = document.getElementById('list');
    const li = document.createElement("li")
    li.innerHTML = value;
    li.addEventListener('click', toggleDone);
    list.append(li)
}

const button = document.querySelector("#enter-button");
button.addEventListener('click', () => {
    console.log("button clicked");
    const inputVal = document.getElementById('item-input').value;
    // Null checking inputVal
    if (inputVal) {
        appendItemToList(inputVal)
    }
})

const input = document.getElementById('item-input');
input.addEventListener('keypress', function (event) {
    // event.charCode and event.keyCode are deprecated
    if (event.key === 'Enter' && input.value) {
        appendItemToList(input.value);
    }
    });


/***********************************************************************************************************/
/**********************************DOM Ex*******************************************************************/
/***********************************************************************************************************/
// 1. If you click on the list item, it toggles the .done class on and off.
// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
function toggleDone(event) {
    event.target.classList.toggle('done');
    if (event.target.classList.contains('done')) {
        const btn = document.createElement('button');
        btn.innerHTML = 'Delete';
        btn.onclick = function() {
            this.parentElement.remove();
        }
        event.target.appendChild(btn);
    } else {
        event.target.querySelector('button').remove();
    }
    
}
