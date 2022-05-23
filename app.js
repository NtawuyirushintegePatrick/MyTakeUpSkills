// function btn(i){

// for(let i=50;i<=80;i++){
//     console.log(i);
// }
// }
// let m;
// btn(m);




// const participants = [
//     { name: "ALVIN", age: 21, cameTme: 10 },
//     { name: "MOISE", age: 22, cameTme: 11 },
//     { name: "EMILE", age: 25, cameTme: 9 },
//     { name: "PATRICK", age: 23, cameTme: 10 },
//     { name: "GLORIA", age: 21, cameTme: 11 },
//     { name: "AUTHOR", age: 19, cameTme: 11 },
//     { name: "LILIANE", age: 21, cameTme: 9 },
//     { name: "CHANICE", age: 21, cameTme: 10 },
//   ];
//   let p=[];
//   let i;
//   for(i = 0;i< participants.length;i++) {
//       console.log(participants[i]);

//       if(participants[i].age >22 && participants[i].cameTme==10) {
//           p.push(participants[i]);
//       }
      
//   }
// console.log(p);



// First

// const capitalizeNames = peopleArray => peopleArray.map(name => 
// 	name.split(' ').map(word => 
// 		word[0].toUpperCase() + word.slice(1).toLowerCase()
// 	).join(' ')
// );

// const capitalizedNames = capitalizeNames(['jo', 'nelson', 'jurie']);
// console.log(capitalizedNames);


// Second


// function bingo(numbers) {
// 	const dictionary = {
// 	  1: "A",
// 	  2: "B",
// 	  3: "C",
// 	  4: "D",
// 	  5: "E",
// 	  6: "F",
// 	  7: "G",
// 	  8: "H",
// 	  9: "I",
// 	  10: "J",
// 	  11: "K",
// 	  12: "L",
// 	  13: "M",
// 	  14: "N",
// 	  15: "O",
// 	  16: "P",
// 	  17: "R",
// 	  18: "S",
// 	  19: "T",
// 	  20: "Q",
// 	  21: "U",
// 	  22: "V",
// 	  23: "W",
// 	  24: "X",
// 	  25: "Y",
// 	  26: "Z",
// 	};
// 	let sentence = "";
// 	numbers.forEach((num) => {
// 	  sentence += dictionary[num];
// 	});
  
// 	return sentence.toLowerCase();
//   }
  
//   console.log(bingo([1,2,26]));






// Q3 Display the all images but if we have image With "IMAGE",
// if we found no image display the first character of our name

// const employees = [
// 	{ name: "Shumbusho", image: "", salary: 400, age: 22 },
// 	{ name: "Patrick", image: "", salary: 230, age: 24 },
// 	{
// 	  name: "Alvin",
// 	  image:
// 		"https://media.istockphoto.com/photos/passport-photo-of-serious-brazilian-young-adult-man-with-braces-picture-id1315808211?k=20&m=1315808211&s=612x612&w=0&h=VmBH7yrF7EQqPVQu9wAfge6opadEbvJf3OpOX9PARPg=",
// 	  salary: 250,
// 	  age: 22,
// 	},
// 	{
// 	  name: "Liliane",
// 	  image: "",
// 	  salary: 320,
// 	  age: 28
// 	}

// 	]
// function  displayList(listData){
// 	const result=listData.map((element,index)=>{
// 		if(element.image===''){
//        return 'Number ${index}  has ${element.image} namee  is  ${element.name} with ${element.salary}K monthly';
// 		}
// 	   else{
// 		return 'Number ${index}  has ${element.image} namee  is  ${element.name} with ${element.salary}K monthly';  
// 	   }
// 	});
// 	return result;

// }

// let r=displayImage(employees);
// console.log(r);


// Question Q4





