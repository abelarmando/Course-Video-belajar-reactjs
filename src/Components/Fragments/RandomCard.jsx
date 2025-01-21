import CardProduct from "./CardProduct";
import Products from "../Data/Data";
function RandomCard() {
  let cardnumber = Math.floor(Math.random() * (Products.length - 2));
  let randomcard = products.slice(cardnumber, cardnumber + 3);
  console.log(randomcard);
}
