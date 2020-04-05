for(let i = 1; i <= 100; i++) {
    new Controller(new Model(i), new View(i, 'b' + i ), i);
}