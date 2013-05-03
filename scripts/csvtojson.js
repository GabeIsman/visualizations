var csv = require( 'csv' );

var data = [];

csv()
    .from.stream( process.stdin )
    .transform( function ( row ) {
        // this abviously will not work with large data sets
        data.push( row );
    }).on( 'end', function ( count ) {
        process.stdout.write( JSON.stringify( data ));
    });