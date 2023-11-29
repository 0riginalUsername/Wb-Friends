import express from 'express';
import ViteExpress from 'vite-express';
import morgan from 'morgan';

const app = express();
const port = 8000;
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

const SAVED_FRIENDS = [
  { name: 'Beach Cat', picture: 'https://http.cat/images/301.jpg' },
  { name: 'Mark', picture: 'https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg' },
  { name: 'Harold', picture: 'https://i.redd.it/eykm27r6lhi81.jpg' },
];

app.get('/api/friends', (req, res) => {
  res.json(SAVED_FRIENDS);
});

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
