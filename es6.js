const randomUser = () => {
  fetch("https://randomuser.me/api/?results=500")
    .then((res) => res.json())
    .then((data) => displayBuddis(data));
};
randomUser();

const displayBuddis = (data) => {
  const displayName = document.getElementById("randomUser");
  const buddies = data.results;
  for (let i = 0; i < buddies.length; i++) {
    const result = buddies[i];
    const li = document.createElement("li");
    li.innerText = `Email : ${result.email}`;
    displayName.appendChild(li);

    const p = document.createElement("p");
    p.innerText = `Name :${result.name.title} ${result.name.first} ${result.name.last}`;
    displayName.appendChild(p);
  }
};
