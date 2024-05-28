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

        } else if (file.type === 'application/pdf') {
            var iframe = document.createElement('iframe');
            iframe.src = reader.result;
            iframe.width = '100%';
            iframe.height = '500px';
            fileDisplayArea.innerHTML = '';
            fileDisplayArea.appendChild(iframe);
            document.getElementById('icon').style.display = "none"
            fileDisplayArea.style.display= 'block'
        } else {
            var text = document.createTextNode(file.name + ' (' + file.type + ')');
            fileDisplayArea.innerHTML = '';
            fileDisplayArea.appendChild(text);
        }
    };

    reader.readAsDataURL(file);
})