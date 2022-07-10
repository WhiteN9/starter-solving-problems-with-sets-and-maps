function intersection(a, b) {
    if (a.length < 1 || b.length < 1 ) {
        return [];
    }
    const map = new Map();
    const set = new Set();
    a.forEach(element => {
        map.set(element)
    });
    // console.log(map)
    b.forEach(element => {
        if(map.has(element)) {
            set.add(element)
        }
    })
    // console.log(set)
    return [...set]
}

module.exports = intersection;
