document.getElementById("root").innerHTML = "Hello Vanilla!";

const getApi = async () => {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();
  console.log("Users befor adding Nasim:", users);
  return users;
};

//Posting new user to API:
const postAPI = async () => {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({
      id,
      first_name,
      last_name,
      username,
      email,
      avatar,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resaddedUsers = await response.stringify();
  return resaddedUsers;
};

const newUsers = await postAPI({
  id: 4,
  first_name: "Nasim",
  last_name: "Ahmadi",
  username: "nasimA",
  email: "nasim.a@gmail.com",
  avatar: "",
  password: "Ahmadi",
});

console.log("Users befor adding Nasim:", newUsers);
