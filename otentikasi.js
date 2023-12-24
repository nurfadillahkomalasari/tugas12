const username ="fadillah"
const password ="212121"

function auth(){
    let userInput = document.getElementById('username').value
    let passwordImput = document.getElementById('password').value
    let form = document.getElementById('form')

if(userInput == username && passwordImput == password){
    alert("login berhasil") 
    form.submit()
} else{
    alert("login gagal!")
}
}