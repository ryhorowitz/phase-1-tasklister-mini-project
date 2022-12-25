document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById("new-task-description")
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    createListItem(input.value)
  })

});

function createListItem(val) {
  console.log('val is, ', val)
  let item = document.createElement('li')
  let list = document.getElementById('tasks')
  item.textContent = val
  list.appendChild(item)
}