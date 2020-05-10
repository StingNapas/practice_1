"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0; i < 2; i++){
	let q1 = prompt("Один из последних просмотренных фильмов?", ""),
			q2 = prompt("На сколько оцените его?", "");

	if (typeof(q1) != null && typeof(q2) != null && q1 != '' && q2 != ''
			&& q1.length <= 50 ){
		personalMovieDB.movies[q1] = q2;
	} else {
		i--;
	}
}

if (personalMovieDB.count < 10){
	console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
	console.log("Вы классический зритель");
} else if(personalMovieDB.count >= 30){
	console.log("Вы киноман");
} else{
	console.log("Произошла ошибка");
}