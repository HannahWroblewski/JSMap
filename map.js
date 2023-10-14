$('.app').click(function onMapClick(event){
    console.log($(this))
    console.log(event)
    
    const appElement = $(this);
    const target = $(event.target);
    const userPressedShiftKey = event.shiftKey;

    if(userPressedShiftKey && target.hasClass('pin')){
        $(target).remove()
    } else if(!target.hasClass('pin')){
        const pinX = event.offsetX;
        const pinY = event.offsetY;
        const pinElement = $('<div class = "pin"></div>')
        pinElement.css('left', pinX).css('top', pinY)
        appElement.append(pinElement)

    }

    
})
