function dis(val){
  var vue=document.getElementById('res');
  vue.value+=val;
}

function movespace() {
  var ev = document.getElementById('res');
  ev.value = ev.value.slice(0, -1);}

  function result() {
    var num1 = document.getElementById('res').value;
    try {
       var num2 = eval(num1.replace('x', '*'));
       document.getElementById('res').value = num2;
    } catch {
       document.getElementById('res').value = 'Error';
    }
 }
 document.addEventListener('keydown', function (event) {


  const key = event.key;
  const validKeys = '0123456789+-*/.%';
  if (validKeys.includes(key)) {
     dis(key === '*' ? 'x' : key);
  } else if (key === 'Enter') {
     result();
  } else if (key === 'Backspace') {
     movespace();
  } else if (key.toLowerCase() === 'c') {
      document.getElementById('res').value='';}
  
});


  