
//Object Constructor
class User {
    constructor(email, password, firstName, lastName, age, address, phoneNumber, payment, color) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.payment = payment;
        this.color = color;

    }
}



//Register function
function register(){
    let userName = $("#txtEmail").val();
    let userPassword = $("#txtPassword").val();
    let userFirstName = $("#txtFirstName").val();
    let userLastName = $("#txtLastName").val();
    let userAge = $("#txtAge").val();
    let userAddress = $("#txtAddress").val();
    let userPhoneNumber = $("#txtPhoneNumber").val();
    let userPayment = $("#txtPayment").val();
    let userColor = $("#txtColor").val();

    console.log(userName,userPassword,userFirstName,userLastName,userAge,userAddress,userPhoneNumber,userPayment,userColor);

    ///////////////////////////////////////////////////////////////////////////
    // Creating the object
    ///////////////////////////////////////////////////////////////////////////
    let newUser = new User(userName,userPassword,userFirstName,userLastName,userAge,userAddress,userPhoneNumber,userPayment,userColor);

    ///////////////////////////////////////////////////////////////////////////
    // Clear the inputs
    ///////////////////////////////////////////////////////////////////////////
    $('input').val("");
    console.log(newUser);

}



function init(){
    console.log("Register");

    //Hook events
    $("#btbRegister").click(register);


}


window.onload=init;