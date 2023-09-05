import { useState } from "react"
import { fetchAsync } from "./productsSlice"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import styles from "./Products.module.css"

export function Products() {
  const dispatch = useAppDispatch()

  return (
    <div>
      <button aria-label="fetch" onClick={() => dispatch(fetchAsync())}>
        Fetch Products
      </button>
      <div className={styles.card}>
        <img src="jeans3.jpg" alt="Denim Jeans" />
        <h1>Tailored Jeans</h1>
        <p className={styles.price}>$19.99</p>
        <p>Some text about the jeans..</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  )
}
