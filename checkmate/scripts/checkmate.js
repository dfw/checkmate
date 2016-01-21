'use strict';

(function() {
  var checkmate = {
    validateEmail: function(fld) {
      fld.onkeyup = function() {
        var emRegEx = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$");

        if (emRegEx.test(fld.value)) {
          checkmate.addClass(fld.parentElement, 'valid');
        } else {
          checkmate.removeClass(fld.parentElement, 'valid');
        }
      };
    },
    addClass: function(fld, cls) {
      fld.classList ? fld.classList.add(cls) : fld.className += ' ' + cls;
    },
    removeClass: function(fld, cls) {
      fld.classList ? fld.classList.remove(cls) : fld.className = 'checkmate';
    }
  };

  var fields = document.getElementsByClassName('checkmate');

  var i;
  for (i = 0; i < fields.length; i++) {
    var field = fields[i].children[0];

    if (field.type
        && field.type === 'email') {
      checkmate.validateEmail(field);
    }
  }
})();