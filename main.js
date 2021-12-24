const URL ='https://rickandmortyapi.com/api/character'

window.addEventListener('load', () => {
    const character = document.getElementById('characters')
    const ul = document.createElement('ul')
    const data = JSON.parse(localStorage.getItem('characters'))
    
    

    const getData = () =>{
        return fetch(URL)
        .then(response => response.json())
        .then(characters => localStorage.setItem('characters', JSON.stringify(characters.results.flatMap(item => ({ name: item.name, id: item.id, image: item.image }) ))))
        //.then(characters => characters.results.flatmap (item => ({ name: item.name, image: item.image, type: item.type })))
        

    }

    getData()

    data && data.map(item => {
        const li  = document.createElement('li')
        const img = document.createElement('img')
        const span = document.createElement('span')

        span.appendChild(document.createTextNode(item.name))
        img.src = item.image
        li.appendChild(img)
        li.appendChild(span)
        ul.appendChild(li)
        character.appendChild(ul) 


    })

          
    
})                                                                                                                      
