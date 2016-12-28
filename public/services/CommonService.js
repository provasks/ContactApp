universityApp.service('CommonService', function() {

    return {
        decodeHtml: function(encodedHtml) {
            var txt = document.createElement("textarea");
            txt.innerHTML = encodedHtml;
            return txt.value;
        }
    }
});
