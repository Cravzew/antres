$(".statistics__tabletop-accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  icons: false,
  create: function () {
    $(".statistics__tabletop-header").attr("tabIndex", "0");
  },
  beforeActivate: function (event, ui) {
    // The accordion believes a panel is being opened
    if (ui.newHeader[0]) {
      var currHeader = ui.newHeader;
      var currContent = currHeader.next(".ui-accordion-content");
      // The accordion believes a panel is being closed
    } else {
      var currHeader = ui.oldHeader;
      var currContent = currHeader.next(".ui-accordion-content");
    }
    // Since we've changed the default behavior, this detects the actual status
    var isPanelSelected = currHeader.attr("aria-selected") == "true";

    // Toggle the panel's header
    currHeader
      .toggleClass("ui-corner-all", isPanelSelected)
      .toggleClass(
        "accordion-header-active ui-state-active ui-corner-top",
        !isPanelSelected
      )
      .attr("aria-selected", (!isPanelSelected).toString());

    // Toggle the panel's icon
    currHeader
      .children(".ui-icon")
      .toggleClass("ui-icon-triangle-1-e", isPanelSelected)
      .toggleClass("ui-icon-triangle-1-s", !isPanelSelected);

    // Toggle the panel's content
    currContent.toggleClass("accordion-content-active", !isPanelSelected);
    if (isPanelSelected) {
      currContent.slideUp();
    } else {
      currContent.slideDown();
    }

    return false; // Cancels the default action
  },
});

document
  .querySelectorAll(".statistics__item-button")
  .forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;

      document
        .querySelectorAll(".statistics__item-button")
        .forEach(function (btn) {
          btn.classList.remove("statistics__item-button-active");
        });
      e.currentTarget.classList.add("statistics__item-button-active");
      document
        .querySelectorAll(".statistics__tabletop")
        .forEach(function (tabsBtn) {
          tabsBtn.classList.remove("statistics__tabletop-active");
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("statistics__tabletop-active");
    });
  });
