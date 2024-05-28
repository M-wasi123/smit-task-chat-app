document.getElementById('file').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    var reader = new FileReader();
    reader.onload = function(e) {
        if (file.type.startsWith('image/')) {
            var img = new Image();
            img.src = reader.result;
            fileDisplayArea.innerHTML = '';
            fileDisplayArea.appendChild(img);
            document.getElementById('ico').style.display = "none"
            fileDisplayArea.style.display= 'block'

        } 
    };

    reader.readAsDataURL(file);
});
let userMessage = document.getElementById('user-message')
let userInput = document.getElementById('user-input');
userInput.addEventListener('keydown',function () {
    document.getElementById('send-btn').style.display = 'block'
    document.getElementsByClassName('icons')[0].style.display = 'none'
    document.getElementsByClassName('icons')[1].style.display = 'none'
    document.getElementsByClassName('icons')[2].style.display = 'none'

})
userInput.addEventListener('keyup',function () {
    if (userInput.value == '') {
        document.getElementById('send-btn').style.display = 'none'
        document.getElementsByClassName('icons')[0].style.display = 'block'
        document.getElementsByClassName('icons')[1].style.display = 'block'
        document.getElementsByClassName('icons')[2].style.display = 'block'
    }
})
function keyHandler(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        document.getElementById('send-btn')
        userInput.value = ''
userMessage.innerHTML = `<li class="user">${userInput.value}</li>`
    }
}
document.getElementById('user-input').addEventListener('keydown',keyHandler)