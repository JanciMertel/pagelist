Webs = new Mongo.Collection("webs");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    webs: function () {
      return Webs.find({}, {sort: {createdAt: -1}});
    }
  });
  
  Template.web.events({
      "click .delete": function (el) {
      if($(el.currentTarget).parent().find('.toggle').prop("checked"))
      {
        Webs.remove(this._id);
      }
    }
  });
}  


Router.map(function() {
  this.route('add', {
      path: '/api/add',
      where: 'server',
      render: "",
      action: function() {
          var requestMethod = this.request.method;
          var requestData = this.request.body;

          this.response.writeHead(200, {'Content-Type': 'text/html'});
          console.log(JSON.stringify(requestData));
          this.response.end('<html><body>Your request was a ' + requestMethod + '</body></html>');
          Webs.insert({ url: requestData.url, createdAt: new Date() });
      }
  });
  this.route('home', {
      path: '/'
  });
});   

if (Meteor.isServer) {
  Router.onBeforeAction(Iron.Router.bodyParser.urlencoded({
    extended: false
  }));
  Meteor.startup(function () {
                  
  }); 
}
