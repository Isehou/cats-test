document.addEventListener("DOMContentLoaded", getCat);

function getCat() {
  let statusCode = document.getElementById("statusCodeInput").value;
  let url = "https://http.cat/" + statusCode + ".jpg";
  document.getElementById("catImg").src = url;

  localStorage.setItem("currentCode", statusCode);

  let recentCode = JSON.parse(localStorage.getItem("recentCode")) || [];
  recentCode.unshift(statusCode);
  recentCode = recentCode.slice(0, 5);
  localStorage.setItem("recentCode", JSON.stringify(recentCode));

  updateRequest();

  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Ошибка сети");
  //       }
  //       return response.blob();
  //     })
  //     .then((blob) => {
  //       let catImg = URL.createObjectURL(blob);
  //       document.getElementById("catImg").srcObject = catImg;
  //       saveRequest(statusCode);
  //     })
  //     .catch((error) => console.error("Ошибка:", error));
}

function updateRequest() {
  let recentCode = JSON.parse(localStorage.getItem("recentCode")) || [];
  let lastElem = document.getElementById("lastCodes");
  lastElem.innerHTML = "";
  lastElem.textContent = recentCode.join(", ");
}

// function saveRequest() {
//   let recentCodes = document.getElementById("statusCodeInput").value;
//   console.log(recentCodes);
//   localStorage.setItem("recentCodes", recentCodes);
//   updateSavedRequest();
// }
