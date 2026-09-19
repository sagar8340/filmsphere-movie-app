import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
app.use(cors());
dotenv.config();

const API_Key = process.env.Tmdb_api_key;
const PORT = process.env.PORT || 5000

app.get('/movie', (req, res) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`)
        .then((result) => result.json())
        .then((resData) => {
            res.json(resData);
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({error:"Your movie is not found !"})
        })
});

app.get('/genre', (req, res) => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_Key}`)
        .then((res) => res.json())
        .then((genre_data)=>{
            res.json(genre_data);
        })
        .catch((error)=>{
            console.log(error);
            res.status(500).json({error:"data is not found !"})
        });
     
});

app.listen(5000, () => {
    console.log('server started');
}) 