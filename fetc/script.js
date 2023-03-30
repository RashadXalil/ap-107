const body = document.getElementById("tbody");

fetch("db.json")
  .then((res) => res.json())
  .then((data) => {
    const { users } = data;
    let innerHTML = "";
    for (let i = 0; i < users.length; i++) {
      innerHTML += `<tr>
        <th scope="row">${users[i].id}</th>
        <td>${users[i].name}</td>
        <td>${users[i].surname}</td>
        <td>${users[i].email}</td>
      </tr>`;
    }
    body.innerHTML = innerHTML
  });
