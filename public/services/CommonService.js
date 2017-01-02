universityApp.service('CommonService', function() {

    return {
        decodeHtml: function(encodedHtml) {
            var txt = document.createElement("textarea");
            txt.innerHTML = encodedHtml;
            return txt.value;
        },
        showError : function(resp){
          var txt = document.createElement("textarea");
          txt.innerHTML = resp.data;
          alert(txt.value);
          txt = null;
        }
    }
});
