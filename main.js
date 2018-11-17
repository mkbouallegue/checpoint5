// function myFonction() {
//     var text = document.getElementById ('n').style.fontWeight ='bold';
// }
// function myStyle() {
//     var text = document.getElementById('n').style.fontStyle='italic';
// }
// function mySous() {
//     var text = document.getElementById('n').style.textDecoration='Underline';
// }
// function myCenter() {
//     var text = document.getElementById('n').style.textAlign='center';
// }

// function myFont() {
//     var font = document.getElementById("listFonts").value
//     document.getElementById('n').style.fontFamily = font
// }

// function myNumb() {
//     var numero = document.getElementById('listNumb').value
//     document.getElementById('n').style.fontSize = numero
// }
$(document).ready(function(){
    console.log('eee')
    $('#I').click(function(){
        
        $('#n').css('font-style', 'italic');
    });
    $('#S').click(function(){
        $('#n').css('text-decoration', 'underline');
    });
    $('#C').click(function(){
        $('#n').css('text-align', 'center');
    });
    $('#G').click(function(){
        console.log("ttt")
        $('#n').css('font-weight', 'bold');
        
    });
    $("#listfont").change(function(){
        $('#n').css('font-family', $('#listfont').val() )
    });
    $("#listnumb").change(function(){
        $('#n').css('font-size', $('#listnumb').val() )
    });

        
})



