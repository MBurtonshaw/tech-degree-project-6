/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
const li = document.getElementsByClassName("student-item");
const studentsPerPage = 10;

function searchBar(list) {
    //Setting up divs and variables to create, define, and append a search bar and submit button
    const header = document.getElementsByClassName("page-header")[0];
    const searchDiv = document.createElement("DIV");
    searchDiv.className = "student-search";
    const searchText = document.createElement("input");
    const submitButton = document.createElement("button");
    
    searchText.type = "text";
    searchText.id = "searchText";
    searchText.className = "input";
    searchText.placeholder = "Search for students...";
    submitButton.textContent = "Search";
    submitButton.className = "button";
    header.appendChild(searchDiv);
    searchDiv.appendChild(searchText);
    searchDiv.appendChild(submitButton);
    let searchBar = document.getElementById("searchText");
    let searchButton = document.querySelector("button");
    //Adding functionality to the search button
    searchButton.addEventListener("click", e => {
        //Checking to see if "No results found" message is being repeated. If so, it's deleted
        let divCheck = document.getElementById("errorDiv");
        if (divCheck !== null) {
            divCheck.parentNode.removeChild(divCheck);
        }
        //Creates array for filtering results, and sets the search button as the event target
        let filterList = [];
        searchButton = e.target;
        let submit = searchBar.value;
        //Loop is to hide list items, then take search input, check if it matches with any list items, and if so, adds them to filterList array
        for (let k = 0; k < list.length; k++) {
            list[k].style.display = "none";
            const title = document.getElementsByTagName("h3")[k].textContent;
            if (title.toLowerCase().includes(submit.toLowerCase())) {
                filterList.push(list[k]);
            }
        }
        //Conditional statement to check if whatever was entered into the search bar matches with the item added to filterList
        //If not, then an error message appears
        if (filterList.length === 0) {
            let errorDiv = document.createElement("div");
            errorDiv.id = "errorDiv";
            let otherDiv = document.getElementsByClassName("page")[0];
            let paginationDiv = document.getElementsByClassName(
                "pagination"
            )[0];
            otherDiv.appendChild(errorDiv);
            otherDiv.insertBefore(errorDiv, paginationDiv);
            errorDiv.id = "errorDiv";
            errorDiv.innerHTML = "<p>" + "No results found" + "</p>";
        }
        //Calls upon showPage() and appendPageLinks() with the parameter of filterList
        //This means that whatever is within the filterList array appears on the screen (otherwise, error message)
        showPage(filterList, 1);
        appendPageLinks(filterList);
    });
}
//Main function to display list items to the page
function showPage(list, page) {
    //Sets number of list items per page; example: page (1-1) * 10 = 0... 0 + 10 = 10... 0-10 items
    let begin = (page - 1) * studentsPerPage;
    let end = begin + studentsPerPage;
    for (let i = 0; i < list.length; i++) {
        //Loop checks to see how many list entries appear, and sets them to "show" ten per page, or however many, but no more than ten per page
        if (i >= begin && i < end) {
            list[i].style.display = "block";
        } else {
            list[i].style.display = "none";
        }
    }
}
//Main function to add pagination buttons near the bottom of the screen
function appendPageLinks(list) {
    //Selecting div containing pagination buttons upon page load
    let divCheck = document.getElementById("newDiv");
    //Conditional statement put in place to make sure page buttons aren't repeated, mostly for after a search execution
    if (divCheck !== null) {
        divCheck.parentNode.removeChild(divCheck);
    }
    //Creating, defining, and appending divs that will hold pagination buttons
    let otherDiv = document.getElementsByClassName("page")[0];
    let newDiv = document.createElement("DIV");
    newDiv.className = "pagination";
    newDiv.id = "newDiv";
    let ul = document.createElement("UL");
    newDiv.appendChild(ul);
    otherDiv.appendChild(newDiv);
    //Loop is to set the number of pages based on totalPages, then creates a page button corresponding to each
    let totalPages = Math.ceil(list.length / studentsPerPage);
    for (i = 0; i < totalPages; i++) {
        let button = document.createElement("LI");
        let a = document.createElement("A");
        ul.appendChild(button);
        button.appendChild(a);
        a.className = "paginationButtons";
        a.textContent = i + 1;
        a.href = "#";
        //Sets first page button class to "active" upon page loading
        let oneButton = document.getElementsByTagName("a")[0];
        oneButton.className = "active";
        //Adding function to the buttons
        button.addEventListener("click", e => {
            let buttons = document.getElementsByTagName("a");
            //Loop removes class name from all pagination buttons
            for (let i = 0; i < totalPages; i++) {
                buttons[i].className = "";
            }
            //pageButton specifies which button is the one being clicked, and changes it's class name to "active," and shows corresponding page
            const pageButton = e.target;
            pageButton.className = "active";
            showPage(list, pageButton.textContent);
        });
    }
}
//Calling and setting up functions for the initial loading of the page
appendPageLinks(li);
showPage(li, 1);
searchBar(li);
