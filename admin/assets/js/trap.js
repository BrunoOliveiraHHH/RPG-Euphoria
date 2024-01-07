let tab = document.getElementById('tab');
document.querySelector("#btn-submit").addEventListener("click", (e) => {
  var json = teste();
tab.innerHTML = json;

});



function teste() {
  let request = new XMLHttpRequest();
  request.open("GET", "http://localhost:8080/npc/consulta");
  request.send();  
  request.onload = () => {
    if (request.status === 200) {
      console.log(JSON.parse(request.response));
      return JSON.parse(request.response);
    } else {
      console.log("Page not found"); // if link is broken, output will be page not found
      return "Nâo há dados cadastrados"
    }
  };
}
