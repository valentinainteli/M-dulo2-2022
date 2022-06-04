var in01
var in02
var temp 

// function trocar(){
//     in01 = document.getElementById('1').value;
//     in02 = document.getElementById('2').value;
//     temp = in01;
//     in01 = in02;
//     in02 = temp;
//     document.getElementById('1').value = in01;
//     document.getElementById('2').value = in02;
// }

function trocar(){
    [ document.getElementById('1').value,  document.getElementById('2').value ] =
        [ document.getElementById('2').value,  document.getElementById('1').value ];
}