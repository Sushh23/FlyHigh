const checkboxes = document.querySelectorAll('.box');
const bookbutton = document.getElementById('next_button');
const adults = parseInt(localStorage.getItem('adults'),10);
const children = parseInt(localStorage.getItem('children'),10);
const infant = parseInt(localStorage.getItem('infant',10));
const totalpass = adults+children+infant;

checkboxes.forEach(checkbox =>{
    checkbox.addEventListener('change',changeButton);

});

function changeButton(){
    const selectedBoxes = document.querySelectorAll('.box:checked');
    if(selectedBoxes.length===totalpass)       // ===is for perfect equal sign even checking data types
    {
        bookbutton.removeAttribute('disabled');
    }
    else{
        bookbutton.setAttribute('disabled','disabled');
    }
}

