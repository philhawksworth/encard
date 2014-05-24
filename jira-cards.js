(function($) {

  var cardsHTML = $('<div class="encarded-cards"></div>');
  var controls = $('<div class="encarded-controls"><a href="#" class="includeAll">Include All</a> | <a href="#" class="excludeAll">exclude All</a> | <a href="javascript:!function(){var e="https://googledrive.com/host/0B0MUcRHkhiilcVpBeVVYdEtJUEE/",t="",c=document.createElement("link");c.rel="stylesheet",c.href=e+"jira-cards.css"+t,c.media="screen,print",c.type="text/css",document.getElementsByTagName("head")[0].appendChild(c);var d=document.createElement("script");d.src=e+"jira-cards.js"+t,document.body.appendChild(d)}();">bookmark</a></div>');


  getGards = function() {
    var cards = $('.ghx-issue-compact:visible');
    $.each(cards, function(index, val) {
      var c = $(cards[index]);
      var labels = '<div class="labels"></div>';
      // c.find('.aui-label').each(function(index, val){
      //   labels.append($(val)); 
      // });
      var card = {
        done : c.hasClass('ghx-done'),
        id : c.find('.ghx-key a').text(),
        story : c.find('.ghx-summary').attr('title'),
        labels: labels,
        points: c.find('.aui-badge').text() || "?",
        type: c.find('.ghx-type').attr('title') == "Bug" ? "BUG" : ""
      };
      if(!card.done){
        cardsHTML.append(addCard(card));
      }
    });
  };


  addCard = function(c) {
    return '<div class="card '+c.id+'">' +
    '<p class="number">'+ c.id +'<a href="#" class="hide">include?</a></p><h1 class="story">'+ c.story +'</h1>'+
    '<p class="type">'+c.type+'</p>' +c.labels + '<p class="points">'+ c.points +'</p></div>';
  };


  showCards = function() {
    $('body > *').hide();
    $('body').append(controls);
    $('body').append(cardsHTML);
  };


  addEventHandlers = function() {
    $('.encarded-cards a.hide').click(function(e) {
      e.preventDefault();
      $(this).parents('.card').toggleClass('not-for-print');
    });
    
    $('.encarded-controls a.excludeAll').click(function(e) {
      e.preventDefault();
      $('.encarded-cards .card').addClass('not-for-print');
    });

    $('.encarded-controls a.includeAll').click(function(e) {
      e.preventDefault();
      $('.encarded-cards .card').removeClass('not-for-print');
    });
  };


  getGards();
  showCards();
  addEventHandlers();

})(jQuery);