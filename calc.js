// { <div  id="container">
//     <div>1</div>
//     <div>2</div>
//     <div>3</div>
//     <div>4</div>
//     <div>5</div>
//     <div>6</div>
//     <div>7</div>
//     <div>8</div>
//     <div>9</div>
//     <div>.</div>
//     <div>C</div>
//     <div>0</div>
//     <div>+</div>
//     <div>-</div>
//     <div>=</div>
//     <div>Display</div> }
// </div></div>
const fields=[{txt:1,row:4,col:1},
    {txt:2,row:4,col:2},
    {txt:3,row:4,col:3},
    {txt:4,row:3,col:1},
    {txt:5,row:3,col:2},
    {txt:6,row:3,col:3},
    {txt:7,row:2,col:1},
    {txt:8,row:2,col:2},
    {txt:9,row:2,col:3},
    {txt:0,row:5,col:'1/3'},
    {txt:'+',row:2,col:4},
    {txt:'.',row:5,col:3},
    {txt:'-',row:3,col:4},
    {txt:'=',row:4,col:4},
    {txt:'C',row:5,col:4},
    {txt:'Display',row:1,col:'1/5'}];
const init = () =>{
    const container = document.createElement('div');
    container.id='container';

  fields.forEach(el =>{
      const button = document.createElement('div');
      button.textContent =el.txt;
      button.style.gridColumn=el.col;
      button.style.gridRow=el.row;
      container.appendChild(button);
  });
  document.body.appendChild(container);
}



window.addEventListener('DOMContentLoaded',init);
