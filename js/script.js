"use strict";

let numberOfFilms;

function start(){
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10){
		console.log("Просмотрено довольно мало фильмов");
	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		console.log("Вы классический зритель");
	} else if(personalMovieDB.count >= 30){
		console.log("Вы киноман");
	} else{
		console.log("Произошла ошибка");
	}
}

detectPersonalLevel();

// console.log(personalMovieDB);

function showMyDB(obj) {
	if (obj.privat === false) {
		console.log(obj);
	}
}

function writeYourGenres() {
	for (let i = 1; i < 4; i++){
		personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
	}
}

showMyDB(personalMovieDB);
writeYourGenres();