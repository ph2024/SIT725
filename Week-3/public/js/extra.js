const clickMe = () => {
    alert("You have clicked a button.")
}

$(document).ready(function () {
    $('#button').click(() => {
        clickMe();
    })
});

const changeMe = () => {
    if (document.getElementById('changeColour').style.backgroundColor == 'red') {
        document.getElementById('changeColour').style.backgroundColor = 'blue';
        //alert("Colour is blue.")
    } else {
        document.getElementById('changeColour').style.backgroundColor = 'red';
        //alert("Colour is red.")
        };
    }

$(document).ready(function () {
    $('#changeColour').click(() => {
        changeMe();
    })
});