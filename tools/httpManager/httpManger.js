/**
 * Created by a on 2017/1/18.
 */
(function () {
    function HttpManager() {
        
    }
    HttpManager.prototype.getJson = function (url,callback) {
        $.get(url,function (result) {
            if(result){
                callback(result);
            }
        })
    }
    window.HttpManager = HttpManager;
})();