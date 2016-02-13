(function ($) {

  $.fn.tint = function (params) {

    this.each(function () {
       var c = document.createElement('canvas');
       var ctx = c.getContext('2d');
        
       c.width = $(this).width();
       c.height =$(this).height(); 
         f = new Image();
        
        
        f.src = $(this).prop("src");
        f.crossOrigin = 'anonymous';
        ctx.drawImage(f,0,0,c.width,c.height);
             var buffer = ctx.getImageData(0, 0, c.width, c.height),
       data = buffer.data,
       len = data.length;
       
       
    
    for(i=0; i < len; i += 4) {
        data[i] = 0;
        data[i + 1] = data[i + 1] ;
        data[i + 2] = 0;
    }
    ctx.putImageData(buffer, 0, 0);
        for (i = 0; i < c.height; i += 3)
    {

      ctx.fillStyle = '#000';

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "overlay";
      ctx.fillRect(0, i, c.width, 5);

    }
     var jpg = c.toDataURL("image/jpeg", 1.0);
    
        $(this).prop("src",jpg);
        
    })}
})(jQuery);
