setTimeout(function(){

//filtering by input value

   const countryNames = document.querySelectorAll('.country-search');
   const searchBox = document.getElementById('info');
   countryNames.forEach(name =>{
   //   console.log(name.textContent);
     searchBox.addEventListener('keyup', (e)=>{
      const serachFilter = e.target.value.trim();
      // console.log(serachFilter)
      // console.log(searchBox.value)
         countryNames.forEach(name => {
            if(name.textContent.includes(serachFilter)){
               // console.log(name.parentElement)
               name.parentElement.style.cssText = 'display: flex; flex-direction:column; justify-content: center; align-items: flex-start;'
            } else {
               name.parentElement.style.display = 'none'
            }
         })
      })
    })

// for filtering by region

    const sortRegion = document.querySelectorAll('.region')
    const regions = document.querySelectorAll('.dropdown-content__item')
    const btn = document.querySelector('.dropbtn')
    const dropdown = document.querySelector('.dropdown-content')
    btn.addEventListener('click', (e)=>{
       // e.preventDefault()
       dropdown.classList.toggle('active')
    })
    regions.forEach(item => {
       item.addEventListener('click', (e)=>{
          let data = e.target.getAttribute('data-region');
          let regionCapital = data.charAt(0).toUpperCase() + data.slice(1)
          sortRegion.forEach(region =>{
             let regionFilter = region.textContent;
                   if(regionFilter == regionCapital){
                      region.parentElement.style.cssText = 'display: flex; flex-direction:column; justify-content: center; align-items: flex-start;'
                   } else {
                      region.parentElement.style.display = 'none'
                   }
             
             })
       })
       
    })

   //  const cards = document.querySelectorAll('.card-click')
   //  cards.forEach(card => {
   //     card.addEventListener('click', (e)=>{
   //        console.log(card.children[1].textContent)
   //     })
   //     console.log(card.children[1].textContent)
   //  })
},2000)
