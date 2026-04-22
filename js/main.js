let email = document.querySelector('#email');
let password = document.querySelector('#password');
let gen = document.querySelector('.form span');
let show = document.querySelector('#showPassword');

gen && gen.addEventListener('click', () => { password.value = g(12, true) });
show && show.addEventListener('change', e => { password.type = e.target.checked ? 'text' : 'password' });
function g(l, s) {
 let c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
 if(s) c += "!@#$%^&*()_+[]{}|;:,.<>?";
 let p = "";
 for(let i=0; i<l; i++) {
 p += c.charAt(Math.floor(Math.random()*c.length));
 }
 return p;
}
