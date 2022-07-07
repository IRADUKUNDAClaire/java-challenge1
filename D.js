let body=document.getElementsByTagName("body")[0];
console.log(body);
let form=document.createElement("form");
form.classList.add("form");
body.appendChild(form);
console.log(form);
form.setAttribute("id","form");
let fnamef=document.createTextNode("Firstname");
form.appendChild(fnamef);
let fname=document.createElement("input");
fname.setAttribute("type","text");
fname.classList.add("fname");
fname.setAttribute("placeholder","your firstname");
form.appendChild(fname);
let sd=document.createElement("br");
form.appendChild(sd);
let sdm=document.createElement("br");
form.appendChild(sdm);
let lnamef=document.createTextNode("Lastname");
form.appendChild(lnamef);
let lname=document.createElement("input");
lname.setAttribute("type","text");
lname.classList.add("lname");
lname.setAttribute("placeholder","your Lastname");
form.appendChild(lname);
let sdf=document.createElement("br");
form.appendChild(sdf);
let sdp=document.createElement("br");
form.appendChild(sdp);
let emailf=document.createTextNode("Your email");
form.appendChild(emailf);
let email=document.createElement("input");
email.setAttribute("type","email");
email.classList.add("email");
email.setAttribute("placeholder","email");
form.appendChild(email);
let sdn=document.createElement("br");
form.appendChild(sdn);
let sdr=document.createElement("br");
form.appendChild(sdr);
let passwordf=document.createTextNode("Password");
form.appendChild(passwordf);
let password=document.createElement("input");
password.setAttribute("type","password");
password.classList.add("lname");
password.setAttribute("placeholder","password");
form.appendChild(password);
let s=document.createElement("br");
form.appendChild(s);
let t=document.createElement("br");
form.appendChild(t);
let button=document.createElement("input");
form.appendChild(button);
button.setAttribute("type","submit");
function Address(fname,lname,password,email){
    this.fname= fname;
    this.lname= lname;
    this.password= password;
    this.email= email;
}

button.addEventListener("click",function(e){
    e.preventDefault();
 let myForm=new Address(fname.value,lname.value,password.value,email.value);

    for(let id in myForm){
        console.log(`${id}: ${myForm[id]}`);
    } 
    fname.value="";
    lname.value="";
    password.value="";
    email.value="";
    
})