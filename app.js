const url = 'https://api.nasa.gov/planetary/apod?api_key='
const url2 = "http://api.open-notify.org/astros.json"
const api_key = config.NASA_API_KEY

const fetchNasaData = async () => {
    try {
        const response = await fetch(`${url}${api_key}`)
        const data = await response.json()
        console.log('NASA APOD data', data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

const fetchPeopleData = async () => {
    try {
        const response = await fetch(`${url2}`)
        const data = await response.json()
        console.log('People data', data)
        displayPeopleData(data)
    } catch (error) {
        console.log(error)
    }
}

const displayData = data => {
   
    document.getElementById('picture').src = data.hdurl
    
  }

  const displayPeopleData = data => {
   
    document.getElementById('people').textContent = data.number

    let str = '<ul>'
    data.people.forEach(function(item) {
        str += "<li id='name'>" + item.name + "</li>"
        str += "<li id='craft'>" +"Craft - " + item.craft + "</li>"
        console.log(item.name)
    })
    str += "</ul>"
    console.log(str)
    document.getElementById('cards').innerHTML = str

    
  }

fetchNasaData()
fetchPeopleData()

