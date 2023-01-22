function addingEventListener() {
    for( var i = 0; i < items.length; i++ )
        (function(i){
            items[i].addEventListener('click', function(event) {
                alert( i );
            }, false);
        })(i);
}
