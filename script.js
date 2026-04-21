// LOGIN
const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === "admin@email.com" && password === "1234") {
      localStorage.setItem("user", email);
      window.location.href = "dashboard.html";
    } else {
      error.textContent = "Email ou senha inválidos!";
    }
  });
}

// MOSTRAR SENHA
function togglePassword() {
  const password = document.getElementById("password");
  password.type = password.type === "password" ? "text" : "password";
}

// DASHBOARD
const userEmail = document.getElementById("userEmail");

if (userEmail) {
  const user = localStorage.getItem("user");

  if (!user) {
    window.location.href = "index.html";
  } else {
    userEmail.textContent = "Logado como: " + user;
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}