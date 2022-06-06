(function () {
  const tabElementNodeList = document.getElementsByClassName('tab');
  const tabElementArray = Array.from(tabElementNodeList ?? []);

  tabElementArray.forEach((tabElement) => {
    const tabContentNodeList = tabElement.querySelectorAll('.tab-content');
    const tabControlNodeList = tabElement.querySelectorAll('.tab-control');

    let currentActiveTabContent = tabElement.querySelector('.tab-content.active')
    let currentActiveTabControl = tabElement.querySelector('.tab-control.active');

    for(let i = 0; i < tabControlNodeList.length; i++) {
      tabControlNodeList[i].addEventListener('click', () => {
        const nextTabControl  = tabControlNodeList[i];
        if(currentActiveTabControl === nextTabControl) {
          return;
        }
        
        tabContentNodeList[i].classList.add('active');
        currentActiveTabContent.classList.remove('active')
        nextTabControl.classList.add('active');
        currentActiveTabControl.classList.remove('active');

        currentActiveTabContent = tabContentNodeList[i];
        currentActiveTabControl = nextTabControl;
      });
    }
  });
})();