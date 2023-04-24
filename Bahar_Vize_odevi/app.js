var users = [
  {
    name: "Atakan Adalı",
    photo: "img/img3.png",
    desc: "Full Stack Developer",
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Furkan Çakmaker",
    photo: "img/img1.jpg",
    desc: "Back-End Developer",
    skills: ["Javascript", "Python"],
  },
  {
    name: "Elif Uğurel",
    photo: "img/img2.jpg",
    desc: "Front-End Developer",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
];
document.getElementById("proje").addEventListener("click", function() {
  var searchValue = document.getElementById("ödev").value.toLowerCase();
  var matchingUsers = users.filter(function(user) {
    return user.name.toLowerCase().indexOf(searchValue) !== -1;
  });

  if (matchingUsers.length === 0) {
    alert("Kullanıcı Bulunamadı..");
    location.reload();
  }

});
var searchButton = document.getElementById("proje");
var searchInput = document.getElementById("ödev");
var resultsContainer = document.getElementById("eleman");

searchButton.addEventListener("click", () => {
  var searchTerm = searchInput.value.toLowerCase();
  var filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  proje.style.display = "none";
  ödev.style.display = "none";
  var userElements = filteredUsers.map((user) => {
    return `
      <div class="user-card">
        <img src="${user.photo}" alt="${user.name}" />
        <h2>${user.name}</h2>
        <p>${user.desc}</p>
        <ul>
          ${user.skills.map((skill) => `<li>${skill}</li>`).join("")}
          
        </ul>
        
         <button id="#" onclick="window.location.reload(false)">Tekar Ara</button>
      </div>
    `;
  });
  resultsContainer.innerHTML = userElements.join("");
});
