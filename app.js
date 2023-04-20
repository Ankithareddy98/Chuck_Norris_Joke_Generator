document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
 const number = document.querySelector('input[type="number"]').value;

 const xhr = new XMLHttpRequest();

 //http://api.icndb.com/jokes/random/${number}

 xhr.open('GET', `https://api.chucknorris.io/jokes/random`, true);

 xhr.onload = function (){
  if(this.response === 200){
    const response = JSON.parse(this.responseText);

    let output = '';

    if(response.type === 'success'){
      response.value.forEach(function(joke){
        output += `<li>${joke.joke}</li>`;
      });
    }
    else {
      output += '<li>something went wrong</li>';
    }

    document.querySelector('ul.jokes').innerHTML = output;
  }
 }

 xhr.send();
 e.preventDefault();
}
