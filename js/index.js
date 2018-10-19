     $('.open-overlay').click(function() {
       $('.open-overlay').css('pointer-events', 'none');
       var overlay_navigation = $('.overlay-navigation'),
         top_bar = $('.bar-top'),
         middle_bar = $('.bar-middle'),
         bottom_bar = $('.bar-bottom');

       overlay_navigation.toggleClass('overlay-active');
       if (overlay_navigation.hasClass('overlay-active')) {

         top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
         middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
         bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
         overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
         overlay_navigation.velocity('transition.slideLeftIn', {
           duration: 300,
           delay: 0,
           begin: function() {
             $('nav ul li').velocity('transition.perspectiveLeftIn', {
               stagger: 150,
               delay: 0,
               complete: function() {
                 $('nav ul li a').velocity({
                   opacity: [1, 0],
                 }, {
                   delay: 10,
                   duration: 140
                 });
                 $('.open-overlay').css('pointer-events', 'auto');
               }
             })
           }
         })

       } else {
         $('.open-overlay').css('pointer-events', 'none');
         top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
         middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
         bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
         overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
         $('nav ul li').velocity('transition.perspectiveRightOut', {
           stagger: 150,
           delay: 0,
           complete: function() {
             overlay_navigation.velocity('transition.fadeOut', {
               delay: 0,
               duration: 300,
               complete: function() {
                 $('nav ul li a').velocity({
                   opacity: [0, 1],
                 }, {
                   delay: 0,
                   duration: 50
                 });
                 $('.open-overlay').css('pointer-events', 'auto');
               }
             });
           }
         })
       }
     })
     , tt = i(37)
       , it = i.n(tt)
       , nt = i(38)
       , st = i.n(nt)
       , rt = {
         strings: ["Donate"],
         typeSpeed: 200,
         backSpeed: 150,
         startDelay: 500,
         backDelay: 2500,
         loop: !0
     }
     , at = (new st.a(".js-typed",rt),
       new st.a(".js-typed-mobile",rt),
       function() {
           function e(e, t) {
               for (var i = 0; i < t.length; i++) {
                   var n = t[i];
                   n.enumerable = n.enumerable || !1,
                   n.configurable = !0,
                   "value"in n && (n.writable = !0),
                   Object.defineProperty(e, n.key, n)
               }
           }
           return function(t, i, n) {
               return i && e(t.prototype, i),
               n && e(t, n),
               t
           }
       }());
       new lt,
           new ht,
           "#giving" === window.location.hash && mt.searchDrawer("OPEN", mt._drawerInit[0]),
           "#giving-monthly" === window.location.hash && (mt.searchDrawer("OPEN", mt._drawerInit[0]),
           vt._tab[1],
           vt.getContent(vt._tab[1], vt._tab[1].dataset.id),
           vt.switchHeader(vt._tab[1].dataset.id)),
           window.onhashchange = function() {
               "#giving" === window.location.hash && mt.searchDrawer("OPEN", mt._drawerInit[0]),
               "#giving-monthly" === window.location.hash && (mt.searchDrawer("OPEN", mt._drawerInit[0]),
               vt._tab[1],
               vt.getContent(vt._tab[1], vt._tab[1].dataset.id),
               vt.switchHeader(vt._tab[1].dataset.id))
           }
           ;
