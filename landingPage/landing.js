


const form = document.getElementById("Auth")
const emailDiv = document.getElementById("Email")
const passwordDiv = document.getElementById("Password")
const header = document.getElementById('head')
const emailBox = document.getElementById("EmailBox")
const passwordBox = document.getElementById("PasswordBox")
const invldEmail = document.getElementById("emailError")
const invldPassword= document.getElementById("passwordError")
const Submitmsg = document.getElementById('success')
const submitbtn = document.getElementById('Submit')


function isValidEmail(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(email)
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    if(submitbtn.innerText == "Logout"){
        emailDiv.style.display = "block"
        passwordDiv.style.display = "block"
        form.reset()
        submitbtn.innerText = 'Submit'
        header.innerText = 'User Login'
    }
    else{

        const email = emailBox.value.trim()
        const Password = passwordBox.value.trim()

        hasError = false
        invldEmail.style.display = 'none'
        invldPassword.style.display = 'none'
        Submitmsg.style.display = 'none'

        if(!email || !isValidEmail(email)){
            invldEmail.style.display = 'block'
            hasError = true
        }
        if(!Password){
            invldPassword.style.display = 'block'
            hasError = true
        }
        if(Password.length < 8){
            invldPassword.textContent = "Min of 8 chars"
            invldPassword.style.display = 'block'
            hasError = true
        }
        if(hasError) return

        submitbtn.disabled = true
        submitbtn.innerText = "Logging in..."
        const name = email.split("@")[0]

        setTimeout(() => {
            submitbtn.disabled = false
            submitbtn.innerText = "Logout"
            Submitmsg.style.display = "block"
            emailDiv.style.display = "none"
            passwordDiv.style.display = "none" 
            header.innerText = "Hello " + name

        }, 1500);

        setTimeout(() => {
            Submitmsg.style.display = "none"
        }, 3000);
    }






    
})

