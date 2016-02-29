var data = [
      {
          "title": "Emory Sample Video",
          "description": "Short video I created",
          "id": "1",
          "length": "15",
          "src": "http://players.brightcove.net/4744530050001/default_default/index.html?videoId=4766574034001"
      },
      {
          "title": "Sample Video 1",
          "description": "This short description can be used to give more info...",
          "id": "2",
          "length": "8",
          "src": "http://players.brightcove.net/4744530050001/default_default/index.html?videoId=4744690338001"
      },
      {
          "title": "Sample Video 2",
          "description": "This short description can be used to give more info...",
          "id": "2",
          "length": "29",
          "src": "http://players.brightcove.net/4744530050001/default_default/index.html?videoId=4744690337001"
      }
    ];


var template = _.template($('#video-list').html());
var html = template(data);
$(".vids").html(html);
