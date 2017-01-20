/**
 * Created by a on 2017/1/18.
 */
(function () {
    function Home() {

    }
    Home.prototype = new HttpManager();
    Home.prototype.upDate = function (url) {
        var self =this;
        this.getJson(url,function (result) {
           self.showNav(result.data[0].nav);
            self.topBannerImages = result.data[1].home.bannerImages;
            self.swiperslideimg = result.data[2].dynamic;
            self.democontainer = result.data[3].demos;
            console.log(self.democontainer);
            $(self.swiperslideimg).each(function () {
                self.showDynamic(this.backgroundimg,this.imgurl,this.title);
            });
            $(self.democontainer).each(function () {
                self.showDemos(this);
            });
            self.showTopBanner();
            self.dynamic();
        });
    }
    /*nav导航栏*/
    Home.prototype.showNav = function (info) {
        var navcontainer = $("<nav class='navbar navbar-default navbarcontainer' role='navigation'></nav>");
       $(".home-top-navigation .container").append(navcontainer);
       var containerfluid =$("<div class='container-fluid'></div>");
       navcontainer.append(containerfluid);
       var navBarheader = $("<div class='navbar-header'><button type='button' class='navbar-toggle 'data-toggle='collapse' data-target='#example-navbar-collapse'><span class='icon-bar'></span><span class='icon-bar'></span><span class='icon-bar'></span></button></div>");
        containerfluid.append(navBarheader);
        var navbarcollapse = $("<div class='collapse navbar-collapse text-center' id='example-navbar-collapse'>");
        containerfluid.append(navbarcollapse);
        var navbarnav =$("<ul class='nav navbar-nav text-center navul'></ul>");
        navbarcollapse.append(navbarnav);
        $(info).each(function () {
            var navli = $("<li class='navli text-center'><a href='#'>"+this.name+"</a></li>");
            navbarnav.append(navli);
        });
    }
    /*轮播图*/
    Home.prototype.showTopBanner = function () {
        var container = $("<div id='carousel-example-generic' class='carousel slide' data-ride='carousel'></div>");
        var slideContainer =$("<div class='carousel-inner' role='listbox'></div>");
        var prebutton =$("<a class='left carousel-control' style='z-index: 20' href='#carousel-example-generic' role='button' data-slide='prev'><span class='glyphicon glyphicon-chevron-left'></span></a>");
        var nextbutton =$("<a class='right carousel-control' style='z-index:20' href='#carousel-example-generic' role='button' data-slide='next'><span class='glyphicon glyphicon-chevron-right'></span></a>");
        prebutton.css("display","none");
        container.hover(function () {
            prebutton.fadeIn();
            nextbutton.fadeIn();
        },function () {
            prebutton.fadeOut();
            nextbutton.fadeOut();
        });
        container.append(nextbutton);
        container.append(prebutton);
        container.append(slideContainer);
        var slide2;
        $(this.topBannerImages).each(function () {
            slide2 = $("<div class='item'><img src="+this+"></div>");
            slideContainer.append(slide2);
        });
        slide2.addClass("item active");
        $(".home-top-banner").append(container);
        $('.carousel').carousel({
            interval: 2000
        });
    }
    Home.prototype.dynamic = function () {
        new Swiper(".swiper-container",{
            loop: true,
            initialSlide :0,
            slidesPerView:5,
            slidesPerGroup :1,
            centeredSlides:true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
        });
    }
    Home.prototype.showDynamic = function (info,info2,info3) {
        var swiperslideimg = $("<div class='swiper-slide swiper-slidesuper'><img src="+info+" class='img-responsive'><p class='hoverp hidden-xs' >"+info3+"</p><img src="+info2+" alt='' class='img-responsive hoverimg hidden-xs'></div>");
        $(".home-main-dynamic-swiper").append(swiperslideimg);
    };
    Home.prototype.showDemos = function (info) {
        var demoscontainer = $("<div class='box img-responsive'><img src="+info.moveUrl+"></div>");
        var demosmall = $("<div class='smallbox'><p class='showdemop'><img src="+info.authorimg+" style='width:36px;height:36px'><h4>"+info.title+"</h4></p><P class='showdemop2'>"+info.content+"</P></div>");
        $(".demoscontainer").append(demoscontainer);
        demoscontainer.append(demosmall);
        demosmall.css("display","none");
        demoscontainer.hover(function () {
            demosmall.fadeIn();
            $(this).css("opacity","0.7");
        },function () {
            demosmall.fadeOut();
            $(this).css("opacity","1");
        })
    }

    window.Home = Home;
})();