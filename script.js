function toggleMode() {
    const html = document.documentElement
    
    //html.classList.toggle("light") or 

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    } 

    //troca a foto
    const img = document.querySelector("#profile img")
    
    if(html.classList.contains('light')) {
        //light mode substituição
        img.setAttribute('src', './image/avatar-light.png')
    } else {
        //sem light mode
        img.setAttribute('src', './image/cropped_image.png')
    }
}

