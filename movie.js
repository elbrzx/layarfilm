// movie.js
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const movies = {
  snowwhite: {
    title: "Snow White (2025)",
    genre: "Fantasy, Adventure",
    duration: "1h 45min",
    description: "A live-action reimagining of Disney's classic fairytale about a young princess and seven quirky dwarfs.",
    poster: "img/snowwhite.jpg",
    downloadLink: "#"
  },
  spiderman: {
    title: "Spider-Man: Beyond the Web",
    genre: "Action, Superhero",
    duration: "2h 10min",
    description: "Peter Parker swings back into action in this epic sequel...",
    poster: "img/spiderman.jpg",
    downloadLink: "#"
  },
  minecraft: {
    title: "Minecraft: The Movie",
    genre: "Animation, Adventure",
    duration: "1h 30min",
    description: "An epic journey through the pixelated world of Minecraft.",
    poster: "img/minecraft.jpg",
    downloadLink: "#"
  },
  wicked: {
    title: "Wicked",
    genre: "Musical, Fantasy",
    duration: "2h 5min",
    description: "The untold story of the witches of Oz.",
    poster: "img/wicked.jpg",
    downloadLink: "#"
  },
  venom: {
    title: "Venom: The Reckoning",
    genre: "Action, Sci-Fi",
    duration: "1h 50min",
    description: "Eddie Brock faces a new threat as Venom returns.",
    poster: "img/venom.jpg",
    downloadLink: "#"
  }
};

const data = movies[movieId];

if (data) {
  document.querySelector(".detail-poster").src = data.poster;
  document.querySelector(".detail-poster").alt = data.title;
  document.querySelector("h1").textContent = data.title;
  document.querySelector(".genre").textContent = data.genre;
  document.querySelector(".duration").textContent = data.duration;
  document.querySelector(".description").textContent = data.description;
  document.querySelector(".download-btn").href = data.downloadLink;
} else {
  document.querySelector(".movie-detail").innerHTML = `<p style="color:red">Movie not found.</p>`;
}

// Basic comment functionality
const form = document.getElementById("comment-form");
const list = document.getElementById("comment-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("username").value;
  const comment = document.getElementById("comment").value;

  const li = document.createElement("li");
  li.textContent = `${name}: ${comment}`;
  list.appendChild(li);

  form.reset();
});
