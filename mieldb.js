const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //   console.log(searchText);
  searchField.value = " ";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => dicplaySearchResult(data.meals));
};
const dicplaySearchResult = (mels) => {
  const searchResult = document.getElementById("search-result");
  mels.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div onclick="loodMealDetails(${meal.idMeal})" class="card" h=100>
    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
       ${meal.strInstructions.slice(0, 250)}
      </p>
    </div>
  </div>
    `;
    searchResult.appendChild(div);
  });
};

const loodMealDetails = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.meals[0]));
};
