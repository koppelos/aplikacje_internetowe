const deg2rad = deg => deg * Math.PI /180;

const init = (ev, a) => {
    console.log(document.getElementById('container'));
    console.log(ev);
    console.log(deg2rad(a));
    console.log('Children:', document.getElementById('container').children);

    const x = 5;
    v = 10;
}

window.addEventListener('DOMContentLoaded', x => {
    init(x, 90);

});
