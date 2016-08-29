var key = "";

console.log(localStorage);
console.log("STORAGE:" + localStorage.length);

for (var i = 0; i < localStorage.length; i++) {
  console.log(i);
  key = localStorage.key(i);
  $('body').append('<div class="focus-website"><p>' + key + '</p></div>');
}
