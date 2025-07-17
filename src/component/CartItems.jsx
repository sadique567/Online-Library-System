import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

export function CartItems() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
    alert("🗑️ Cart Cleared!");
  }

  function handleCheckout() {
    dispatch(clearCart());
    alert("✅ Checkout successful!");
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>🛒 Your Cart</h2>

      {cartItems.length > 0 && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button
            onClick={handleClearCart}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              background: "#e53935",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            🗑️ Clear Cart
          </button>
        </div>
      )}

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>🛒 Cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              backgroundColor: "#fdfdfd",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.coverImage}
              alt={item.title}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
                marginRight: "20px",
              }}
            />
            <div>
              <h3 style={{ margin: "0 0 5px 0", fontSize: "18px" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
                Some short summary or fixed dummy line if needed.
              </p>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            onClick={handleCheckout}
            style={{
              padding: "10px 30px",
              fontSize: "18px",
              background: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            ✅ Checkout
          </button>
        </div>
      )}
    </div>
  );
}