movies = [
	{
	  name: "Avengers",
	  type: "Sequel",
	  stars: 4.9,
	  boxoffice: "26",
	  cast: [
		{ name: "Chris Evans" },
		{ name: "Benedict Cumberbach" },
		{ name: "oody Harrelson" },
		{ name: "Mark Rufalo" },
		{ name: "Chris Hermworth" },
		{ name: "Chris Pratt" },
		{ name: "Andy Serkis" },
	  ],
	},
	{
	  name: "pirate of caribbean",
	  type: "Sequel",
	  stars: 4.9,
	  boxoffice: "18",
	  cast: [
		{ name: "Johnny Depp" },
		{ name: "Orlando Bloom" },
		{ name: "Kierra Knightley" },
		{ name: "Geofrey Right" },
		{ name: "Jonathan Pryce" },
	  ],
	},
	{
	  name: "pirate of caribbean",
	  type: "Sequel",
	  stars: 4.9,
	  boxoffice: "18",
	  cast: [
		{ name: "Johnny Depp" },
		{ name: "Orlando Bloom" },
		{ name: "Kierra Knightley" },
		{ name: "Geofrey Right" },
		{ name: "Jonathan Pryce" },
	  ],
	},
	{
	  name: "Lords of the ring",
	  type: "Sequel",
	  stars: 4.3,
	  boxoffice: "18",
	  cast: [
		{ name: "Andy Serkis" },
		{ name: "Orlando Bloom" },
		{ name: "Elijiah Wood" },
		{ name: "Karl Urban" },
	  ],
	},
	{
	  name: "Planet of the apes",
	  type: "Sequel",
	  stars: 4.6,
	  boxoffice: "18",
	  cast: [
		{ name: "Andy Serkis" },
		{ name: "Woody Harrelson" },
		{ name: "Tobby Kebell" },
	  ],
	},
	{
	  name: "Planet of the apes",
	  type: "Sequel",
	  stars: 4.6,
	  boxoffice: "18",
	  cast: [
		{ name: "Andy Serkis" },
		{ name: "Woody Harrelson" },
		{ name: "Tobby Kebell" },
	  ],
	},
  ];



  //  TODO 1 WRITE JAVASCRIPT FUNCTION THAT HELP REMOVE DUPLICATED MOVIES;

//   function removeDuplicatedMovies(movies){
// 	let unique_array = movies.filter(function(elem, index, self) {
// 		let firstOccurence = self.findIndex(elem => elem.name == self[index].name)
// 		return firstOccurence == index;
// 	});
  
// 	return unique_array
//   }
  
//   console.log("The removed duplicated Movies are:")
//   console.log(removeDuplicatedMovies(movies,movies.cast));


//  TODO 2 WRITE JAVASCRIPT FUNCTION THAT DISPLAY CHARACTERS PLAY IN 2 OR MORE MOVIES


// const findActorPlayedInMoreThanOneMovie = (allMovies) => {
// 	let actorNameWithNumOfMovie = {}
// 	for (let movie of allMovies) {
// 	  movie.cast.forEach((actor) => {
// 		actorNameWithNumOfMovie[actor.name] = actorNameWithNumOfMovie[actor.name]
// 		  ? actorNameWithNumOfMovie[actor.name] + 1
// 		  : 1
// 	  })
// 	}
  
// 	return Object.keys(actorNameWithNumOfMovie).filter((actor) => actorNameWithNumOfMovie[actor] >= 2)
//   }
  
//   console.log(findActorPlayedInMoreThanOneMovie(movies))


  //  TODO 3 WRITE JAVASCRIPT FUNCTION THAT GIT THE SUM OR TOTAL OF ALL BOX OFFICE



//     function removeDuplicatedMovies(movies){

// 	let unique_array = movies.filter(function(elem, index, self) {
// 		let firstOccurence = self.findIndex(elem => elem.name == self[index].name)
// 		return firstOccurence == index;
// 	});
  
// 	return unique_array
//   }
//   function sumOfOfficers(box){
// 	let sum =0;
// 	for(const m in box ){
		
// 		sum += parseInt(box[m].boxoffice);
	
		
// 	}
// 	return sum;
//   }
//   const r=(removeDuplicatedMovies(movies));
//   console.log("The sum of officers is:");
//   console.log(sumOfOfficers(r));






      

  
  //  NB BOX OFFICE VALUE IS IN BILLION  YOU HAVE TO RETURN SUM IN BILLION
  
  //  TODO 1 WRITE JAVASCRIPT FUNCTION THAT HELP REMOVE DUPLICATED MOVIES;
  //  TODO 2 WRITE JAVASCRIPT FUNCTION THAT DISPLAY CHARACTERS PLAY IN 2 OR MORE MOVIES
  //  TODO 3 WRITE JAVASCRIPT FUNCTION THAT GIT THE SUM OR TOTAL OF ALL BOX OFFICE