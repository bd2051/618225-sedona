    var btn = document.querySelector(".js-motel-search-button");
    var popup = document.querySelector(".modal-motel-search");
    var arival = popup.querySelector("[name=search-arival-date]");
    var form = popup.querySelector(".search-form");
    var persons = popup.querySelector("[name=search-persons]");
    var child = popup.querySelector("[name=search-child]");
    
    var isStorageSupport = true;
    var storagepersons = "";
    var storagechild = "";
  
    try {
      storagepersons = localStorage.getItem("persons");
      storagechild = localStorage.getItem("child", child.value);
      } catch (err) {
      isStorageSupport = false;
    }

    btn.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("js-modal-show");
      arival.focus();
      if (storage) {
        persons.value = storage;
        child.value = storagechild;
      }
    });
    
    form.addEventListener("submit", function (evt) {
      <!-- evt.preventDefault(); -->
      if (isStorageSupport) {
        localStorage.setItem("persons", persons.value);
        localStorage.setItem("child", child.value);
      }
      console.log("сохранено в localStorage");
    });
    
    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("js-modal-show")) {
        popup.classList.remove("js-modal-show");
      }
    }
  });
