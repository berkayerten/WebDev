const selectedAll = document.querySelectorAll(".selected");

const name = document.getElementById("name");
const password = document.getElementById("password");
const errorElement = document.getElementById("error");

const trafikform = document.getElementById("Etrafik-content-box");
const saglikform = document.getElementById("Eosaglik-content-box");
const daskform = document.getElementById("Edask-content-box");

selectedAll.forEach((selected) => {
    const optionsContainer = selected.previousElementSibling;
    const searchBox = selected.nextElementSibling;

    const optionsList = optionsContainer.querySelectorAll(".option");

    selected.addEventListener("click", () => {
        if (optionsContainer.classList.contains("active")) {
            optionsContainer.classList.remove("active");
        } else {
            let currentActive = document.querySelector(".options-container.active");

            if (currentActive) {
                currentActive.classList.remove("active");
            }

            optionsContainer.classList.add("active");
        }

        searchBox.value = "";
        filterList("");

        if (optionsContainer.classList.contains("active")) {
            searchBox.focus();
        }
    });

    optionsList.forEach((o) => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        });
    });

    searchBox.addEventListener("keyup", function(e) {
        filterList(e.target.value);
    });

    const filterList = (searchTerm) => {
        searchTerm = searchTerm.toLowerCase();
        optionsList.forEach((option) => {
            let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
            if (label.indexOf(searchTerm) != -1) {
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        });
    };
});

trafikform.addEventListener("submit", (e) => {
    let messages = [];
    if (name.value === "" || name.value == null) {
        messages.push("Name is required");
    }
    // if (password.value.length < 6) {
    //     messages.push("Password Must Be Longer Than 6 Characters");
    // }
    // if (password.value.length > 20) {
    //     messages.push("Password Must Be Shorter Than 20 Characters");
    // }
    // if (password.value === "password") {
    //     messages.push("Password cannot be password");
    // }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
    }
});
saglikform.addEventListener("submit", (e) => {
    let messages = [];
    if (name.value === "" || name.value == null) {
        messages.push("Name is required");
    }
    // if (password.value.length < 6) {
    //     messages.push("Password Must Be Longer Than 6 Characters");
    // }
    // if (password.value.length > 20) {
    //     messages.push("Password Must Be Shorter Than 20 Characters");
    // }
    // if (password.value === "password") {
    //     messages.push("Password cannot be password");
    // }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
    }
});
daskform.addEventListener("submit", (e) => {
    let messages = [];
    if (name.value === "" || name.value == null) {
        messages.push("Name is required");
    }
    // if (password.value.length < 6) {
    //     messages.push("Password Must Be Longer Than 6 Characters");
    // }
    // if (password.value.length > 20) {
    //     messages.push("Password Must Be Shorter Than 20 Characters");
    // }
    // if (password.value === "password") {
    //     messages.push("Password cannot be password");
    // }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
    }
});