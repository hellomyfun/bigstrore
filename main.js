/**
 * Created by a on 2017/1/17.
 */
(function () {
    function main() {
        var homePage = new Home();
        homePage.upDate("home/package.json");
        setTimeout(function () {
            var $container = $('#masonry');
            $container.masonry({
                itemSelector: '.box',
                gutter: 20,
                isAnimated: true,
            });
        },1000);

    }
    main();
})();