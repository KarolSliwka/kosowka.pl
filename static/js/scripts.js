$(document).ready(function () {
  /**
   * This function will take the current year and pass it to copyrights
   */
  const todaysDate = new Date();
  const currentYear = todaysDate.getFullYear();
  $("#year").html(currentYear);
  /**
   * This fucntion will apply class for hamburger button in each menu
   * when clicked on button
   */
  const btnHamTab = $("#btn-ham-tab");
  const btnHamMed = $("#btn-ham-med");
  const btnHamMob = $("#btn-ham-mob");

  const tabSubmenu = $("#submenu-tab");
  const medSubmenu = $("#submenu-med");
  const mobSubmenu = $("#submenu-mob");

  btnHamTab.click(function () {
    $(this).toggleClass("open");
    $(this).parent().next("div").toggleClass("expand-menu");
  });

  btnHamMed.click(function () {
    $(this).toggleClass("open");
    $(this).parent().next("ul").toggleClass("expand-menu");
  });

  btnHamMob.click(function () {
    $(this).toggleClass("open");
    $(this).parent().next("ul").toggleClass("expand-menu");
  });

  /**
   * This function will apply class to rotate little chevron
   * when clicked on submenu link in doprdown menu
   */
  tabSubmenu.click(function toggleTabSubmenu() {
    $(this).children("li").toggleClass("selected-menu");
    $(this).children("li").children("i").toggleClass("rotate");
    $(this)
      .children("li")
      .next("#expand-menu")
      .children("li")
      .toggleClass("d-none");
    $(this).children("li").next("#expand-menu").toggleClass("expand");
  });

  medSubmenu.click(function toggleMedSubmenu() {
    $(this).children("i").toggleClass("rotate");
    $(this).next("#expand-menu").children("li").toggleClass("d-none");
    $(this).next("#expand-menu").toggleClass("expand");
  });

  mobSubmenu.click(function toggleMobSubmenu() {
    $(this).children("i").toggleClass("rotate");
    $(this).next("#expand-menu").children("li").toggleClass("d-none");
    $(this).next("#expand-menu").toggleClass("expand");
  });
});
