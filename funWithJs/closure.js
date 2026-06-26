function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myfun = makeFunc();
myfun();

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('pink').onclick = clickHandler("pink")
