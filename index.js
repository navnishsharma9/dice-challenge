// code for dice 1 i.e. left dice.

// var randomNumber1 = Math.floor(Math.random()*6)+1;
// var randomImage1 = "images/dice" +randomNumber1+ ".png"
// // document.querySelector('.img1').setAttribute("src", randomImage1);
// $(".img1").attr("src", randomImage1);
// //  code for dice 2 i.e. right dice.

// var randomNumber2 = Math.floor(Math.random()*6)+1;
// var randomImage2 = "images/dice"+randomNumber2+ ".png";
// // document.querySelector(".img2").setAttribute("src", randomImage2);
// $(".img2").attr("src", randomImage2);



// if(randomNumber1>randomNumber2){
//     // document.querySelector("h1").innerHTML = "🚩Player 1 wins";
//     $("h1").html("🚩Player 1 wins");
// }else if (randomNumber1<randomNumber2){
//     // document.querySelector("h1").innerHTML = "Player 2 wins🚩"
//     $("h1").html("Player 2 wins🚩");
// }else{
//     // document.querySelector("h1").innerHTML = "Match Draw"
//     $("h1").html("Match draw")
// }

// // document.querySelector("button").addEventListener("click", function(){
// //     location.reload();
//     // history.go(0);
// })



var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice" +randomNumber1+ ".png"
$(".img1").attr("src", randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice"+randomNumber2+ ".png";
$(".img2").attr("src", randomImage2);

if(randomNumber1>randomNumber2){
    $("h1").html("🚩Player 1 wins");
}else if (randomNumber1<randomNumber2){
    $("h1").html("Player 2 wins🚩");
}else{
    $("h1").html("Match draw")
}

$("button").click(()=>{location.reload()});


