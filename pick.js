"use strick"
let cnt=0;
let currentDroppable = null;

//밥 1
feed.onmousedown = function(event) {
    let shiftX = event.clientX - feed.getBoundingClientRect().left;
    let shiftY = event.clientY - feed.getBoundingClientRect().top;

    feed.style.position = 'absolute';
    feed.style.zIndex = 1000;
    document.body.append(feed);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      feed.style.left = pageX - shiftX + 'px';
      feed.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      feed.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      feed.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.droppable');
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) { // null when we were not over a droppable before this event
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) { // null if we're not coming over a droppable now
          // (maybe just left the droppable)
          enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    feed.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      feed.onmouseup = null;
    };
};
feed.ondragstart = function() {
  return false;
};


//밥 2
feed2.onmousedown = function(event) {

  let shiftX = event.clientX - feed2.getBoundingClientRect().left;
  let shiftY = event.clientY - feed2.getBoundingClientRect().top;

  feed2.style.position = 'absolute';
  feed2.style.zIndex = 1000;
  document.body.append(feed2);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    feed2.style.left = pageX - shiftX + 'px';
    feed2.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    feed2.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    feed2.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null when we were not over a droppable before this event
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null if we're not coming over a droppable now
        // (maybe just left the droppable)
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  feed2.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    feed2.onmouseup = null;
  };
};
feed2.ondragstart = function() {
  return false;
};


//밥 3
feed3.onmousedown = function(event) {

  let shiftX = event.clientX - feed3.getBoundingClientRect().left;
  let shiftY = event.clientY - feed3.getBoundingClientRect().top;

  feed3.style.position = 'absolute';
  feed3.style.zIndex = 1000;
  document.body.append(feed3);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    feed3.style.left = pageX - shiftX + 'px';
    feed3.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    feed3.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    feed3.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null when we were not over a droppable before this event
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null if we're not coming over a droppable now
        // (maybe just left the droppable)
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  feed3.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    feed3.onmouseup = null;
  };
};
feed3.ondragstart = function() {
  return false;
};


//밥 4
feed4.onmousedown = function(event) {

  let shiftX = event.clientX - feed4.getBoundingClientRect().left;
  let shiftY = event.clientY - feed4.getBoundingClientRect().top;

  //feed4.style.position = 'absolute';
  feed4.style.zIndex = 1000;
  document.body.append(feed4);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    feed4.style.left = pageX - shiftX + 'px';
    feed4.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    feed4.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    feed4.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null when we were not over a droppable before this event
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null if we're not coming over a droppable now
        // (maybe just left the droppable)
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  feed4.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    feed4.onmouseup = null;
  };
};
feed4.ondragstart = function() {
  return false;
};


//밥 5
feed5.onmousedown = function(event) {

  let shiftX = event.clientX - feed5.getBoundingClientRect().left;
  let shiftY = event.clientY - feed5.getBoundingClientRect().top;

  feed5.style.position = 'absolute';
  feed5.style.zIndex = 1000;
  document.body.append(feed5);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    feed5.style.left = pageX - shiftX + 'px';
    feed5.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    feed5.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    feed5.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null when we were not over a droppable before this event
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null if we're not coming over a droppable now
        // (maybe just left the droppable)
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  feed5.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    feed5.onmouseup = null;
  };
};
feed5.ondragstart = function() {
  return false;
};


//밥 6
feed6.onmousedown = function(event) {

  let shiftX = event.clientX - feed6.getBoundingClientRect().left;
  let shiftY = event.clientY - feed6.getBoundingClientRect().top;

  feed6.style.position = 'absolute';
  feed6.style.zIndex = 1000;
  document.body.append(feed6);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    feed6.style.left = pageX - shiftX + 'px';
    feed6.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    feed6.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    feed6.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null when we were not over a droppable before this event
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null if we're not coming over a droppable now
        // (maybe just left the droppable)
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  feed6.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    feed6.onmouseup = null;
  };
};
feed6.ondragstart = function() {
  return false;
};

function enterDroppable(elem) {
  cnt++;
}