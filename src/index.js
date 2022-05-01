// access = pkjAMeRj4J4KosLSdVV2qbg1T0Kr0o_XvCeQ1eJvLsU
// secret = PmFFmUE5jD7-n2orry0oUfmp-K4CcL7doN2v2GNlq8I

// link = https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=pkjAMeRj4J4KosLSdVV2qbg1T0Kr0o_XvCeQ1eJvLsU
const API = "pkjAMeRj4J4KosLSdVV2qbg1T0Kr0o_XvCeQ1eJvLsU";

import { navbar } from "../components/navbar.js";

import "../styles/index.css"
import "../styles/navbar.css"

let n = document.querySelector("#navbar"); //here it shows the navbar already defined error so keep in mind and change if require. don't waste your time

n.innerHTML = navbar();

import { searchImages, append , sorting, filtering } from "./fetch.js";





let search = (e) => {
  if (e.key === "Enter") {
    let value = document.querySelector("#query").value; //also we can use onkeypress function check w3 school
    searchImages(API, value).then((data) => {
      //console.log(data);
      let container = document.querySelector("#container");
      container.innerHTML = null;
      append(data.results, container);
    });
  }
};

document.querySelector("#query").addEventListener("keydown", search);

let category = document.querySelector("#category").children;

//console.log(category)

function cSearch() {
  //console.log(this.id);
  searchImages(API, this.id).then((data) => {
    console.log(data);
    let container = document.querySelector("#container");
    container.innerHTML = null;
    append(data.results, container);
  });
}

for (let el of category) {
  el.addEventListener("click", cSearch);
}

// h3 = {                it is for explanation of id
//     id: "nature";
//     cSearch()
// }
// let searchImages = async () =>{
//     let value = document.querySelector("#query").value

//     try{
//         let res = await fetch(
//             ` https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`);

//             let data = await res.json();
//             console.log(data)
//     } catch (err){
//         console.log(err);
//     }
// }

let srt = () =>{
  let sort = document.querySelector("#sort").value
  let value = document.querySelector("#query").value; //also we can use onkeypress function check w3 school

  sorting(value,API,sort).then((data) => {
    
    console.log(data);
    let container = document.querySelector("#container");
    container.innerHTML = null;
    append(data.results, container);
  });
}
document.querySelector("#sort").addEventListener("change",srt)


let fltr = () =>{
  let filter = document.querySelector("#filter").value
  let value = document.querySelector("#query").value; //also we can use onkeypress function check w3 school

  filtering(value,API,filter).then((data) => {
    
    //console.log(data);
    let container = document.querySelector("#container");
    container.innerHTML = null;
    append(data.results, container);
  });
}
document.querySelector("#filter").addEventListener("change",fltr);











