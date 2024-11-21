const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/weapon_store', { useNewUrlParser: true, useUnifiedTopology: true });

const WeaponSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    description: String
});

const Weapon = mongoose.model('Weapon', WeaponSchema);

app.get('/weapons', async (req, res) => {
    const weapons = await Weapon.find();
    res.json(weapons);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});