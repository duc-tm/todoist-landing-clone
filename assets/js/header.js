(function () {
  const collapseButton = document.getElementById('navbar-collapse-btn');
  const collapseNavbar = document.getElementById('navbar-collapse');

  collapseButton?.addEventListener('click', () => {
    collapseButton.classList.toggle('open');
    if (collapseButton.classList.contains('open')) {
      collapseNavbar.classList.add('open');
    } else {
      collapseNavbar.classList.remove('open');
    }
  });
})();

(function() {
  const accordionToggler = document.getElementById('accordion-toggler');
  const headerAccordion = document.getElementById('header-accordion');

  accordionToggler?.addEventListener('click', () => {
    headerAccordion?.classList.toggle('open');
  });
})();