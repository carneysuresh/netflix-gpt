export const validate = (email,password,name) => {
    
const isEmailValid= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordvalid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
const isNamevalid = /^[A-Za-z]+([ '-][A-Za-z]+)*$/.test(name);

if(!isEmailValid) return "Email is not valid";
if(!isPasswordvalid) return "Password is not valid";
if(!isNamevalid) return "please enter name "

return null;
}
