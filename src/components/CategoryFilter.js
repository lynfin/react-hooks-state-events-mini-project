import React from "react";



function CategoryFilter({ categories, onSelectCategory }) {

  function handleClick(e) {
    const allButtons = e.target.parentNode.querySelectorAll('button')
    allButtons.forEach(
      button =>
        button.innerText === e.target.innerText ?
          button.className = 'selected' :
          button.className = ''
    );
    allButtons.forEach(button => console.log(button.innerText,':',button.className))
    onSelectCategory(e.target.innerText);
  }
  return (
    <div className="categories" key="categories">
      <h5>Category filters</h5>
      {
        categories.map((category) =>
          <button
            onClick={handleClick}
            className=""
            key={category}
          >{category}</button>)
      }
    </div>
  );
}

export default CategoryFilter;
