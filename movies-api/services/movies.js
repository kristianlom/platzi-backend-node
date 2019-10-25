const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie() {
    const movie = await Promise.resolve(moviesMock[0]);
    return movie || [];
  }

  async createMovie() {
    return moviesMock[0].id;
  }

  async updateMovie() {
    return moviesMock[0].id;
  }

  async deleteMovie() {
    return moviesMock[0].id;
  }
}

module.exports = MoviesService;
