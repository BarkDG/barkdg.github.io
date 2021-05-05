var disc_types = ['distance driver', 'putter', 'midrange', 'fairway driver'];
var disc_chars = ['understable', 'stable', 'overstable'];
var disc_throws = ['forehand hyzer', 'forehand anhyzer', 'roller', 'backhand hyzer', 'backhand anhyzer', 'hyzerflip'];


var disc_type = disc_types[Math.floor(Math.random()*disc_types.length)];
var disc_char = disc_chars[Math.floor(Math.random()*disc_chars.length)];
var disc_throw = disc_throws[Math.floor(Math.random()*disc_throws.length)];

document.getElementById("disc_type").innerHTML = disc_type;
document.getElementById("disc_char").innerHTML = disc_char;
document.getElementById("disc_throw").innerHTML = disc_throw;

