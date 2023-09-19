var isBlackBackground = false;

document.getElementById("btn1").addEventListener("click", function() {
    var shouldProceed = confirm("Əminsinizmi?");
    
    if (shouldProceed) {
        isBlackBackground = !isBlackBackground; // Fon rengini dəyişdiririk
        if (isBlackBackground) {
            document.body.style.backgroundColor = "black";
            document.getElementById("h3text").style.color = "white";
        } else {
            document.body.style.backgroundColor = "white"; // Fon rengini bəyaz etmək
            document.getElementById("h3text").style.color = "black"; // Mətn rengini qara etmək
        }
    }
});

var yas = prompt("Öz yaşınızı daxil edin:");

if (yas !== null) {
    yas = parseInt(yas);

    if (yas < 18) {
        alert("Xəbərdarlıq! Siz 18 yaşından kiçiksiniz. Xahiş edirik saytı tərk edəsiniz!");
    }
}

class User {
    constructor(ad, soyad, password) {
        this.ad = ad.toUpperCase(); // Adı mavi hərfli təyin edirik
        this.soyad = soyad.toUpperCase(); // Soyadı mavi hərfli təyin edirik
        this.password = password.toUpperCase(); // Şifrəni mavi hərfli təyin edirik
    }

    printUserInfoHTML() {
        document.getElementById("ad").textContent = this.ad;
        document.getElementById("soyad").textContent = this.soyad;
        document.getElementById("password").textContent = this.password;
    }
}

document.getElementById("btn2").addEventListener("click", function() {
    var user = new User("Farid", "Aliyev", "Farid1234567890)(*&^%$#@!");
    user.printUserInfoHTML();
});