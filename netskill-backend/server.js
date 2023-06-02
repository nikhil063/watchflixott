
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// app.use(cors({
//  origin:'*'
// }))
// const app = express();
// const port = 3001;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/ott_database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// // Create a movie schema and model
// const movieSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   rating: Number,
// });

// const Movie = mongoose.model('Movie', movieSchema);

// // Retrieve all movies
// app.get('/api/movies', async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.json(movies);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Create a new movie
// app.post('/api/movies', async (req, res) => {
//   try {
//     const movie = new Movie(req.body);
//     await movie.save();
//     res.status(201).json(movie);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/ott_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const movieSchema = new mongoose.Schema({
  title:{type: String, required: true},
  description: {type: String, required: true},
  rating: {type: Number, required: true, min:0, max:10},
});


const Movie = mongoose.model('Movie', movieSchema);


app.get('/api/movies', (req, res) => {

  Movie.find()
    .then((movies) => {
      res.json(movies);
    })
    .catch((error) => {
      console.error('Error fetching movies:', error);
      res.status(500).json({ error: 'Failed to fetch movies' });
    });
});

app.post('/api/movies', (req, res) => {

  const { title, description, rating } = req.body;
  const newMovie = new Movie({ title, description, rating });

  newMovie.save()
    .then((movie) => {
      res.status(201).json(movie);
    })
    .catch((error) => {
      console.error('Error creating movie:', error);
      res.status(500).json({ error: 'Failed to create movie' });
    });
});

app.put('/api/movies/:id', (req, res) => {

  const { id } = req.params;
  const { title, description, rating } = req.body;

  Movie.findByIdAndUpdate(id, { title, description, rating }, { new: true })
    .then((updatedMovie) => {
      res.json(updatedMovie);
    })
    .catch((error) => {
      console.error('Error updating movie:', error);
      res.status(500).json({ error: 'Failed to update movie' });
    });
});

app.delete('/api/movies/:id', (req, res) => {

  const { id } = req.params;

  Movie.findByIdAndDelete(id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.error('Error deleting movie:', error);
      res.status(500).json({ error: 'Failed to delete movie' });
    });
});


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
