import React, { useState } from "react";

interface MerchandiseItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Merchandise: React.FC = () => {
  const [cart, setCart] = useState<
    { item: MerchandiseItem; quantity: number }[]
  >([]);
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Function to add an item to the cart
  const addToCart = (item: MerchandiseItem) => {
    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { item, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Calculate total price of items in cart
  const getTotalPrice = () => {
    return cart.reduce(
      (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
      0
    );
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Open the checkout modal
    setCheckoutOpen(true);
  };

  // Function to handle form input change for text inputs
  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setCheckoutInfo({
      ...checkoutInfo,
      [name]: value,
    });
  };

  // Function to handle form input change for textareas
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCheckoutInfo({
      ...checkoutInfo,
      [name]: value,
    });
  };

  // Function to handle payment method change
  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setCheckoutInfo({
      ...checkoutInfo,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your checkout logic here
    console.log("Checkout info:", checkoutInfo);
    // Close the checkout modal
    setCheckoutOpen(false);
    // Reset the checkout info
    setCheckoutInfo({
      name: "",
      address: "",
      paymentMethod: "",
    });
    // You can redirect the user to a confirmation page or do further processing
  };

  // Sample merchandise data
  const merchandiseItems: MerchandiseItem[] = [
    {
      id: 1,
      name: "T-Shirt",
      price: 800,
      image: "https://i.postimg.cc/0QsdB6Zy/tshirt.jpg",
    },
    {
      id: 2,
      name: "Hoodie",
      price: 1500,
      image: "https://i.postimg.cc/D05gs2ry/hoodie.jpg",
    },
    {
      id: 3,
      name: "Water Bottle",
      price: 300,
      image: "https://i.postimg.cc/Cx2cmLWR/bottle.jpg",
    },
    // Add more merchandise items as needed
  ];

  return (
    <div style={{ margin: "50px auto", width: "80%" }}>
      <h2 style={{ textAlign: "center" }}>Merchandise</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {merchandiseItems.map((item) => (
          <div
            style={{
              width: "300px",
              marginBottom: "30px",
              borderRadius: "15px",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out",
            }}
            key={item.id}
          >
            <div
              style={{
                width: "100%",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            >
              <img style={{ width: "100%" }} src={item.image} alt={item.name} />
            </div>
            <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
              <h4 style={{ marginBottom: "10px", fontSize: "18px" }}>
                {item.name}
              </h4>
              <p
                style={{
                  marginBottom: "5px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#f76c6c",
                }}
              >
                Price: Rs. {item.price}
              </p>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "50px" }}>
        <h2 style={{ textAlign: "center" }}>Shopping Cart</h2>
        {cart.map((cartItem, index) => (
          <div
            style={{
              marginBottom: "20px",
              borderRadius: "15px",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
            key={index}
          >
            <div
              style={{ display: "flex", alignItems: "center", padding: "10px" }}
            >
              <div style={{ width: "200px" }}>
                <img
                  src={cartItem.item.image}
                  alt={cartItem.item.name}
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    maxHeight: "200px",
                  }}
                />
              </div>
              <div style={{ padding: "0 10px" }}>
                <h5 style={{ marginBottom: "5px", fontSize: "20px" }}>
                  {cartItem.item.name}
                </h5>
                <p
                  style={{
                    marginBottom: "5px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#f76c6c",
                  }}
                >
                  Price: Rs. {cartItem.item.price}
                </p>
                <p
                  style={{
                    marginBottom: "5px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#4caf50",
                  }}
                >
                  Quantity: {cartItem.quantity}
                </p>
                <button
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
            onClick={handleCheckout}
          >
            Proceed to Pay - Rs. {getTotalPrice().toFixed(2)}
          </button>
        </div>
      </div>

      {/* Checkout Modal */}
      {checkoutOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "600px",
              width: "80%",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Checkout</h2>
            <form
              onSubmit={handleSubmit}
              style={{
                textAlign: "center",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={checkoutInfo.name}
                  onChange={handleTextInputChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="address"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Address:
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={checkoutInfo.address}
                  onChange={handleTextareaChange}
                  style={{
                    width: "100%",
                    minHeight: "100px",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="paymentMethod"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Payment Method:
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={checkoutInfo.paymentMethod}
                  onChange={handlePaymentMethodChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="credit">Credit Card</option>
                  <option value="debit">Debit Card</option>
                  <option value="upi">UPI</option>
                  <option value="netBanking">Net Banking</option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    fontSize: "18px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  type="button"
                  onClick={() => setCheckoutOpen(false)}
                >
                  Cancel
                </button>
                <button
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  type="submit"
                >
                  Confirm Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Merchandise;
