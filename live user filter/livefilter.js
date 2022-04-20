const filter = document.querySelector('#filter')
const result =  document.querySelector('#result')
 const listItems = []

 filter.addEventListener('input', (e) => {filterData(e.target.value)})
getData()
 async function getData() {
     const res = await fetch('https://randomuser.me/api?results=50')
     const data = await res.json()
   
     result.innerHTML = ''
    data.results.forEach(user => {
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}"></img>
        <div class="user-info"<h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.country} ${user.location.city}</p>
        <p>${user.email} ${user.phone}</p></div>
        `
        result.appendChild(li)
  
    });
 } 
 function filterData(searchTerm) {
  listItems.forEach(item => {
      if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
          item.classList.remove('hide')
      } else{
          item.classList.add('hide')
      }
  })
 }