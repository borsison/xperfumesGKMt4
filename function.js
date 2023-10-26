
function add()
{
  var numOne, numTwo,numThree;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  numThree= parseInt(document.getElementById("third").value);
  numFour= parseInt(document.getElementById("four").value);


  var Roa= numOne *(100- numTwo)/numTwo;
  function cusround(answer1,dec){dec=Math.pow(10,dec); return Math.round(Roa*dec)/dec;}
  var roundNumber=cusround(Roa,0)
  document.getElementById("answer1").value = roundNumber;
 
  var mixq=numOne + roundNumber;
  document.getElementById("answer2").value = mixq;

var numbott=mixq/numThree;
 function cusround2(answer3,dec){dec=Math.pow(10,dec); return Math.round(numbott*dec)/dec;}
  var roundNumber2=cusround2(numbott,1)
 document.getElementById("answer3").value = roundNumber2;

  var mixq=numOne + roundNumber;
  document.getElementById("answer2").value = mixq;

var numbott=mixq/numThree;
 function cusround2(answer3,dec){dec=Math.pow(10,dec); return Math.round(numbott*dec)/dec;}
  var roundNumber2=cusround2(numbott,1)
 document.getElementById("answer3").value = roundNumber2;
}

function result_gram()
{
  var numOne, numTwo,numThree;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  numThree= parseInt(document.getElementById("third").value);
  numFour= parseInt(document.getElementById("four").value);

  var RoaG= 0.79*numOne *(100- numTwo)/numTwo;
  function cusround(answer4,dec){dec=Math.pow(10,dec); return Math.round(RoaG*dec)/dec;}
  var roundNumber=cusround(RoaG,0)
  document.getElementById("answer4").value = roundNumber;

var mixqG=(numOne + roundNumber)*0.79;
  document.getElementById("answer5").value = mixqG;

var numbott=mixqG/numFour;
 function cusround2(answer6,dec){dec=Math.pow(10,dec); return Math.round(numbott*dec)/dec;}
  var roundNumber2=cusround2(numbott,1)
 document.getElementById("answer6").value = roundNumber2;
}

function text_length()
{
document.getElementById("first").setAttribute('size', '3');
document.getElementById("second").setAttribute('size', '3');
document.getElementById("third").setAttribute('size', '3');
document.getElementById("four").setAttribute('size', '3');

document.getElementById("answer1").setAttribute('size', '3');
document.getElementById("answer2").setAttribute('size', '3');
document.getElementById("answer3").setAttribute('size', '3');
document.getElementById("answer4").setAttribute('size', '3');
document.getElementById("answer5").setAttribute('size', '3');
document.getElementById("answer6").setAttribute('size', '3');

}

