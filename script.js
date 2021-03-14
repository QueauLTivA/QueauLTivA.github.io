function receiver(event) {
    if (event.origin == 'https://queaultiva.github.io') {
        if (event.data == 'AccountPageV2') {
          var val = document.getElementById('name').value;
          event.source.postMessage(val, event.origin);
        }
        else {
            alert(event.data);
        }
    }
}
window.addEventListener('message', receiver, false);
