"use strict";

var searchInput = document.querySelector("#searchInput");
var searchBtn = document.querySelector("#searchButton");
var clearInput = document.querySelector("#clearInput");

searchInput.addEventListener("keydown", function () {
    if (!searchInput.value) {
        searchInput.classList.remove("has-input");
        clearInput.classList.add("hidden");
    }

    if (searchInput.value) {
        searchInput.classList.add("has-input");
        clearInput.classList.remove("hidden");
    }
});

clearInput.addEventListener("click", function () {
    searchInput.value = "";
    clearInput.classList.add("hidden");
});

// searchBtn.addEventListener("click", function(){

// })
//# sourceMappingURL=main.js.map
