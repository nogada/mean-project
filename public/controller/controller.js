function AppCtrl($scope) {
	console.log("hello world controller");
	person1	= {
		name : "lee",
		email : "lee@test.co.kr",
		number : "111-111-1111"
	};
	person2	= {
		name : "nogada",
		email : "nogada@test.co.kr",
		number : "222-222-2222"
	};
	person3	= {
		name : "dosman1",
		email : "dosman1@test.co.kr",
		number : "111-111-1111"
	};
	var contactlist	= [person1, person2, person3];
	$scope.contactlist = contactlist;
}