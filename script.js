const mail = document.getElementById('email');
const pays = document.getElementById('pays');
const zip = document.getElementById('postalCode');
const password = document.getElementById('mdp');
const confirmPassword=document.getElementById('mdpConfirm');
const btnSub = document.querySelector("button");

mail.addEventListener('input', ()=>
{
    mail.setCustomValidity("");
    if (mail.checkValidity())
    {
        mail.classList.remove('invalid');
        mail.classList.add('valid');
    }
    else
    {
        mail.classList.remove('valid');
        mail.classList.add('invalid');
    }
})
pays.addEventListener('input',()=>
{
    pays.setCustomValidity("");
    if (pays.checkValidity() && verifPays(pays.value))
    {
        pays.classList.remove('invalid');
        pays.classList.add('valid');
    }
    else
    {
        pays.classList.remove('valid');
        pays.classList.add('invalid');
    }
})
zip.addEventListener('input', ()=>
{
    zip.setCustomValidity("")
    if (zip.checkValidity() && verifZIP(zip.value))
    {
        zip.classList.remove('invalid');
        zip.classList.add('valid');
    }
    else
    {
        zip.classList.remove('valid');
        zip.classList.add('invalid');
    }
})
let mdp="";
password.addEventListener('input', ()=>
{
    password.setCustomValidity("")
    if (password.checkValidity() && verifMajMin(password.value) && verifCharSpe(password.value) && verifNb(password.value))
    {
        password.classList.remove('invalid');
        password.classList.add('valid');
    }
    else
    {
        password.classList.remove('valid');
        password.classList.add('invalid');
    }
    mdp=password.value;
})
confirmPassword.addEventListener('input', ()=>
{
    confirmPassword.setCustomValidity("")
    if (confirmPassword.checkValidity() && confirmPassword.value==mdp)
    {
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
    }
    else
    {
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
    }
})
function verifPays(chaine)
{
    return /^[A-Z]/.test(chaine) && !/[0-9]/.test(chaine);
}
function verifZIP(chaine)
{
    return /^\d{5}$/.test(chaine);
}
function verifMajMin(chaine)
{
    return /[a-z]/.test(chaine) && /[A-Z]/.test(chaine);
}
function verifMin(chaine)
{
    return /[a-z]/.test(chaine);
}
function verifMaj(chaine)
{
    return /[A-Z]/.test(chaine);
}
function verifCharSpe(chaine)
{
    return /[^a-zA-Z0-9]/.test(chaine);
}
function verifNb(chaine)
{
    return /[0-9]/.test(chaine);
}
const form= document.querySelector("form");
btnSub.addEventListener('click',(e)=>
{
    e.preventDefault();
    mail.setCustomValidity("");
    pays.setCustomValidity("");
    zip.setCustomValidity("");
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
    confirmPasswordError();
    passwordError();
    zipError();
    paysError();
    mailError();
    if (mail.className=="valid" && pays.className=="valid" && zip.className=="valid" && password.className=="valid" && confirmPassword.className=="valid")
    {
        form.reset();
        mail.classList.remove("valid");
        zip.classList.remove("valid");
        pays.classList.remove("valid");
        password.classList.remove("valid");
        confirmPassword.classList.remove("valid");
    }
})
function mailError()
{
    if(mail.validity.valueMissing)
    {
        mail.setCustomValidity("le mail ne doit pas être vide");
    }
    else if (mail.validity.typeMismatch)
    {
        mail.setCustomValidity("format de l'adresse email invalide");
    }
    else
    {
        mail.setCustomValidity("");
    }
    mail.reportValidity();
}
function paysError()
{
    if (pays.validity.valueMissing)
    {
        pays.setCustomValidity("le pays ne doit pas être vide");
    }
    else if (!verifPays(pays.value))
    {
        pays.setCustomValidity("le pays doit commencer par une majuscule");
    }
    else
    {
        pays.setCustomValidity("")
    }
    pays.reportValidity();
}
function zipError()
{
    if (zip.validity.valueMissing)
    {
        zip.setCustomValidity("le code postal ne doit pas être vide");
    }
    else if (!verifZIP(zip.value))
    {
        zip.setCustomValidity("le code postal doit etre composé d'exactement 5 chiffres");
    }
    else
    {
        zip.setCustomValidity("")
    }
    zip.reportValidity();
}
function passwordError()
{
    if (password.validity.valueMissing)
    {
        password.setCustomValidity("le mot de passe ne doit pas être vide");
    }
    else if (password.validity.rangeUnderflow)
    {
        password.setCustomValidity("le mot de passe est trop court");
    }
    else if (!verifMaj(password.value))
    {
        password.setCustomValidity("le mot de passe doit contenir au moins une majuscule");
    }
    else if (!verifMin(password.value))
    {
        password.setCustomValidity("le mot de passe doit contenir au moins une minuscule");
    }
    else if (!verifNb(password.value))
    {
        password.setCustomValidity("le mot de passe doit contenir au moins un chiffre");
    }
    else if (!verifCharSpe(password.value))
    {
        password.setCustomValidity("le mot de passe doit contenir au moins un charactère spécial");
    }
    else
    {
        password.setCustomValidity("")
    }
    password.reportValidity();
}
function confirmPasswordError()
{
    if (confirmPassword.validity.valueMissing)
    {
        confirmPassword.setCustomValidity("veuillez confirmez votre mot de passe");
    }
    else if (confirmPassword.value!=mdp)
    {
        confirmPassword.setCustomValidity("les mots de passe ne correspondent pas");
    }
    else{
        confirmPassword.setCustomValidity("")
    }
    confirmPassword.reportValidity();
}