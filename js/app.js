$(document).ready(function() {

    var width = window.innerWidth;
    var height = window.innerHeight;

    var exerciseNames = ["Squats", "Deadlifts", "Presses", "Bench Presses", "Power Clean"];

    var svg = d3.select("#container")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Someday there will be a server
    var data =  [{"Date":"1/8/2013","Notes":"","Squats":[{"weight":"105","reps":"5","num":"2"},{"weight":"125","reps":"5","num":"2"}],"Deadlifts":[{"weight":"135","reps":"5","num":1}]},{"Date":"1/15/2013","Notes":"","Squats":[{"weight":"125","reps":"5","num":"3"}],"Deadlifts":[{"weight":"175","reps":"5","num":1}],"Presses":[{"weight":"80","reps":"5","num":"3"}],"Chin-ups":[{"weight":"1","num":1}]},{"Date":"1/17/2013","Notes":"","Squats":[{"weight":"145","reps":"5","num":"3"}],"Deadlifts":[{"weight":"155","reps":"5","num":1}],"Bench Presses":[{"weight":"90","reps":"5","num":"3"}]},{"Date":"1/20/2013","Notes":"","Squats":[{"weight":"155","reps":"5","num":"3"}],"Deadlifts":[{"weight":"195","reps":"5","num":1}],"Presses":[{"weight":"90","reps":"5","num":"3"}]},{"Date":"1/22/2013","Notes":"","Squats":[{"weight":"165","reps":"5","num":"3"}],"Deadlifts":[{"weight":"215","reps":"5","num":1}],"Bench Presses":[{"weight":"110","reps":"5","num":1}]},{"Date":"1/24/2013","Notes":"","Squats":[{"weight":"175","reps":"5","num":"3"}],"Deadlifts":[{"weight":"235","reps":"5","num":1}],"Presses":[{"weight":"100","reps":"5","num":"3"}],"Chin-ups":[{"weight":"1","num":1}]},{"Date":"1/27/2013","Notes":"","Squats":[{"weight":"185","reps":"5","num":"3"}],"Deadlifts":[{"weight":"255","reps":"5","num":1}],"Bench Presses":[{"weight":"110","reps":"5","num":"3"}]},{"Date":"1/29/2013","Notes":"","Squats":[{"weight":"195","reps":"5","num":"3"}],"Deadlifts":[{"weight":"275","reps":"5","num":1}],"Presses":[{"weight":"110","reps":"5","num":"3"}]},{"Date":"1/31/2013","Notes":"","Squats":[{"weight":"205","reps":"5","num":"3"}],"Deadlifts":[{"weight":"295","reps":"5","num":1}],"Bench Presses":[{"weight":"130","reps":"5","num":"3"}]},{"Date":"2/3/2013","Notes":"","Squats":[{"weight":"215","reps":"5","num":"3"}],"Deadlifts":[{"weight":"315","reps":"5","num":1}],"Presses":[{"weight":"110","reps":"5","num":1}],"Chin-ups":[{"weight":"1","num":1}]},{"Date":"2/5/2013","Notes":"","Squats":[{"weight":"225","reps":"5","num":"3"}],"Deadlifts":[{"weight":"315","reps":"5","num":1}],"Bench Presses":[{"weight":"140","reps":"5","num":"3"}],"Chin-ups":[{"weight":"1","num":1}]},{"Date":"2/8/2013","Notes":"","Squats":[{"weight":"235","reps":"5","num":"3"}],"Deadlifts":[{"weight":"315","reps":"2","num":1}],"Presses":[{"weight":"110","reps":"5","num":1}]},{"Date":"2/10/2013","Notes":"","Squats":[{"weight":"240","reps":"5","num":"3"}],"Deadlifts":[{"weight":"315","reps":"3","num":1},{"weight":"315","reps":"2","num":1}],"Bench Presses":[{"weight":"150","reps":"5","num":"3"}]},{"Date":"2/12/2013","Notes":"busted callus","Squats":[{"weight":"245","reps":"5","num":"3"}],"Deadlifts":[{"weight":"325","reps":"3","num":1}],"Presses":[{"weight":"120","reps":"5","num":"3"}]},{"Date":"2/15/2013","Notes":"","Squats":[{"weight":"255","reps":"5","num":"3"}],"Bench Presses":[{"weight":"160","reps":"5","num":"3"}]},{"Date":"2/17/2013","Notes":"","Squats":[{"weight":"265","reps":"5","num":"3"}],"Deadlifts":[{"weight":"335","reps":"5","num":1}],"Presses":[{"weight":"125","reps":"5","num":"3"}]},{"Date":"2/19/2013","Notes":"Sick"},{"Date":"2/23/2013","Notes":"","Squats":[{"weight":"265","reps":"5","num":"3"}],"Deadlifts":[{"weight":"335","reps":"5","num":1}],"Bench Presses":[{"weight":"160","reps":"5","num":"3"}]},{"Date":"2/25/2013","Notes":"","Squats":[{"weight":"275","reps":"5","num":"3"}],"Deadlifts":[{"weight":"345","reps":"5","num":1}],"Presses":[{"weight":"125","reps":"5","num":1}],"Chin-ups":[{"weight":"2","num":1}]},{"Date":"2/27/2013","Notes":"","Squats":[{"weight":"280","reps":"5","num":"3"}],"Power Clean":[{"weight":"65","reps":"3","num":"5"}],"Bench Presses":[{"weight":"165","reps":"5","num":"3"}]},{"Date":"3/2/2013","Notes":"","Squats":[{"weight":"285","reps":"5","num":"3"}],"Deadlifts":[{"weight":"350","reps":"5","num":1}],"Presses":[{"weight":"115","reps":"5","num":"3"}]},{"Date":"3/4/2013","Notes":"","Squats":[{"weight":"290","reps":"5","num":"3"}],"Power Clean":[{"weight":"115","reps":"3","num":"5"}],"Bench Presses":[{"weight":"175","reps":"5","num":"3"}],"Chin-ups":[{"weight":"3","num":1}]},{"Date":"3/6/2013","Notes":"","Squats":[{"weight":"295","reps":"5","num":"3"}],"Deadlifts":[{"weight":"360","reps":"5","num":1}],"Presses":[{"weight":"120","reps":"5","num":"3"}],"Chin-ups":[{"weight":"1","num":1}]},{"Date":"3/10/2013","Notes":"","Squats":[{"weight":"300","reps":"5","num":"3"}],"Power Clean":[{"weight":"125","reps":"3","num":"5"}],"Bench Presses":[{"weight":"180","reps":"5","num":"3"}],"Chin-ups":[{"weight":"1","num":1}]},{"Date":"3/12/2013","Notes":"","Squats":[{"weight":"300","reps":"5","num":"3"}],"Deadlifts":[{"weight":"365","reps":"5","num":1}],"Presses":[{"weight":"125","reps":"5","num":"3"}]},{"Date":"3/14/2013","Notes":"No time for squats","Squats":[{"weight":"225","reps":"5","num":1}],"Power Clean":[{"weight":"135","reps":"3","num":"5"}],"Bench Presses":[{"weight":"185","reps":"5","num":"3"}]},{"Date":"3/17/2013","Notes":"Failed out of the squat","Squats":[{"weight":"310","reps":"5","num":1},{"weight":"310","reps":"2","num":1},{"weight":"310","reps":"5","num":1}],"Deadlifts":[{"weight":"375","reps":"5","num":1}],"Presses":[{"weight":"130","reps":"5","num":"3"}]},{"Date":"3/21/2013","Notes":"","Power Clean":[{"weight":"135","reps":"5","num":"3"}],"Bench Presses":[{"weight":"190","reps":"5","num":1}]},{"Date":"3/19/2013","Notes":"Knee pain","Squats":[{"weight":"310","reps":"5","num":1},{"weight":"310","reps":"5","num":1},{"weight":"310","reps":"3","num":1}],"Deadlifts":[{"weight":"380","reps":"5","num":1}],"Presses":[{"weight":"135","reps":"5","num":"3"}]},{"Date":"3/24/2013","Notes":"Knee pain","Squats":[{"weight":"310","reps":"5","num":"2"}],"Power Clean":[{"weight":"135","reps":"3","num":"5"}],"Bench Presses":[{"weight":"190","reps":"5","num":"2"},{"weight":"190","reps":"4","num":1}]},{"Date":"3/26/2013","Notes":"Knees","Squats":[{"weight":"310","reps":"5","num":1}],"Deadlifts":[{"weight":"390","reps":"5","num":1}],"Presses":[{"weight":"140","reps":"5","num":"3"}]},{"Date":"3/31/2013","Notes":"in MA, short workout, started smoking regularly again","Squats":[{"weight":"225","reps":"5","num":1}],"Power Clean":[{"weight":"140","reps":"3","num":"5"}],"Bench Presses":[{"weight":"135","reps":"5","num":"3"}]},{"Date":"4/2/2013","Notes":"","Squats":[{"weight":"225","reps":"5","num":"3"}],"Power Clean":[{"weight":"145","reps":"3","num":"5"}],"Bench Presses":[{"weight":"195","reps":"5","num":"2"},{"weight":"195","reps":"3","num":1}]},{"Date":"4/4/2013","Notes":"","Squats":[{"weight":"225","reps":"10","num":"2"}],"Deadlifts":[{"weight":"400","reps":"5","num":1}],"Presses":[{"weight":"150","reps":"4","num":1},{"weight":"140","reps":"4","num":1},{"weight":"135","reps":"5","num":1}]},{"Date":"4/7/2013","Notes":"","Squats":[{"weight":"225","reps":"10","num":"2"}],"Power Clean":[{"weight":"150","reps":"3","num":"5"}],"Bench Presses":[{"weight":"195","reps":"5","num":"2"},{"weight":"195","reps":"4","num":1}]},{"Date":"4/9/2013","Notes":"","Squats":[{"weight":"235","reps":"5","num":"2"}],"Deadlifts":[{"weight":"405","reps":"5","num":1}],"Presses":[{"weight":"145","reps":"4","num":1},{"weight":"145","reps":"3","num":1}]},{"Date":"4/11/2013","Notes":"Missed workout, partying"},{"Date":"4/14/2013","Notes":"No sleep, no barbells","Squats":[{"weight":"225","reps":"7","num":1}],"Bench Presses":[{"weight":"195","reps":"4","num":1},{"weight":"195","reps":"3","num":1}]},{"Date":"4/16/2013","Notes":"Morning workout","Squats":[{"weight":"260","reps":"5","num":1}],"Deadlifts":[{"weight":"415","reps":"2","num":1}],"Presses":[{"weight":"135","reps":"5","num":"3"}]},{"Date":"4/18/2013","Notes":"Lazy"},{"Date":"4/21/2013","Notes":"Tweaking right wrist on the press, catastrophic failure on final rep of deadlift ","Squats":[{"weight":"265","reps":"5","num":"3"}],"Deadlifts":[{"weight":"410","reps":"4","num":1}],"Presses":[{"weight":"135","reps":"5","num":"3"}]},{"Date":"4/23/2013","Notes":"Quit smoking (killin it)","Squats":[{"weight":"275","reps":"5","num":"3"}],"Power Clean":[{"weight":"155","reps":"3","num":"5"}],"Bench Presses":[{"weight":"195","reps":"5","num":"3"}]},{"Date":"4/25/2013","Notes":"","Squats":[{"weight":"280","reps":"5","num":"3"}],"Deadlifts":[{"weight":"410","reps":"5","num":1}],"Presses":[{"weight":"140","reps":"4","num":1},{"weight":"135","reps":"5","num":1},{"weight":"137.5","reps":"5","num":1}]},{"Date":"4/29/2013","Notes":"","Squats":[{"weight":"280","reps":"5","num":"2"}],"Bench Presses":[{"weight":"200","reps":"5","num":"3"}]},{"Date":"5/1/2013","Notes":"","Squats":[{"weight":"280","reps":"5","num":"3"}],"Power Clean":[{"weight":"165","reps":"3","num":"2"}],"Presses":[{"weight":"140","reps":"5","num":"3"}]}];

    var prepareData = function(data) {
        return _.map(data, function(workout) {
            var date = workout.Date;
            var exercises = _.pick(workout, exerciseNames);
            var numTotal = _.keys(exercises).length;
            exercises = _.map(exercises, function(exercise, key) {
                return {
                    type: key,
                    sets: exercise,
                    numExercises: numTotal,
                    date: date,
                    weight: _.max(_.map(exercise, function(set) { return parseInt(set.weight); }))
                };
            });

            return exercises;
        })
    };

    var dateFormat = d3.time.format("%m/%d/%Y");

    data = _.map(data, function(workout) {
        workout.Date = dateFormat.parse(workout.Date);
        return workout;
    });

    var tickCount = data.length /  10;
    var dates = _.pluck(data, "Date");
    var startDate = dates[0];
    var endDate = dates[dates.length - 1];
    var numDays = d3.time.days(startDate, endDate).length;
    var scaleTime = d3.time.scale()
        .domain([startDate, endDate])
        .range([0, width]);

    var ticks = scaleTime.ticks(tickCount);
    var tickFormat = scaleTime.tickFormat(tickCount);
    var baseHeight = height - 60;

    svg.selectAll(".date")
        .data(ticks)
        .enter()
        .append("text")
        .attr("x", function(d, i) { return scaleTime(d); })
        .attr("y", baseHeight + 20)
        .attr("fill", "red")
        .text(tickFormat);

    exerciseData = prepareData(data);

    var rectWidth = (width / numDays) / 3;
    var colors = d3.scale.ordinal().domain(exerciseNames).range(["#000", "#222", "#444", "#666", "#888"]);
    var scale = d3.scale.linear()
        .domain([0, 450])
        .range([0, baseHeight]);


    // init data vis to zero height
    svg.selectAll(".bar-group")
        .data(exerciseData)
        .enter()
        .append("g")
        .selectAll("rect")
        .data(function(d, i) { return d; })
        .enter()
        .append("rect")
        .attr("width", rectWidth)
        .attr("height", 0)
        .attr("x", function(d, i) { return scaleTime(d.date) + rectWidth * i; })
        .attr("y", baseHeight)
        .attr("fill", function(d, i) { return colors(d.type); });

    // transition the data to its full height
    svg.selectAll("rect")
        .transition()
        .delay(function(d,i) { return i * 10; })
        .attr("y", function(d, i) { return baseHeight - scale(d.weight); })
        .attr("height", function(d) { return scale(d.weight); })
});
