import "./styles/Home.css";
import resto from "./assets/restauranfood.jpg";
import greekSalad from "./assets/greek salad.jpg";
import bruschetta from "./assets/bruchetta.svg";
import lemonDessert from "./assets/lemon dessert.jpg";

function Main() {
  const specialItems = [
    {
      id: 1,
      name: "Greek salad",
      price: "12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad,
    },
    {
      id: 2,
      name: "Bruchetta",
      price: "5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruschetta,
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert,
    },
  ];
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="button-primary">Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img src={resto} alt="Featured dish" />
          </div>
        </div>
      </section>

      <section className="specials-section">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <button className="button-primary">Online Menu</button>
        </div>

        <div className="specials-grid">
          {specialItems.map((item) => (
            <article key={item.id} className="special-card">
              <img src={item.image} alt={item.name} />
              <div className="special-content">
                <div className="special-header">
                  <h3>{item.name}</h3>
                  <span className="price">${item.price}</span>
                </div>
                <p className="special-description">{item.description}</p>
                <button className="order-link">
                  Order a delivery
                  <span>🛵</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
