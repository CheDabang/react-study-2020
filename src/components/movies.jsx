import React, { Component } from "react";
import Pagination from "../components/pagination";
// import Like from "../components/like";
import MoviseTable from "../components/moviesTable";
import ListGroup from "../components/listGroup";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService.js";
import { paginate } from "../untils/paginate";
class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
  };

  // 生命周期钩子
  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
    console.log(movie);
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log("pageClik" + page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    console.log("pageClik" + genre);
    this.setState({ selectedGenre: genre });
    let selectMovies = null;
    if (genre === "all") {
      selectMovies = this.state.movies;
    } else {
      selectMovies = this.state.movies.filter((m) => m.genre._id === genre._id);
    }

    // console.log(movies);
    this.setState({ selectMovies, currentPage: 1 });
    // this.setState({ movies });
  };

  handleSort = (path) => {
    console.log(path);
  };

  render() {
    // const { length: count } = this.state.movies;
    // 继续简化代码
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
    } = this.state;
    if (this.state.movies.length === 0) {
      return <p>There are no movies in` the database</p>;
    }

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          {/* 旧版00 */}
          {/* <ListGroup genres={genres} onGenreSelect={this.handleGenreSelect} /> */}
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            // textProerty="name"
            // valueProerty="_id"
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in th datatbase</p>
          {/* <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <MoviseTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            // itemsCount={count}
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
