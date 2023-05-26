import NavItem from "./NavItem";

export default class Navbar {
  // changeColorOnScroll() {
  //   const navItems = document.querySelectorAll("nav a");

  //   if (window.scrollY <= 150) {
  //     document
  //       .querySelector("nav")
  //       .classList.remove("bg-gray-900", "text-gray-100", "shadow");

  //     navItems.forEach((item) => {
  //       item.classList.remove("hover:after:bg-gray-100");
  //       item.classList.add("hover:after:bg-gray-900");
  //     });
  //   } else {
  //     document
  //       .querySelector("nav")
  //       .classList.add("bg-gray-900", "text-gray-100", "shadow");

  //     navItems.forEach((item) => {
  //       item.classList.add("hover:after:bg-gray-100");
  //       item.classList.remove("hover:after:bg-gray-900");
  //     });
  //   }
  // }

  // hydrate() {
  //   window.addEventListener("scroll", this.changeColorOnScroll);
  // }

  render() {
    return (
      <nav class="fixed w-full transition-all duration-200 flex justify-center uppercase font-medium">
        <NavItem title="Home" link="#" />
        <NavItem title="About" link="#who-am-i" />
        <NavItem title="Projects" link="#projects" />
        <NavItem title="Posts" link="#posts" />
        <NavItem title="Contact" link="#contact" />
      </nav>
    );
  }
}
