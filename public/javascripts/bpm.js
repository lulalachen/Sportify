var ngBPM = angular.module('ngBPM', []);

// var n = 40,
//     random = d3.random.normal(0, .2),
//     data = d3.range(n).map(random);

// var margin = {top: 20, right: 20, bottom: 20, left: 40},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// var x = d3.scale.linear()
//     .domain([0, n - 1])
//     .range([0, width]);

// var y = d3.scale.linear()
//     .domain([80, 150])
//     .range([height, 80]);

// var line = d3.svg.line()
//     .x(function(d, i) { return x(i); })
//     .y(function(d, i) { return y(d); });

// var svg = d3.select("#graph").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// svg.append("defs").append("clipPath")
//     .attr("id", "clip")
//   .append("rect")
//     .attr("width", width)
//     .attr("height", height);

// svg.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + y(0) + ")")
//     .call(d3.svg.axis().scale(x).orient("bottom"));

// svg.append("g")
//     .attr("class", "y axis")
//     .call(d3.svg.axis().scale(y).orient("left"));

// var path = svg.append("g")
//     .attr("clip-path", "url(#clip)")
//   .append("path")
//     .datum(data)
//     .attr("class", "line")
//     .attr("d", line);



ngBPM.controller('bpmCtrl', ['$scope','$interval','$http', '$timeout', function ($scope,$interval,$http,$timeout) {
	console.log('bpm')
	$scope.bpm;
	$scope.song = 'Lazy Song';
	$scope.songs = [
		{
			name : 'Lazy Song',
			singer : 'Lulala',
			length : '3 : 00'
		},
		{
			name : 'Let Her Go',
			singer : 'Nolala',
			length : '3 : 00'
		},
		{
			name : 'Yo',
			singer : 'Hulala',
			length : '3 : 00'
		},
		{
			name : 'Hey, Soul Sister',
			singer : 'Tulala',
			length : '3 : 00'
		},
		{
			name : '聽媽媽的話',
			singer : 'Luhaha',
			length : '3 : 00'
		}
	]

	$scope.cover = '/images/cover.jpg';
	$('#loading').fadeIn();

	$scope.getBPM = function(){
		$http.get('/api/getBPM').success(function(bpm){
			$scope.bpm = bpm
			// data.push(bpm);
			// path
			//       .attr("d", line)
			//       .attr("transform", null)
			//     .transition()
			//       .duration(1000)
			//       .ease("linear")
			//       .attr("transform", "translate(" + x(-1) + ",0)")

		 //  	// pop the old data point off the front
		 //  	data.shift();
		}).error(function(err){
			console.log(err);
		});
	}
	$timeout(function () {
	  	$('#loading').fadeOut();
	},1000);
	$interval(function(){
		$scope.getBPM();
		$scope.random();
		console.log($scope.bpm);
	},1000);
	
	$scope.random = function(){
		var bpm = Math.floor( Math.random()*1000 )%70 + 80;
		$http.get('/api?bpm=' + bpm );
	}

}])



				

