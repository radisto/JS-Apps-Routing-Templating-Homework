var arr = [{"gender":"Male","firstName":"Joe","lastName":"Riley","age":22,"country":"Russia"},
    {"gender":"Female","firstName":"Lois","lastName":"Morgan","age":41,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Roy","lastName":"Wood","age":33,"country":"Russia"},
    {"gender":"Female","firstName":"Diana","lastName":"Freeman","age":40,"country":"Argentina"},
    {"gender":"Female","firstName":"Bonnie","lastName":"Hunter","age":23,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Joe","lastName":"Young","age":16,"country":"Bulgaria"},
    {"gender":"Female","firstName":"Kathryn","lastName":"Murray","age":22,"country":"Indonesia"},
    {"gender":"Male","firstName":"Dennis","lastName":"Woods","age":37,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Billy","lastName":"Patterson","age":24,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Willie","lastName":"Gray","age":42,"country":"China"},
    {"gender":"Male","firstName":"Justin","lastName":"Lawson","age":38,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Ryan","lastName":"Foster","age":24,"country":"Indonesia"},
    {"gender":"Male","firstName":"Eugene","lastName":"Morris","age":37,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Eugene","lastName":"Rivera","age":45,"country":"Philippines"},
    {"gender":"Female","firstName":"Kathleen","lastName":"Hunter","age":28,"country":"Bulgaria"}];

var ageBetween18and24 = _.filter(arr, function(student){
    return student.age >= 18 && student.age <= 24;
});

console.log(ageBetween18and24);

var firstNameBeforeLast = _.filter(arr, function(student){
    return student.firstName < student.lastName;
});

console.log(firstNameBeforeLast);

var onlyNamesFromBulgaria = _.map(_.filter(arr, function(student){
    return student.country == 'Bulgaria'}),
    function(student){
        return {fullName: student.firstName + ' ' + student.lastName};
    });

console.log(onlyNamesFromBulgaria);

var lastFiveStudents = _.takeRight(arr, 5);

console.log(lastFiveStudents);

var firstThreeNotBulgarianMaleStudents = _.take(_.filter(arr, function(student){
    return student.gender == 'Male' && student.country != 'Bulgaria';
}), 3);

console.log(firstThreeNotBulgarianMaleStudents);