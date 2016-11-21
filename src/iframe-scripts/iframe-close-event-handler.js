// use jQuery to add event listener to 'x' in iframe-modal__top-row
// upon click, close the iframe
$( document ).ready( () => {
  $( '#close-iframe-symbol' ).click( (event) => {
    event.preventDefault();
    $( 'html.iframe-wrapper' ).remove();
  })
})
