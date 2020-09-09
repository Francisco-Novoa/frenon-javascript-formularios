function deleteSelf(i) {
  users.splice(i, 1);
  localStorage.setItem("users", JSON.stringify(users));
  createUsers();
}

function createUsers() {
  document.querySelector("#list").innerHTML = "";
  users.map(({ email, name }, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href=# id=${i} class="user">
                      <div onclick=deleteSelf()>
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

let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("frm").addEventListener("submit", () => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  localStorage.setItem(
    "users",
    JSON.stringify([...users, { name: name, email: email }])
  );
  users = JSON.parse(localStorage.getItem("users")) || [];
  createUsers();
});

createUsers();
