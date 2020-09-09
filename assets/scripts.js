let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("frm").addEventListener("submit", () => {
  event.preventDefault();
  localStorage.setItem(
    "users",
    JSON.stringify([
      ...users,
      { name: event.target.name.value, email: event.target.email.value },
    ])
  );
  users.append({
    name: event.target.name.value,
    email: event.target.email.value,
  });
  if (document.getElementById("notification").innerHTML) {
    document.getElementById("notification").innerHTML = "";
  }
  createUserList();
});
createUserList();
showNotification();

function deleteSelf(i) {
  users.splice(i, 1);
  localStorage.setItem("users", JSON.stringify(users));
  showNotification();
  createUserList();
}

function createUserList() {
  document.querySelector("#list").innerHTML = "";
  users.map(({ email, name }, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href=# class="user">
                        <div onclick=deleteSelf(${i})>
                          <ion-icon name="trash-outline"">
                          </ion-icon>
                        </div>
                        <div>
                          <h6>Name: ${name}</h6>
                          <h6>Email: ${email}</h6>
                        </div>
                    </a>`;
    document.querySelector("#list").appendChild(li);
  });
}

function showNotification() {
  if (users.length === 0) {
    document.getElementById("notification").innerHTML =
      "Que esperas, ingresa un Usuario!";
  }
}
