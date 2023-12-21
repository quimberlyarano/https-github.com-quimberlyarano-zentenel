function submitPasscode() {
    const myPass = '1234'; // Passcode area
    const password = document.getElementById("pass").value;

    if (password === myPass) {
        window.location.href = "profilepage.html"; // file path through my  profile page
    } else if (password === '') {
        alert("Please enter the correct and required Passcode.");
    } else {
        alert("The Passcode is incorrect. Please try again.");
    }
}
