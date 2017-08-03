$(document).ready(function() {
/*<= desarrollo del jQuery =>*/

		$('#cont_modulos').load('enlaces/fondo.html');/*<= cargar imagen de fondo =>*/
		$('#mensaje').html('Bienvenidos a la página de turismo del estado Zulia');/*<= mensaje =>*/

		/*<= mouse adentro del mensaje de bienvenida =>*/
		$('#mensaje').mouseover(function(){   

				$('#mensaje').html('Disfrute de sus vacaciones en familia con nuestros mejores lugares de turismo Zuliano');
		});

		/*<= mouse afuera del mensaje de bienvenida =>*/
		$('#mensaje').mouseout(function(){   

				$('#mensaje').html('Bienvenidos a la página de turismo del estado Zulia');
					
		});

/*<= Llamar modulo cuando se hace un click sobre un href del index principal=>*/
        $('#detalles').on('click', function(){

          			$('#cont_modulos').load('enlaces/detalles.html');
        });

        $('#turismo').on('click', function(){

        			$('#cont_modulos').load('enlaces/lugares.html');
        });

        $('#cultura').on('click', function(){

        			$('#cont_modulos').load('enlaces/cultura.html');
        });

        $('#gastronomia').on('click', function(){

        			$('#cont_modulos').load('enlaces/gastronomia.html');
        });
});
