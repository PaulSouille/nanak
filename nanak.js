        // Events will be sent when someone followers
        // Please use event listeners to run functions.
        document.addEventListener('goalLoad', function(obj) {

          $('#title').html(obj.detail.title);
          $('#goal-current').text(obj.detail.amount.current+' € ');
          $('#goal-total').text(obj.detail.amount.target+' €');
          $('#goal-end-date').text(obj.detail.to_go.ends_at);
          $('#progressbar').css('width',(obj.detail.amount.current/obj.detail.amount.target)*100+'%');

        });
        document.addEventListener('goalEvent', function(obj) {

          $('#title').html(obj.detail.title);
          $('#goal-current').text(obj.detail.amount.current+' € ');
          $('#goal-total').text(obj.detail.amount.target+' €');
          $('#goal-end-date').text(obj.detail.to_go.ends_at);
          $('#progressbar').css('width',(obj.detail.amount.current/obj.detail.amount.target)*100+'%')

        });
