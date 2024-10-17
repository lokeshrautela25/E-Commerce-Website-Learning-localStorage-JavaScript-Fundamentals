function navbar(){
    return `
        <a href="index.html">HOME</a>
      <a href="men.html">MEN</a>
      <a href="women.html">WOMEN</a>
      <a href="kid.html">KID</a>
      <a href="signup.html">SIGN UP</a>
      <a href="login.html">LOGIN</a>
      <a href="wishlist.html">WishList <span id="favCount">0</span></a>
      <a href="cart.html">Cart <span id="cartCount">0</span></a>
    `;
}
export default navbar;