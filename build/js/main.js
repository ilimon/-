$(function() {
    
//WELCOME, ENJOY THIS CODE WHILE IT'S STILL NOT UGLIFIED!
    
var marco = {
    hamburgerVelocity: 300,
    isOpening: true,
    navSpeed: 0.25,
    navBackgroundColor: '#1a1c1a',
    bodyOffset: '100px',
    navTop: {x: 0},
    navBottom: {x: 0},
    howManyDiamonds: $('.social > a').length,
    
    
    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.animloop();
        this.startNavTimeline();
        this.checkBrowsers();
        if(this.iOS) $.getScript('js/fastclick.js');
        if(this.IE) this.ieSVGfix();
        this.headerAdapt();
        
        if (Modernizr.touch) { //BUG skrollr doesn't use native scrolling on touch devices
            this.handcraftedSVG();
        } else {
            skrollr.init();
        }
        this.diamondDisposition();
    },
    cacheDom: function() {
        this.$navToggle = $('.nav-toggle');
        this.$polyNav = $('#polyNav');
        this.$navLi = $('.main-nav li');
        this.$navA = $('.main-nav a');
        
        this.canvas =  document.getElementById('navBg'); 
        this.context = this.canvas.getContext('2d');
        
        this.$window = $(window);
        this.$wrapper = $('.wrapper');
        this.$header = $('header');
        this.$marcofugaro = $('#marcofugaro');
        this.$sections = $('section');
        
        this.$diamonds = $('.social > a');
        this.$parallax = $('.parallax');
    },
    bindEvents: function() {
        this.$navToggle.on('click', function() {
            if(this.isOpening) {
                this.openNav();
            } else {
                this.closeNav();
            }
        }.bind(this));
        
       this.$window.on('resize', function() {
            this.diamondDisposition();
            this.headerAdapt();
            if(this.IE) this.ieSVGfix();
        }.bind(this));
    },
    checkBrowsers: function() {
        var ua = window.navigator.userAgent;
        this.IE = ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/') > 0;
        this.iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
    },
    ieSVGfix: function() {
        this.ratio = (this.$marcofugaro.outerWidth() * 283.2) / 436.6;
        this.$marcofugaro.css('height', this.ratio + 'px');
    },
    headerAdapt: function() {
        $('#home').css('height', this.$header.outerHeight());
    },
    
    
/*----------------------------------------------
                    NAV MENU                          //TODO make it in SVG
------------------------------------------------*/
    hamburgerToLines: function() {
        this.$navToggle.removeClass('show').addClass('trans-animation');
        setTimeout(function(){
            this.$navToggle.removeClass('trans-animation');
        }.bind(this), this.hamburgerVelocity);
    },

    hambrugerToX: function() {
        this.$navToggle.addClass('trans-animation');
        setTimeout(function(){
            this.$navToggle.removeClass('trans-animation').addClass('show');
        }.bind(this), this.hamburgerVelocity);
    },
    updateNavBg: function() {
        var newH = $(window).height();
        this.canvas.width = this.canvas.width;
        this.canvas.height = newH;
        this.context.fillStyle = this.navBackgroundColor;
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(this.navTop.x, 0);
        this.context.lineTo(this.navBottom.x, newH);
        this.context.lineTo(0, newH);
        this.context.closePath();
        this.context.fill();
    },
    startNavTimeline: function() {
        this.navTimeline = new TimelineMax({paused: true})
            .fromTo(this.$polyNav, 0, { display:'none'},{display:'block'}, 'navOut')
            .fromTo(this.$navToggle, 0.3, { background:'#111'},{background: this.navBackgroundColor}, 'navOut')
//            .fromTo($('.nav-toggle'), 0.3, { boxShadow: '0 2px 8px rgba(#000, 0.3)'},{boxShadow: 'none'}, 'navOut')
            .fromTo(this.navBottom, this.navSpeed, {x: 0}, {x: 240, ease: Quart.easeInOut}, 'navOut')
            .fromTo(this.navTop, this.navSpeed*2.2, {x: 0}, {x: 380, ease: Quart.easeInOut, onUpdate: this.updateNavBg.bind(this)}, 'navOut')
            .staggerFromTo(this.$navLi, 1, {x: '-30px',  opacity: 0}, {x: '0px', opacity: 1, ease: Quint.easeInOut, delay: 0}, 0.05, 'navOut-=0.2')
            .fromTo(this.$wrapper, 1, {x: '0px'},{x: this.bodyOffset, ease:Quint.easeInOut}, 'navOut')
            .fromTo(this.$header, 1, {transform: 'translate3d(0,0,0)'},{transform: 'translate3d(' + this.bodyOffset + ',0,0)', ease:Quint.easeInOut}, 'navOut');
    },
    openNav: function() {
        this.navTimeline.play();
        this.hambrugerToX();
        this.$wrapper.on('click', this.closeNav.bind(this));
        this.$navA.on('click', this.scrollTo.bind(this));
        this.scrollUpdate();                                                         
        this.$window.on('scroll.menu', this.scrollUpdate.bind(this));
        
        this.isOpening = !this.isOpening;
    },
    closeNav: function() {
        this.navTimeline.reverse();
        this.hamburgerToLines();
        this.$wrapper.off('click');
        this.$navA.off('click');
        this.$window.off('scroll.menu');
        
        this.isOpening = !this.isOpening;
    },
    scrollTo: function(e) {
        e.preventDefault();
        
        this.closeNav();
        
        var hash = e.currentTarget.hash;
        
        if(hash == '#about') {
            var SVGoffset = 80;
        } else {
            var SVGoffset = 0;
        }
        
        $('html, body').animate({ 
			scrollTop: $(hash).offset().top + SVGoffset
		}, 800, 'easeInOutCubic');

    },
    scrollUpdate: function() {
        var windowCenter = this.$window.scrollTop() + this.$window.height() / 2;  
        this.$sections.each(function() {
            if ($(this).offset().top <= windowCenter && windowCenter <= $(this).offset().top + $(this).outerHeight()) {
                $('.nav-active').removeClass('nav-active');
                var hash = $(this).attr('id');
                $('.main-nav a[href="#' + hash + '"]').addClass('nav-active');
            }
        });
    },
    
    
/*----------------------------------------------
            SOCIAL DIAMOND DISPOSITION
------------------------------------------------*/
    diamondDisposition: function() {
        if(window.matchMedia( "(min-width: 380px)" ).matches) {
            this.diamondWidth = 50;
        } else {
            this.diamondWidth = 60;
        }
        
        if(window.matchMedia( "(min-width: 500px)" ).matches) {
            this.closerFactor = - this.diamondWidth / 4;
        } else {
            this.closerFactor = this.diamondWidth / 4;
        }
        
        if(this.howManyDiamonds % 2 == 1) {
            this.center = Math.ceil(this.howManyDiamonds/2);
            this.$diamonds.each(function(index, element) {
                $(element).css('transform', 'translateX(' + this.closerFactor * (this.center - (index + 1)) + 'px)');   
            }.bind(this));
        } else {
            this.center = this.howManyDiamonds / 2 + 0.5;
            this.$diamonds.each(function(index, element) {
                if((index + 1) > this.center) {
                    this.sign = Math.ceil((index + 1) - this.center);
                    this.distance = this.sign - 1;
                } else {
                    this.sign = Math.floor((index + 1) - this.center);
                    this.distance = this.sign + 1;
                }
                $(element).css('transform', 'translateX(' + ((- this.closerFactor) * this.distance - ((this.closerFactor/2) * (this.sign / Math.abs(this.sign)))) + 'px)');   
            }.bind(this));
        }
    },
    
    
/*-----------------------------------------------
        REQUEST ANIMATION FRAME ANIMATIONS
------------------------------------------------*/
    animloop:  function(){
        this.animationFrame = requestAnimFrame(this.animloop.bind(this));
        this.headerParallax();
    },
    headerParallax: function() {
        this.parallaxEquation = - this.$window.scrollTop() / 3; 
//        this.parallaxEquation = Math.round(this.parallaxEquation * 10 ) / 10;
        if (this.$window.scrollTop() <= this.$header.outerHeight()){
            this.$parallax.css({
                'transform': 'translate3d(0, ' + this.parallaxEquation + 'px, 0)', 
                '-webkit-transform': 'translate3d(0, ' + this.parallaxEquation + 'px, 0)' 
            });
        }
    },
    
    
/*----------------------------------------------
            CONTACT ANIMATED SVG
------------------------------------------------*/
    handcraftedSVG: function() {
        this.contactSVG = {
            $polygon: $('#contactCTA').children('polygon'),
            top: $('#contactCTA').offset().top,
            center: $('#contactCTA').offset().top + $('#contactCTA').outerHeight() / 2,
            bottom: $('#contactCTA').offset().top + $('#contactCTA').outerHeight(),
            height: $('#contactCTA').outerHeight(),
            halfHeight: $('#contactCTA').outerHeight() / 2
        };
        
        this.updateContactSVG = function(scroll) {
            this.scrollEquation = - (scroll.top + this.contactSVG.halfHeight - this.contactSVG.bottom) / (this.$window.height() * 2 / 3) * 50;
            this.scrollEquation = Math.round(this.scrollEquation * 100) / 100;
            this.contactSVG.$polygon.attr('points', '0,' + this.scrollEquation + ' 50,' + (50 - this.scrollEquation) + ' 100,' + this.scrollEquation + ' 100,51 0,51');
        };
        
//        (function animloop(){ //BUG requestanimationframe sucks when parallax scrolling on mobile
//            requestAnimFrame(animloop);
        this.$window.on('scroll', function(){
            scroll = {
                top: this.$window.scrollTop() + this.$window.height() / 3,
                center: this.$window.scrollTop() + this.$window.height() * 2 / 3,
                bottom: this.$window.scrollTop() + this.$window.height()
            };

            if (scroll.bottom >= this.contactSVG.bottom && scroll.top <= this.contactSVG.center){
                this.updateContactSVG(scroll);
            }  
        }.bind(this));
//        })();
    },  
  
    
}; //end of main object
  
    
    
    
    
/*-----------------------------------------------
        REQUEST ANIMATION FRAME FALLBACKS
------------------------------------------------*/
    (function() {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame =
              window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame   ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
    })();



marco.init();


    


    
    
/*-----------------------------------------------
              DIAMOND HOVER EFFECT
------------------------------------------------*/
//    var edgeSpeed = 0.3;
//    
//    function updateEdge(index) {
//        var twentyFive = edge[index].val;
//        var seventyFive = 100 - edge[index].val;
//         $('.social > a').eq(index).find('.diamond polygon').attr('points', '0,50 ' + twentyFive + ',' + twentyFive + ' 50,0 ' + seventyFive + ',' + twentyFive + ' 100,50 ' + seventyFive + ',' + seventyFive + ' 50,100 ' + twentyFive + ',' + seventyFive);
//    }
//    
//    
//    var tweens = [];
//    var edge = [];
//    
//    $('.social > a').each(function(index) {
//        edge[index] = {val: 25};
//        tweens[index] = TweenLite.fromTo(edge[index], edgeSpeed, {val: 25}, {val: 0, ease: Quart.easeInOut, onUpdate: updateEdge, onUpdateParams: [index] }).paused(true);
//    });
//    
//    $('.social > a').on('mouseenter', function(){
//        tweens[$(this).index()].play();
//        $(this).addClass('shadow-off');
//    });
//    
//    $('.social > a').on('mouseleave', function(){
//        tweens[$(this).index()].reverse();
//        $(this).removeClass('shadow-off');
//    });
    
    
});