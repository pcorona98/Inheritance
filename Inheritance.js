class Media {
  constructor(name) {
    this.name = name;
    this.reviews = []; 
  }
  addReview(review) {
    this.reviews.push(review);
  }
}

class Book extends Media {
  constructor(name, author, reviews, addReview) {
  super(name, reviews, addReview);
  this.author = author;
  }
}

class Movie extends Media {
  constructor(name, director, reviews, addReview) {
  super(name, reviews, addReview);
  this.director = director;
  }
}