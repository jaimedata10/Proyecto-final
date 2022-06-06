  //Script responsiveCards
  function hideModal() {
    const modal = document.querySelector('.modalResponsive');
    modal.classList.remove('showResponsive');
  }

  function showModal(param1, param2, param3) {
    const modal = document.querySelector('.modalResponsive');
    document.querySelector('#imageResponsive').src = param1;
    document.querySelector('#titleResponsive').innerHTML = param2;
    document.querySelector('#descriptionResponsive').innerHTML = param3;
    modal.classList.add('showResponsive');
  }

  function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  function viewFullScreen() {
    var img = document.querySelector('.imgModalResponsive');
    openFullscreen(img);
  }

document.addEventListener('click', function(e) {
  const clickedPaths = Event.composedPath(); 
  const button = document.querySelector('.dropdown-button');
  const dropdownContent = document.querySelector('.dropdown-content');
  var svgIcon = document.querySelector('.arrow-svg');
  
  if(!clickedPaths.includes(dropdownContent) && e.target !== button && !clickedPaths.includes(button)) {
    dropdownContent.classList.remove('open');
    svgIcon.classList.remove('open');
  }
})