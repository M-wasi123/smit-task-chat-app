let userName = document.getElementById('name')
function register() {
    // document.getElementsById('form').style.display= 'none'
    document.getElementById('user-name').innerHTML = userName.value;
    document.getElementById('message').style.display= 'block'
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
userMessage.innerHTML += `<li class="user">${userInput.value}</li>`
if (userInput.value !== '' && userInput.value == 'salam') {
    userMessage.innerHTML += `<li class='auto-answer'>${messagesObj[0].salam}</li>`
}
if (userInput.value = 'salam') {
    userMessage.innerHTML += `<li class='auto-answer'>${messagesObj[1].userSalam}</li>`
}
if (userInput.value == 'alhamdulillah') {
    userMessage.innerHTML += `<li class='auto-answer'>${messagesObj[3].walaikumSalam}</li>`
}
if (userInput.value = 'salam kaisay ho') {
    userInput.innerHTML += `<li class='auto-answer'>${messagesObj[2].walaikum}</li>`
}
if (userInput.value == 'betha hoa hon') {
    userMessage.innerHTML += `<li class="auto-answer">${messagesObj[4].age}</li>`
}
if (userInput.value > 1) {
    
}

userInput.value = ''
}
}
function keyHandle(even) {
    even.preventDefault();
    document.getElementById('send-btn')
userMessage.innerHTML += `<li class="user">${userInput.value}</li>`
if (userInput.value !== '' && userInput.value == 'salam') {
    userMessage.innerHTML += `<li class='auto-answer'>${messagesObj[0].salam}</li>`
}
if (userInput.value = 'salam') {
    userMessage.innerHTML += `<li class='auto-answer'>${messagesObj[1].userSalam}</li>`
}
if (userInput.value == 'alhamdulillah') {
    userMessage.innerHTML += `<li class='auto-answer'>${messagesObj[3].walaikumSalam}</li>`
}
if (userInput.value = 'salam kaisay ho') {
    userInput.innerHTML += `<li class='auto-answer'>${messagesObj[2].walaikum}</li>`
}
if (userInput.value == 'betha hoa hon') {
    userMessage.innerHTML += `<li class="auto-answer">${messagesObj[4].age}</li>`
}
if (userInput.value > 1) {
    
}
userInput.value = ''
}
document.getElementById('user-input').addEventListener('keydown',keyHandler)
document.getElementById('send-btn').addEventListener('click',keyHandle)

const messagesObj = [
    {
        salam:`Salaam Kiya Hal hain`
    },
    {
        userSalam:`Walaikumsalaam kiya hal hain`
    },
    {
        walaikum:`Walaikumsalaam alhamdulilah`
    },
    {
        walaikumSalam:`Kia ker rahay ho`
    },
    {
age:`Age kiya hay aap ki`
    },
    {
        goods:`App ko sab say ziada kon sa fruit pasand hay`
    },
    {
        nice:`Ye waqai buht acha hay nice pasand`
    },
    {
time:`Time pass mat kero may complain ker don ga`
    },
    {
        koi:`Koi kaam dhanda nahi kia tumharay pass`
    }
]