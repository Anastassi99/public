function postSubmit(ev, callback) {
    ev.preventDefault();
    var url = this.getAttribute('action');
    var form = this;
    var data = new FormData(this);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.response);
            if (!response.hasOwnProperty('error')) {
                callback(form, response);
            }
        }
    };
    xhttp.open("POST", url, true);
    xhttp.send(data);
}

function postFromLink(ev) {
    ev.preventDefault();
    var url = this.getAttribute('href');
    var element = this.parentElement;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            deleteListElement(element);
        }
    };
    xhttp.open("POST", url, true);
    xhttp.send();
}