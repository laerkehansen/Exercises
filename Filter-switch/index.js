//vælger mit id på mit select element
let theme = document.getElementById('theme-select');

//tilføjer en eventlistener på change, da den skal lytte på hvornår temaet ændre sig
theme.addEventListener('change', function(event){

    const selectTheme = event.target.value; // Her får jeg det valgte tema, da den kigger efter value
    
    // Skift tema på body
    document.body.setAttribute('data-theme', selectTheme);
});
