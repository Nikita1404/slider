'use strict'

var slider = {
    colors: ['red', 'orange', 'yellow', 'blue', 'green'],
    containerId: '#slider',
    index: 0,
    wrap: document.createElement('div'),
    btnLeft: document.createElement('button'),
    btnRight: document.createElement('button'),

   slideLeft: function(){
       this.index--;
       if(this.index < 0){
           this.index = this.colors.length-1;
       }
       this.wrap.style.backgroundColor = this.colors[this.index];
   },
   
   slideRight: function(){
    this.index++;
    if(this.index > this.colors.length-1){
        this.index = 0;
    }
    this.wrap.style.backgroundColor = this.colors[this.index];
   },
   
    init: function() {
      var cont = document.querySelector(this.containerId);
      
      this.btnRight.innerHTML = '>';
      this.btnLeft.innerHTML = '<';
      this.btnRight.onclick = this.slideRight.bind(this);
      this.btnLeft.onclick = this.slideLeft.bind(this);
     
      this.wrap.className = 'slider-wrap';
      this.wrap.style.backgroundColor = this.colors[this.index];

      this.wrap.append(this.btnLeft, this.btnRight);

      cont.appendChild(this.wrap);
    }
}

slider.init()

