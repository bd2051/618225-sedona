    var popup = document.querySelector(".modal-motel-search");
    var btn = document.querySelector(".js-motel-search-button");

    var form = popup.querySelector(".search-form");
    var arival = popup.querySelector("[name=search-arival-date]");
    var departure = popup.querySelector("[name=search-departure-date]");
    var persons = popup.querySelector("[name=search-persons]");
    var child = popup.querySelector("[name=search-child]");
    
    var isStorageSupport = true;
    var storagepersons = "";
    var storagechild = "";
    
    var hiddenmap = document.querySelector(".sedona-map img");
    var modalmap = document.querySelector(".sedona-map iframe")
    
    try {
      storagepersons = localStorage.getItem("persons");
      storagechild = localStorage.getItem("child", child.value);
      } catch (err) {
      isStorageSupport = false;
    }
    popup.classList.add("js-modal-hide")
    hiddenmap.classList.add("js-modal-hide")
    modalmap.classList.remove("js-modal-hide")

    btn.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("js-modal-show");
      popup.classList.remove("js-modal-error");
      arival.focus();
      if (storagepersons) {
        persons.value = storagepersons;
      }
      if (storagechild) {
        child.value = storagechild;
      }
    });
    
    form.addEventListener("submit", function (evt) {
      if (!persons.value || !child.value || !arival.value || !departure.value) {
        evt.preventDefault();
        console.log("Нужно ввести логин и пароль");
      popup.classList.remove("js-modal-error");
      popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("js-modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("persons", persons.value);
          localStorage.setItem("child", child.value);
        }
      }
    });
    
    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("js-modal-show")) {
        popup.classList.remove("js-modal-show");
        popup.classList.remove("js-modal-error");
      }
    }
  });
