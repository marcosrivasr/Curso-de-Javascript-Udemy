const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { create } = require('domain');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const fullPath = path.join(__dirname,'./data.json');

app.get('/', (req, res) =>{
    const data = fs.readFileSync(fullPath, 'utf-8');
    res.json(JSON.parse(data));
});

app.post('/new-board', (req, res) =>{
    
    const {id, title} = req.body;
    let data = fs.readFileSync(fullPath, 'utf-8');
    data = JSON.parse(data);
    data.boards.push({id: id, title: title, cards:[]});

    fs.writeFileSync(fullPath, JSON.stringify(data));
    res.json(createResponse(true, 'New board created successfully'));
});

app.get('/delete-board/:id', (req, res) => {
    const {id} = req.params.id;
    let data = fs.readFileSync(fullPath, 'utf-8');
    data = JSON.parse(data);
    const index = data.boards.findIndex(board => board.id == id);
    data.boards.splice(index,1);

    fs.writeFileSync(fullPath, JSON.stringify(data), null, '\t');
    res.json(createResponse(true, 'Boards deleted successfully'));
});

app.post('/update-board', (req, res) => {
    const {id, title} = req.body;

    let data = fs.readFileSync(fullPath, 'utf-8');
    data = JSON.parse(data);

    const index = data.boards.findIndex(board => board.id == id);
    data.boards[index].title = title;
    
    fs.writeFileSync(fullPath, JSON.stringify(data), null, '\t');
    res.json(createResponse(true, 'Board updated successfully'));
});

app.post('/new-card', (req, res) =>{
    const {idBoard, cards} = req.body;

    let data = fs.readFileSync(fullPath, 'utf-8');
    data = JSON.parse(data);
    
    const index = data.boards.findIndex(board => board.id == idBoard);
    data.boards[index].cards = [...JSON.parse(cards)];
   

    fs.writeFileSync(fullPath, JSON.stringify(data), null, '\t');
    res.json(createResponse(true, 'New card created successfully'));
});

app.get('/delete-card/:indexBoard/:indexCard', (req, res) => {
    const {indexBoard, indexCard} = req.params;
    let data = fs.readFileSync(fullPath, 'utf-8');
    data = JSON.parse(data);

    data.boards[indexBoard].cards.splice(indexCard,1);

    fs.writeFileSync(fullPath, JSON.stringify(data), null, '\t');
    res.json(createResponse(true, 'Card deleted successfully'));
});

app.post('/update-card', (req, res) => {
    const {id, title, indexBoard} = req.body;

    let data = fs.readFileSync(fullPath, 'utf-8');
    data = JSON.parse(data);

    const index = data.boards[indexBoard].cards.findIndex(card => card.id == id);
    data.boards[indexBoard].cards[index].title = title;


    fs.writeFileSync(fullPath, JSON.stringify(data), null, '\t');
    res.json(createResponse(true, 'Card updated successfully'));
});

app.post('/update-all', (req, res) => {
    const {boards} = req.body;

    let data = fs.readFileSync(fullPath, 'utf-8');
    data = JSON.parse(data);

    data.boards = [...boards];

    fs.writeFileSync(fullPath, JSON.stringify(data), null, '\t');
    res.json(createResponse(true, 'Boards updated successfully'));
});


function createResponse(success, message){
    return (success)? {status: 'success', message: message} : {status: error, message: message};
}


app.listen(3000, () => {console.log('Server started...');});