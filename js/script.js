"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function (){
		this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},
	rememberMyFilms: function(){
		for (let i = 0; i < 2; i++){
			let q1 = prompt("Один из последних просмотренных фильмов?", ""),
					q2 = prompt("На сколько оцените его?", "");
		
			if (typeof(q1) != null && typeof(q2) != null && q1 != '' && q2 != ''
					&& q1.length <= 50 ){
				this.movies[q1] = q2;
			} else {
				i--;
			}
		}
	},
	detectPersonalLevel: function(){
		if (this.count < 10){
			console.log("Просмотрено довольно мало фильмов");
		} else if(this.count >= 10 && this.count < 30){
			console.log("Вы классический зритель");
		} else if(this.count >= 30){
			console.log("Вы киноман");
		} else{
			console.log("Произошла ошибка");
		}
	},
	showMyDB: function(){
		if (this.privat === false) {
			console.log(this);
		}
	},
	writeYourGenres: function(){
		for (let i = 1; i < 4; i++){
			let answ = prompt(`Ваш любимый жанр под номером ${i}`, "");
			if (answ != '' && answ != null){
				this.genres[i-1] = answ;
			} else {
				i--;
			}
		}

		this.genres.forEach(function(item, index){
			console.log(`Любимый жанр #${index + 1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function(){
		this.privat = !this.privat;
	},
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();