function reverse(text) {
    return text.split('').reverse().join('');
  }
  
  function scream(text) {
    return text.toUpperCase() + "!!!";
  }
  
  function drawOut(text) {
    return text.split('').join("...");
  }
  
  let textFunction = reverse; // default value

  function updateText () {
    let userInput = $('#user-input').val()
    let reverseInput = textFunction(userInput)
    $('#transformed').text(reverseInput)
  }

  $('input[type=radio').click(function (){
    

  })