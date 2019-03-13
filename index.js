function shoppingList () {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let newThing = document.getElementById('shopping-list-entry').value;
        $('.shopping-list').prepend(`<li><span class="shopping-item">${newThing}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>&nbsp;<button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)
    })
    $('ul').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })
    $('ul').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove()
    })
}
$(shoppingList)