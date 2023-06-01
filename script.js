document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var password = document.getElementById("passwordInput").value;
    if (password === "18622") {
        window.location.href = "https://drive.google.com/file/d/1Y13ySPj9RfY8tUo9vgz_9iE30jTeJJkM/view?usp=sharing"; // Replace with your desired URL
    } else {
        document.getElementById("result").innerHTML = " 🙂 مش الباس ده ";
        document.getElementById("passwordInput").value = "";

    }
});
