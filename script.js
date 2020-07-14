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
        containers[i].style.width = Math.floor(pixels / columns)
        let column = i % columns
        let color = colors[(column + Math.floor(i / columns)) % 5]
        let namecolor = namecolors[(column + Math.floor(i / columns)) % 5]
        imgs[i].style.backgroundColor = color
        names[i].style.color = namecolor
    }
}

window.onresize = redoColumns;
window.onload = redoColumns;
