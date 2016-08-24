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


