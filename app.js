let userName = document.getElementById('name')
function register() {
    if (userName.value !== '' ) {
        document.getElementById('user-name').innerHTML = userName.value;
        document.getElementById('message').style.display= 'block'
    }else{
        alert('Please enter your name')
    }
}
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
document.getElementById('ico').style.display = 'none'
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
        autoScroll()
        let randomMessage = messagesObj[Math.floor(Math.random() * messagesObj.length)];
        let key = Object.keys(randomMessage);
let message = randomMessage[key];
userMessage.innerHTML += `<li class="user">${userInput.value}</li>`
if (userInput.value == 'hellow'||userInput.value == 'hi') {
    userMessage.innerHTML += `<li class='auto-answer'>How are you</li>`
    userInput.value = ''
}
else if (userInput.value == 'i am fine') {
        userMessage.innerHTML += `<li class='auto-answer'>What is your age</li>`
        userInput.value = ''
}
else if (userInput.value > 18) {
        userMessage.innerHTML += `<li class='auto-answer'>You are young</li>`
        userInput.value = ''
}
else if (userInput.value < 18 && userInput.value > 0) {
        userMessage.innerHTML += `<li class='auto-answer'>You are children</li>`
        userInput.value = ''
}

else if (userInput.value > 49) {
        userMessage.innerHTML += `<li class='auto-answer'>You are old man</li>`
        userInput.value = ''
}
else{
        userMessage.innerHTML += `<li class='auto-answer'>${message}</li>`
        userInput.value = ''
}

}
}
function keyHandle(even) {
    even.preventDefault();
    document.getElementById('send-btn')
    autoScroll()
    let randomMessage = messagesObj[Math.floor(Math.random() * messagesObj.length)];
        let key = Object.keys(randomMessage);
let message = randomMessage[key];

userMessage.innerHTML += `<li class="user">${userInput.value}</li>`
if (userInput.value == 'hellow'||userInput.value == 'hi') {
    userMessage.innerHTML += `<li class='auto-answer'>How are you</li>`
    userInput.value = ''
}
else if (userInput.value == 'i am fine') {
        userMessage.innerHTML += `<li class='auto-answer'>What is your age</li>`
        userInput.value = ''
}
else if (userInput.value > 17) {
        userMessage.innerHTML += `<li class='auto-answer'>You are young</li>`
        userInput.value = ''
}
else if (userInput.value < 18) {
        // userMessage.innerHTML += `<li class='auto-answer'>You are children</li>`
        userInput.value = ''
}
else if (userInput.value > 49) {
        userMessage.innerHTML += `<li class='auto-answer'>You are old man</li>`
        userInput.value = ''
}
else{
        userMessage.innerHTML += `<li class='auto-answer'>${message}</li>`
        userInput.value = ''
}

}
document.getElementById('user-input').addEventListener('keydown',keyHandler)
document.getElementById('send-btn').addEventListener('click',keyHandle)

const messagesObj = [
    { as: 'Kiya ker rahay ho' },
    { au: 'Khana khaliya' },
    { hy: 'May samjha nahi kiya khay rahay hain' },
    { tb: 'Tabyet to theek hay app ki' },
    { me: 'Mujhay tang mat kero' },
    { nr: 'May sonay jaraha hon' }
 ];
 

//  console.log(`Message: ${message}`);
// console.log(arr)
// console.log(messagesObj.value)
function autoScroll() {
    userMessage.scrollTo(0, 500)
}