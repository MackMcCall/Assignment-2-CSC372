/*
  Name: Mack McCall
  Date: 02.20.2026
  CSC 372-01

  This is the script.js page for my campus food blog. It includes the implementation
  of the favorites feature with the running total at the bottom of the page.
*/

document.addEventListener("DOMContentLoaded", function () {
  const dishes = document.querySelectorAll(".dish");

  const summarySection = document.createElement("div");
  summarySection.id = "favorites-summary";

  const title = document.createElement("h3");
  title.textContent = "Favorites";
  summarySection.appendChild(title);

  const favoritesList = document.createElement("ul");
  summarySection.appendChild(favoritesList);

  const totalDisplay = document.createElement("p");
  totalDisplay.textContent = "Total Price: $";

  const totalSpan = document.createElement("span");
  totalSpan.id = "total=price";
  totalSpan.textContent = "0";

  totalDisplay.appendChild(totalSpan);
  summarySection.appendChild(totalDisplay);

  document.body.appendChild(summarySection);

  let total = 0;
  dishes.forEach((dish, index) => {
    const price = Math.floor(Math.random() * 10) + 1;

    const priceTag = document.createElement("p");
    priceTag.textContent = "$" + price;
    dish.appendChild(priceTag);

    const button = document.createElement("button");
    button.textContent = "Add to Favorites";
    dish.appendChild(button);

    let isFavorited = false;

    button.addEventListener("click", function () {
      const dishName = dish.querySelector("h3").textContent;

      if (!isFavorited) {
        dish.style.border = "2px solid orange";

        const li = document.createElement("li");
        li.textContent = dishName + " - $" + price;
        favoritesList.appendChild(li);

        total += price;
        totalSpan.textContent = total;

        button.textContent = "Remove from Favorites";
        isFavorited = true;
      } else {
        const listItems = favoritesList.querySelectorAll("li");
        listItems.forEach((listItem) => {
          if (
            listItem.textContent
              .toLowerCase()
              .startsWith(dishName.toLowerCase())
          ) {
            listItem.remove();
          }
        });

        dish.style.border = "1px solid #ddd";

        total -= price;
        totalSpan.textContent = total;

        button.textContent = "Add to Favorites";
        isFavorited = false;
      }
    });
  });
});
