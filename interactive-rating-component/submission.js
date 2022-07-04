const span = document.querySelector("#rating");
const params = new URLSearchParams(location.search);
span.innerHTML = params.get("rating");
