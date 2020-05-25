let music = [
    { id: 1, title: 'babushka boi', singer: 'A$AP ROCKY' },
    { id: 2, title: 'rain', singer: 'paul kim' },
    { id: 3, title: 'highest in the rooms', singer: 'travis scott' }
];

// localhost:3000/api/music
const list = (req, res) => {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
    const id = parseInt(req.query.id, 10);
    const result = music.filter(m => m.id === id);
    res.send(result);
    
    if (Number.isNaN(limit)) {
        return res.status(400).end();
    }
    res.json(music.slice(0, limit));
};

module.exports = { list };