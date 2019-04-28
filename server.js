const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name':'Donald Trump',
        'birthday':'20190427',
        'gender':'Male',
        'job':'Employee'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name':'Mac Donald',
            'birthday':'20190428',
            'gender':'Male',
            'job':'Casher'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name':'Burger King',
            'birthday':'20190426',
            'gender':'Male',
            'job':'Server'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 
