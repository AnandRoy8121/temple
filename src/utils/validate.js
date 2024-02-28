export const validateForm = (email,password)=>{

    const isValidEmail = /^[\w\.-]+@[\da-zA-Z\.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isValidPassword = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@ "]).*$/.test(password)

    if(!isValidEmail) return "Please enter a valid email"
    if(!isValidPassword) return "Password should be combination of 8 characters with Upper, lower case and speacial character"

    return null
}