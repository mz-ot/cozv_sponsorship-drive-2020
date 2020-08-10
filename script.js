var colors = ['#003281', '#ffcf00', '#ffffff', '#d30731', '#009641']
var namecolors = ['white', 'black', 'black', 'white', 'white']

var redoColumns = function() {
    // Get width
    let pixels = document.querySelector('.containercontainer').clientWidth
    // Get number of columns
    let columns = Math.floor(pixels/300)

    // Set background colors
    let containers = document.querySelectorAll('.container')
    let imgs = document.querySelectorAll('.move')
    let names = document.querySelectorAll('.name')
    for (i = 0; i != containers.length; i++) {
        containers[i].style.width = pixels / columns
        let column = i % columns
        let color = colors[(column + Math.floor(i / columns)) % 5]
        let namecolor = namecolors[(column + Math.floor(i / columns)) % 5]
        imgs[i].style.backgroundColor = color
        names[i].style.color = namecolor
    }
}

var updateNumbers = function() {
    // Get file
    let fileRQ = new XMLHttpRequest()
    fileRQ.open("GET", "https://cozv.github.io/2020drivedata/data.json", false)
    fileRQ.send()

    // Convert to variable
    let data = JSON.parse(fileRQ.response)

    // Update elements
    for (element of document.getElementsByClassName("sponsors")) {
        element.innerHTML = data[element.id]
    }
}

var setup = function() {
    redoColumns();
    updateNumbers();
}

window.onresize = redoColumns;
window.onload = setup;
