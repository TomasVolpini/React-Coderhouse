import styles from "../styles/CheckoutContainer.module.css";

export default function CheckoutForm({ handleSubmit }) {
  return (
    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Checkout</h2>

      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" required />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit Order
      </button>
    </form>
  );
}
