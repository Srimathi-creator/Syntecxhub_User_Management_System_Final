const API_URL = "http://localhost:5000/api/users";

// Basic Authentication
const authHeader = "Basic " + btoa("admin:1234");

const userTable = document.getElementById("userTable");
const userForm = document.getElementById("userForm");

let editId = null;

// Load Users
async function loadUsers() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: authHeader,
      },
    });

    const users = await response.json();

    userTable.innerHTML = "";

    users.forEach((user) => {
      userTable.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.age}</td>
          <td>
            <button
              class="btn btn-warning btn-sm me-2"
              onclick="editUser('${user._id}','${user.name}','${user.email}','${user.age}')"
            >
              Edit
            </button>

            <button
              class="btn btn-danger btn-sm"
              onclick="deleteUser('${user._id}')"
            >
              Delete
            </button>
          </td>
        </tr>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

// Add / Update User
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: document.getElementById("age").value,
  };

  try {
    if (editId) {
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify(user),
      });

      editId = null;
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify(user),
      });
    }

    userForm.reset();
    loadUsers();
  } catch (error) {
    console.log(error);
  }
});

// Delete User
async function deleteUser(id) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) return;

  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authHeader,
      },
    });

    loadUsers();
  } catch (error) {
    console.log(error);
  }
}

// Edit User
function editUser(id, name, email, age) {
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("age").value = age;

  editId = id;
}

// Initial Load
loadUsers();