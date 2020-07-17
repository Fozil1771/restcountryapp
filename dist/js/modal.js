
document.getElementById('info').addEventListener("keydown", ({key}) => {
    if (key === "Enter") {
        getDataForModal()
    }
})

document.querySelector('.btn-submit').addEventListener('click', (e)=>{
    // if(document.getElementById('info').value == ''){
    //     alert('Don\'t empty value')
    // }
        getDataForModal()
})


async function getDataForModal() {
    const inputValue = document.getElementById('info').value;

    //checking input value for not being empty
    if(inputValue == ''){
        alert('Don\'t empty value')
    }else{ 
        //getting data     
        const data = await getCountry(`https://restcountries.eu/rest/v2/name/${inputValue}`);
        
        try {
            document.getElementById('info-img').src = data[0].flag;
            document.getElementById('country-name').innerHTML = data[0].name;
            document.getElementById('info-native-name').innerHTML = "Native Name: " + data[0].nativeName;
            document.getElementById('info-population').innerHTML = "Population: " + data[0].population;
            document.getElementById('info-region').innerHTML = "Region: " + data[0].region;
            document.getElementById('info-capital').innerHTML = "Capital: " + data[0].capital;
            document.getElementById('info-top-level-domain').innerHTML = "Domain: " + data[0].topLevelDomain;
            document.getElementById('info-currency').innerHTML = "Currency: " + data[0].currencies[0].name;
            document.getElementById('info-time').innerHTML = "Timezone: " + data[0].timezones[0];
            document.getElementById('info-lang').innerHTML = "Language: " + data[0].languages[0].name;
            document.getElementById('info-border-1').innerHTML = data[0].borders[0];
            document.getElementById('info-border-2').innerHTML = data[0].borders[1];
            document.getElementById('info-border-3').innerHTML = data[0].borders[2];
        }catch(e){
            console.log('erorr in dom : ' + e)
        }
    }
}

// getting country details
const getCountry = async(url) => {
    const res = await fetch(url)
    try {
        const data = await res.json()
            return data 
    }catch(error){
        console.log("erorr", error)
    }
}
// showing info section
setTimeout(function(){
    const cardsClick = document.querySelectorAll('#card-click')
    const btn = document.querySelector('.btn-back')
    const modal = document.querySelector('.infoSection')
    const inputEnter = document.getElementById('info');
    const submit = document.querySelector('.btn-submit')

    inputEnter.addEventListener("keydown", ({key}) => {
        if (key === "Enter") {
            // document.body.style.overflowY = 'hidden'
                modal.classList.toggle('show')
                if(modal.classList.contains('show')){
                    modal.classList.remove('close')
                }
            }
    })
    submit.addEventListener('click', (e)=>{
        if(document.getElementById('info').value != ''){
            modal.classList.toggle('show')
            if(modal.classList.contains('show')){
                modal.classList.remove('close')
            }
        }
    })

    btn.addEventListener('click', (e)=>{
        if(modal.classList.contains('show')){
            modal.classList.remove('show')

        }
        modal.classList.add('close')
    })

},2500)

// loader
setTimeout(function(){
    document.getElementById('loading').classList.remove('donut')
},1600)

//footer waiting until content is loaded
setTimeout(function(){
    document.querySelector('.footer').classList.add('show')
},1700)



