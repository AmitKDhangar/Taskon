"use strict";
// Element Query
let searchResultContainer = document.body.querySelector(".search-results");
// signatures
let getfilteredList;
let searchData = localStorage.getItem("tasks");
let searchedData = JSON.parse(searchData);
let filtereddata = [];
let getsearchInput = (searchQuery) => {
    filtereddata = searchedData === null || searchedData === void 0 ? void 0 : searchedData.filter((data) => data.tasktitle.toLowerCase().includes(searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.toLowerCase()));
    if (filtereddata) {
        console.log(filtereddata);
        getfilteredList();
    }
};
getfilteredList = () => {
    var _a;
    filtereddata === null || filtereddata === void 0 ? void 0 : filtereddata.forEach((searchresults) => {
        var _a;
        let result = document.createElement("li");
        result.innerHTML = `
             <a href="mytasks.html">
             <div class="details">
              <div><img src="https://cdn-icons-png.flaticon.com/512/861/861627.png" class="search-icon">
              <p class="tasks-title">${searchresults === null || searchresults === void 0 ? void 0 : searchresults.tasktitle} - </p>
              <p class="tasks-description"> ${searchresults === null || searchresults === void 0 ? void 0 : searchresults.taskdes}</p></div>
              <div><img src="https://cdn-icons-png.flaticon.com/512/8564/8564010.png" class="searchdelete-icon"></div>
            </div>
             </a>`;
        (_a = searchResultContainer.firstElementChild) === null || _a === void 0 ? void 0 : _a.appendChild(result);
        // clear Searches
        const clearSearch = document.body.querySelector(".searchdelete-icon");
        clearSearch.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("searchquery");
        });
    });
    if (filtereddata.length <= 0) {
        const noresult = document.createElement("li");
        noresult.classList.add("notaskfound");
        noresult.innerHTML = `<div class="TaskNotFound"><img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"></img><p class="notask-found">No Task Found</p></div>`;
        (_a = searchResultContainer.firstElementChild) === null || _a === void 0 ? void 0 : _a.appendChild(noresult);
        if (filtereddata.length >= 1) {
            noresult.remove();
        }
    }
};
let search = localStorage.getItem("searchquery");
if (search) {
    getsearchInput(search);
}
