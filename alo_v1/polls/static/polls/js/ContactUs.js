function validation() {
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var error_message = document.getElementById('error_message');
    var text;

    error_message.style.padding = '10px';
    if (name.length < 3) {
        text = 'Lütfen Geçerli Bir İsim Giriniz';
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = 'Lütfen Geçerli Bir Konu Giriniz';
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = 'Lütfen Geçerli Bir Telefon Numarası Giriniz';
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf('@') == -1 || email.length < 6) {
        text = 'Lütfen Geçerli Bir E-mail Giriniz';
        error_message.innerHTML = text;
        return false;
    }
    if (message.length < 140) {
        text = 'Lütfen 140 Karakterden Daha Uzun Bir Mesaj Giriniz';
        error_message.innerHTML = text;
        return false;
    }
    document.getElementById('box').style.display = 'block';
    return false;
}

function pop() {
    document.getElementById('box').style.display = 'none';
}