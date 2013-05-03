// Convert data from the format that I recorded in, to something a little more
// comsumable

var _ = require('underscore');

var processExercise = function ( exercise ) {
    var sets = exercise.split( ',' );

    sets = _.map( sets, function ( set )  {
        set = set.split( 'x' ); // data is in the form WEIGHTxREPSxNUM
        return {
            weight: set[0],
            reps: set[1],
            num: set.length > 2 ? set[2] : 1
        };
    });
    return sets;
}

var processWorkout = function ( row, headers ) {
    var zipped = _.zip( headers, row );
    var hash = {};

    // we don't want to process date (the first) and notes (the last element)
    var date = zipped.shift();
    hash[date[0]] = date[1];
    var notes = zipped.pop();
    hash[notes[0]] = notes[1];

    _.each( zipped, function ( pair ) {
        if ( pair[1].length > 0 ) {
            hash[pair[0]] = processExercise( pair[1] );
        }
    });
    return hash;
}

var data = "";

process.stdin.resume();
process.stdin.on( 'data', function ( chunk ) {
    data = data + chunk;
});

process.stdin.on( 'end', function () {
    data = JSON.parse( data );
    headers = data.shift();
    data = _.map( data, function( row ) {
        return processWorkout( row, headers );
    });
    process.stdout.write( JSON.stringify(data) );
});