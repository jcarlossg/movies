import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}
  getMovies(searchTeam: string) {
    /* console.log(searchTeam)*/
    this.movieService.getMovies(searchTeam).subscribe((data) => {
      //  console.log(data);
      if (data.Response === 'False') {
        this.movies = [];
      } else {
        this.movies = data.Search;
      }
    });
  }
}
