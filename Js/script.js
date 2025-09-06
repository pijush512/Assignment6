// load all trees
const loadAllTrees = () => {
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllTrees(data.plants))
};

// Display All Trees
const displayAllTrees = (allTrees) => {
    const cardContainer = document.getElementById("card_container");
    cardContainer.innerHTML = "";

    for(let tree of allTrees){
        const card = document.createElement("div");
        card.innerHTML = `
            <div class=" card bg-base-100 shadow-sm h-full flex flex-col p-4">
                <figure class="w-full h-60 object-cover ">
                    <img
                        src="${tree.image}"
                        alt="${tree.name}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        ${tree.name}
                    </h2>
                    <p>${tree.description}</p>
                    <div class="card-actions justify-between items-center">
                        <div
                            class="bg-green-200 rounded-2xl px-4 py-1 text-lg">${tree.category}</div>
                        <div class="font-bold text-lg">${tree.price}</div>
                    </div>
                    <button
                        class="bg-green-600 rounded-3xl py-2 text-white text-lg mt-4">Add
                        to Cart</button>
                </div>
            </div>
        `;

        cardContainer.append(card);
    };

};
loadAllTrees();


//Load Categories list Funcationality
const loadCatagories = () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
};


// Display Catagories functionality
const displayCatagories = (catagories) => {
    // Get the catagori_container and empty
    const catagoriContainer = document.getElementById("catagori_container");
    catagoriContainer.innerHTML = "";
    // All Trees option at first
    const allTrees = document.createElement("li");
        allTrees.innerHTML = `
        <li class="font-semibold py-1">All Trees</li>
        `;
    catagoriContainer.append(allTrees);

    for(let catagori of catagories){
        // Creat Element
        const li = document.createElement("li");
        li.innerHTML = `
            <li class="font-semibold py-1">${catagori.category_name}</li>
        `;    
       catagoriContainer.append(li);
    }
};

loadCatagories()



