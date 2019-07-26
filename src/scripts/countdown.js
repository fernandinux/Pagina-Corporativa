$(function(){
  $('#countdown').countdown({
    timezone: -5, // Zona horaria de Perú

    // Fecha exacta en la que termina el countdown
    year: 2019,
    month: 9,
    day: 14,
    hour: 0,
    minute: 0, 
    second: 0,

    // Cuando termina el countdown
    onFinish: function() {
      consolelog('Pronto nuevas fechas');
    }
  });
});