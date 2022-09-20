$(function () {

    set($('#count_1'), 20);
    set($('#count_2'), 20);
    set($('#count_3'), 20);
    set($('#count_4'), 20);
    set($('#count_5'), 20);
    set($('#count_6'), 20);  
    


    function set(_this, max) {
        var block = _this.parent();

        block.find(".incounter").click(function () {
            var currentVal = parseInt(_this.val());
            if (currentVal != NaN && (currentVal + 1) <= max) {
                _this.val(currentVal + 1);
            }
        });

        block.find(".decounter").click(function () {
            var currentVal = parseInt(_this.val());
            if (currentVal != NaN && currentVal != 0) {
                _this.val(currentVal - 1);
            }
        });
    }
});

