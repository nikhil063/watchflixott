const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Razorpay = require('razorpay');


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

const razorpay = new Razorpay({
  key_id: 'rzp_test_BZKmSXpXrgRayL',
  key_secret: 'OAdFybwO1tLQ1bKfAPrldojG'
});


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

// app.post('/api/payment/orders', async (req, res) => {
//   const { amount, currency, receipt } = req.body;

//   try {
//     const order = await razorpay.orders.create({
//       amount,
//       currency,
//       receipt,
//     });

//     res.json({ order_id: order.id });
//   } catch (error) {
//     console.error('Error creating Razorpay order:', error);
//     res.status(500).json({ error: 'Unable to create order' });
//   }
// });

// app.post('/api/payment/verify', async (req, res) => {
//   const { order_id, payment_id, signature } = req.body;

//   try {
//     const attributes = {
//       order_id,
//       payment_id,
//     };

//     const isPaymentValid = razorpay.utility.verifyPaymentSignature(
//       attributes,
//       signature
//     );

//     if (isPaymentValid) {
      
//       res.json({ message: 'Payment verified successfully' });
//     } else {
//       console.error('Invalid Razorpay payment signature');
//       res.status(400).json({ error: 'Invalid payment' });
//     }
//   } catch (error) {
//     console.error('Error verifying Razorpay payment:', error);
//     res.status(500).json({ error: 'Unable to verify payment' });
//   }
// });


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
