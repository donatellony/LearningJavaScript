"use strict";

const persone = {
    name: 'Alex',
    tel: '+733344455',
    parents: {
        mom: 'Alla',
        dad: 'Max'
    }
};

const copy = JSON.parse(JSON.stringify(persone)); // -- full copy