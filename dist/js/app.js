// let t1 = performance.now()
let card = document.querySelector('.card')

window.addEventListener('load', performAction)

//valid country names

let country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Samoa","San Marino","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","Korea","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan", "Usa","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];


async function performAction(e){
    const countryName = document.getElementById('info').value;
    // fragment to hold all data
        let fragment = []

        //looping throw array list 
        //passing each item to api call
        for(let item of country_list){
            const data = await getCountryDetails(`https://restcountries.eu/rest/v2/name/${item}`)
           
            try {

                //creating a card with country details
                let cardInfo = `<div id="card-click" class="card__info card-click">
                <img class="card__info-img" src="${data[0].flag}" alt="">
               
                <h2 class="country-search">${item}</h2>
                <p class="card__info-text">Capital: ${data[0].capital}</p>
                <p class="card__info-text region">${data[0].region}</p>
                <p class="card__info-text">Population: ${data[0].population} people</p>
               
                </div>`
            // pushing to fragment array
            fragment.push(cardInfo);
            }catch(e){
                console.log('Errorr: ' + e)
            }
        }
        //updating content with all cards 
        card.innerHTML  = fragment.join('');
}

// getting coutnry details
const getCountryDetails = async(url) => {
    const res = await fetch(url)
    try {
        const data = await res.json()
            return data 
    }catch(error){
        console.log("erorr", error)
    }
}


// let t2 = performance.now()
// console.log(`Speed is :  ${t2-t1} milleseconds`)