import "./index.css"
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', rating: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);



  useEffect(() => {
    fetch('http://localhost:3001/api/movies') 
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);
  

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/movies/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setMovies(movies.filter((movie) => movie._id !== id));
        setSearchResults(searchResults.filter((movie) => movie._id !== id)); // Update searchResults state
        console.log('Movie deleted successfully.');
      })
      .catch((error) => {
        console.error('Error deleting movie:', error);
      });
  };
  
  
  const handleEdit = (movie) => {
    setEditingMovie({ ...movie });
  };

  // const handleSave = (editedMovie) => {
  //   fetch(`http://localhost:3001/api/movies/${editedMovie._id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(editedMovie),
  //   })
  //     .then((response) => response.json())
  //     .then((updatedMovie) => {
  //       console.log('Edited movie saved:', updatedMovie);
  //       setMovies((prevMovies) =>
  //         prevMovies.map((movie) => (movie._id === updatedMovie._id ? updatedMovie : movie))
  //       );
  //       setSearchResults((prevResults) =>
  //         prevResults.map((movie) => (movie._id === updatedMovie._id ? updatedMovie : movie))
  //       ); 
  //       setEditingMovie(null);
  //     })
  //     .catch((error) => {
  //       console.error('Error saving edited movie:', error);
  //     });
  // };

  const handleSave = (editedMovie) => {
    fetch(`http://localhost:3001/api/movies/${editedMovie._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedMovie),
    })
      .then((response) => response.json())
      .then((updatedMovie) => {
        console.log('Edited movie saved:', updatedMovie);
        
        setMovies((prevMovies) =>
          prevMovies.map((movie) => (movie._id === updatedMovie._id ? updatedMovie : movie))
        );
        
        setSearchResults((prevResults) => {
          const updatedResults = prevResults.map((movie) =>
            movie._id === updatedMovie._id ? updatedMovie : movie
          );
          return updatedResults.map((result) => {
            if (result._id === updatedMovie._id) {
              return { ...result, ...updatedMovie };
            }
            return result;
          });
        });
        
        setEditingMovie(null);
      })
      .catch((error) => {
        console.error('Error saving edited movie:', error);
      });
  };
  
  
  
  const handleCreate = () => {
    fetch('http://localhost:3001/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then((response) => response.json())
      .then(() => {
        console.log('New movie created:', newMovie);
        fetch('http://localhost:3001/api/movies')
          .then((response) => response.json())
          .then((data) => setMovies(data))
          .catch((error) => {
            console.error('Error fetching movie data:', error);
          });
      })
      .catch((error) => {
        console.error('Error creating movie:', error);
      });
  };
  
  const handleSearch = () => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredMovies);
  };
  
  


  useEffect(() => {
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    setCurrentMovies(movies.slice(indexOfFirstMovie, indexOfLastMovie));
  }, [currentPage, movies, moviesPerPage]);

  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected + 1);
  };
  

  return (
  <>
  <div style={{display:"flex", marginBottom:"2vw", justifyContent:"center"}}>
  <input
    style={{ fontSize: "1.5vw", color: 'black', marginRight: '10px', borderRadius:"0.5vw", width:"25vw" }}
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <button style={{fontSize:"1.5vw", color:"white", backgroundColor:"grey", padding:"0.5vw 1vw", borderRadius:"0.5vw"}} onClick={handleSearch}>Search</button>
</div>
{searchResults.length > 0 ? (
  <div style={{display:"flex", justifyContent:"center", marginBottom:"2vw"}}>
    <h2 style={{color:"white"}}>Search Results:</h2>
    <ul>
      {searchResults.map((movie) => (
        <li style={{width:"60vw", margin:"0.5vw 1vw 0vw 2vw", display:"flex", justifyContent:"center"}} key={movie._id}>
          <p style={{ fontSize:"1vw",color:"black", width:"14vw", backgroundColor:"grey",  padding:"0.5vw 1vw",marginRight:"0.5vw" , borderRadius:"0.5vw"}}>{movie.title}</p>
          <p style={{ fontSize:"1vw",color:"black", width:"32vw", backgroundColor:"grey",  padding:"0.5vw 1vw",marginRight:"0.5vw" , borderRadius:"0.5vw"}}>{movie.description}</p>
          <p style={{ fontSize:"1vw",color:"black", width:"8vw", backgroundColor:"grey",  padding:"0.5vw 1vw",marginRight:"0.5vw" , borderRadius:"0.5vw"}}>{movie.rating}</p>
          <button style={{fontSize:"1vw",margin:"0.2vw",color:"black", backgroundColor:"white", borderRadius:"0.8vw", padding:"0.2vw 1vw", height:"2.5vw"}}  onClick={() => setEditingMovie(movie)}>Edit</button>
          <button style={{fontSize:"1vw",margin:"0.2vw",color:"white", backgroundColor:"red", borderRadius:"0.8vw", padding:"0.2vw 1vw", height:"2.5vw"}}  onClick={() => handleDelete(movie._id)}>Delete</button>

        </li>
      ))}
    </ul>
  </div>
) : (
  <div style={{display:"flex", justifyContent:"center"}}>
    <p style={{color:"red", fontSize:"1vw", marginBottom:"2vw"}}>No search results found.</p>
  </div>
)}

    <div style={{fontSize:"1.5vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <div style={{fontSize:"1.5vw", width:"80vw", display:"flex",justifyContent:"center", alignItems:"center", marginBottom:"2vw"}}>
        <input
          style={{fontSize:"1.5vw",  color: 'black', marginRight:"0.5vw", width:"20vw", borderRadius:"0.4vw", padding:"0.5vw 1vw" }}
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          style={{fontSize:"1.5vw",  color: 'black', marginRight:"0.5vw" , width:"39vw", borderRadius:"0.4vw", padding:"0.5vw 1vw"}}
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          style={{fontSize:"1.5vw",  color: 'black', marginRight:"0.5vw", width:"10vw", borderRadius:"0.4vw", padding:"0.5vw 1vw" 
        }}
          placeholder="Rating"
          type="number"
          min="0"
          max="10"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })}
        />
        <button style={{fontSize:"1.5vw",margin:"0.2vw",color:"black", backgroundColor:"green", borderRadius:"0.8vw", padding:"0.5vw 2vw" }} onClick={handleCreate}>Create</button>
      </div>
      <div style={{fontSize:"1.5vw",width:"78vw"}}>
        <table style={{margin:"0vw"}}>
          <thead style={{fontSize:"1.5vw",display:"flex", padding:"0.5vw 1vw 0.25vw", justifyContent:"space-between"}} >
            <tr >
              <th style={{fontSize:"1.5vw",color:"white", width:"20vw"}}>Title</th>
              <th style={{fontSize:"1.5vw",color:"white", width:"38vw"}}>Description</th>
              <th style={{fontSize:"1.5vw",color:"white", width:"8vw"}}>Rating</th>
            </tr>
          </thead>
          <tbody style={{fontSize:"1.5vw",borderRadius:"2vw", margin:"0vw"}}>
            {currentMovies.map((movie) => (
              <tr style={{fontSize:"1.5vw",borderBottom:"0.2vw", borderBottomColor:"black", margin:"0vw"}} key={movie._id}>
                {editingMovie?._id === movie._id ? (
                  <div style={{width:"80vw", margin:"0.5vw 1vw 0vw"}}>
                    <td style={{}}>
                      <input
                                             style={{fontSize:"1.5vw",padding:"0.5vw 1vw", color: 'black', marginRight:"0.5vw", width:"19vw", borderRadius:"0.4vw" }}

                        value={editingMovie.title}
                        onChange={(e) =>
                          setEditingMovie({ ...editingMovie, title: e.target.value })
                        }
                      />
                    </td>
                    <td style={{}}>
                      <input
                       style={{fontSize:"1.5vw",padding:"0.5vw 1vw", color: 'black', marginRight:"0.5vw", width:"39vw", borderRadius:"0.4vw" }}
                        value={editingMovie.description}
                        onChange={(e) =>
                          setEditingMovie({ ...editingMovie, description: e.target.value })
                        }
                      />
                    </td>
                    <td style={{}}>
                      <input
                        style={{fontSize:"1.5vw",padding:"0.5vw 1vw", color: 'black', marginRight:"0.5vw", width:"8vw", borderRadius:"0.4vw" }}

                        type="number"
                        min="0"
                        max="10"
                        value={editingMovie.rating}
                        onChange={(e) =>
                          setEditingMovie({ ...editingMovie, rating: parseFloat(e.target.value) })
                        }
                      />
                    </td>
                    <td>
                      <button style={{fontSize:"1.5vw",margin:"0.2vw",color:"black", backgroundColor:"white", borderRadius:"0.8vw", padding:"0.2vw 1vw"}}  onClick={() => handleSave(editingMovie)}>Save</button>
                      <button style={{fontSize:"1.5vw",margin:"0.2vw",color:"black", backgroundColor:"grey", borderRadius:"0.8vw", padding:"0.2vw 1vw"}} onClick={() => setEditingMovie(null)}>Cancel</button>
                    </td>
                  </div>
                ) : (
                  <div style={{width:"80vw", margin:"0.5vw 1vw 0vw", display:"flex"}}>
                    <td style={{fontSize:"1.5vw",color:"black", width:"19vw", backgroundColor:"grey",  padding:"0.5vw 1vw",marginRight:"0.5vw" , borderRadius:"0.5vw"}}>{movie.title}</td>
                    <td style={{fontSize:"1.5vw",color:"black",width:"39vw", backgroundColor:"grey",  padding:"0.5vw 1vw",marginRight:"0.5vw" , borderRadius:"0.5vw"}}>{movie.description}</td>
                    <td style={{fontSize:"1.5vw",color:"black",width:"8vw", backgroundColor:"grey",  padding:"0.5vw 1vw",marginRight:"0.5vw" , borderRadius:"0.5vw"}}>{movie.rating}</td>
                    <td style={{fontSize:"1.5vw",color:"black"}}>
                      <button style={{fontSize:"1.5vw",margin:"0.2vw",color:"black", backgroundColor:"white", borderRadius:"0.8vw", padding:"0.2vw 1vw"}} onClick={() => handleEdit(movie)}>Edit</button>
                      <button style={{fontSize:"1.5vw",margin:"0.2vw",color:"white", backgroundColor:"red", borderRadius:"0.8vw", padding:"0.2vw 1vw"}} onClick={() => handleDelete(movie._id)}>Delete</button>
                    </td>
                  </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination" style={{marginTop:"2vw",fontSize:"1.5vw", color: "#bebebe", width:"20vw",  marginBottom:"2vw"}}>
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          pageCount={Math.ceil(movies.length / moviesPerPage)}
          onPageChange={handlePageChange}
          containerClassName={'pagination__container'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          // disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
          style={{fontSize:"1.5vw", color:"#bebebe", display: "flex",justifyContent:"space-between", width:"20vw" }}
        />
      </div>
    </div>
    </>
  );
};

export default Dashboard;

