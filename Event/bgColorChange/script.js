//generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0;i<6;i++){
        color+=Math.floor(Math.random()*16)
    }
    return color;
};

// const startChangingColor = function(){
//     setInterval(changeBgColor,1000);

//     function changeBgColor(){
//         document.body.style.backgroundColor = randomColor();
//     }
// };
document.querySelector('#start').addEventListener('click',function(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
   const stopChanging = setInterval(changeBgColor,1000);

    document.querySelector('#stop').addEventListener('click',function(){
        clearInterval(stopChanging);
})
});


