$(function () {
    oLng.init();
  })
  
  oLng = {
    eBlock: null,
    eBtn: null,
    eList: null,
    lang: null,
    init: function () {
      this.eBlock = $('.lng-select'),
      this.eList = oLng.eBlock.children('ul'),
      this.eBtn = oLng.eBlock.children('div'),
      this.onChg();
  
      this.eBtn.text(oLng.eList.find('.active a').text());
  
      $(document).click(function (e) {
        if ($(e.target).is(oLng.eBtn)) { // Div
          if (oLng.eBlock.hasClass('open')) oLng.hide();
          else oLng.show();
        } else if ($(e.target).is(oLng.eList.find('a')) && oLng.eBlock.hasClass('open')) { // Link
          oLng.eBtn.text($(e.target).text());
          $(e.target).parent().siblings().removeClass('active');
          $(e.target).parent().addClass('active');
          oLng.onChg();
          oLng.hide();
        } else if (oLng.eBlock.hasClass('open')) { // Without lng
          oLng.hide();
        }
      })
    },
    show: function () {
      oLng.eBlock.addClass('open');
      oLng.eList.stop().slideDown(150);
    },
    hide: function () {
      oLng.eBlock.removeClass('open');
      oLng.eList.stop().slideUp(150);
    },
    onChg: function () {
      oLng.lang = oLng.eList.find('.active a').data('lng');
      console.info('Current language: '+ oLng.lang);
    }
  }