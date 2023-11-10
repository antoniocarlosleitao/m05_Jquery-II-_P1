// instancia jquery e evita conflitos
//jquery(function($){
$(document).ready(function(){

    $('.owl-carousel').owl-Carousel();

    let titulos = $('h4') //tag

    let itens = $('.featured-item') //class

    let destaques = $('#featured') //id

    console.log(titulos.first());

    //Configuração de produtos

    $('.featured-item a') .addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>');
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>');
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>');
    //$('.featured-item: first h4').addClass('active') //Manipulando o CSS
    //$('.featured-item: first h4').removeClass('active')
    //$('.featured-item: first h4').toggleClass('active')
    //$('.featured-item: first h4').hide()
    //$('.featured-item: first h4').show()
    //$('.featured-item: first h4').fadein()
    //$('.featured-item: first h4').fadeout()
    //$('.featured-item: first h4').css('color', #f00)


    $('.featured-item: first h4').dblclick(function(){  //o click altera a função do CSS. dbl = double
        
        $(this).css({
            'color', #f00,
            'background : #f00',
            'font-weight' : '100'
        })
    
      });

    
      //*Manipulação de Eeventos 
    
    $('.featured-item a').on('click', function(event){
    //$('.featured-item a').on('blur', function(event){ - blur para fazer a validação do campo do formulário 
      event.preventDefault();

      alert('Produto esgotado');

    })


    //Callback entendendo ações que começam ao término de outra//


  $('.featured-item:nth(1)') //O numero 1 no parentesis é o numero do item//
      .hide(500, function(){
        //Este é o callback
        console.log($(this).find('h4').text() + 'esgotado')
      })
      .show(500, function(){
          console.log ($(this).find('h4').text() + 'estoque')
      })



      //Animações//
        const duracao = 1000 //Equivalente a 1 segundo


        $('.featured-item:nth(0)')
            .hide(duracao)
            .show(duracao)
            .fadeOut(duracao)
            .fadeIn(duracao)
            .toggle(duracao) //esconde na primeira
            .toggle(duracao) //aparece na segunda

            $('#form-submit').on('click', function(e){

              e.preventDefault()

              if($('#email').val() != ''{

                $('#email').animate({
                  opacity:"toggle",
                  top: "-50"
                },500, function(){
                  console.log($(this).val())
                })
              
              }
            
            
            });








            
    //*Manipulação de Eeventos outros exemplos

   //$('.featured-item').mouseenter(function(){
  //console.log($(this).find('h4').text());
  // })

//$('.featured-item).mouseleave(function(){
  //console.log($(this).find('h6').text());
  // })
// função hover que gerencia duas formas, sendo uma combinada com outra ao mesmo tempo
//$('.featured-item).hover(
    //function(){
    //console.log($(this).find('h6').text());
    // },
    //function(){
    //console.log($(this).find('h4').text() + ' - ' + $(this).find('h6').text());
    //}
    //)
})