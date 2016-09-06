/**
 * ClientsController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
  main: function(req, res) {
    return res.view('clientsMain', {
      client_list: Clients.find()}
    );
  }
	
};

