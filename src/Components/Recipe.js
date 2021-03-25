import React from 'react'
import style from '../recipe.module.css'

const Recipe = (props) => {
    const {title, calories, img, ingredients} = props
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map( (ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={img} alt=""/>

        </div>
    )
}

export default Recipe
