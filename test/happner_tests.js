TEST_GLOBALS = {};

var service = require('happn-service-mongo');
var serviceInstance = new service();

var config = {
	url:'mongodb://127.0.0.1:27017/happn'
}

serviceInstance.initialize(config, function(e){

	if (e) throw e;

	TEST_GLOBALS.mongoService = serviceInstance;

	var happner_tests = require('happner-tests').instantiate(__dirname + '/context');
	happner_tests.run(function(e){
		if (e) {
			console.log('tests ran with failures', e);
			process.exit(1);
		}
		else{
			console.log('tests passed ok');
			process.exit(0);
		}
	});

});
