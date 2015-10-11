var firebaseURL = 'https://gdg-kobe-handson.firebaseio.com';
var ref = new Firebase(firebaseURL + '/message');
ref.on('value', function (snapshot) {
  var message = snapshot.val();
  if (message) {
    document.getElementById('date').innerHTML = new Date(message.date);
    document.getElementById('message').innerHTML = message.message;
    }
});
document.getElementById('message-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    ref.set({
      message: document.getElementById('message-input').value,
      date: Firebase.ServerValue.TIMESTAMP
    });
  });
