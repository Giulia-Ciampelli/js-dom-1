console.log('im alive');

// Consegna
// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
// BONUS
// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"

// #region dichiarazione variabili
const lightOn = document.getElementById('bulb_on');
const lightOff = document.getElementById('bulb_off');
const lightSwitch = document.getElementById('switch');
// #endregion dichiarazione variabili

// #region assegnazioni variabili in global scope
lightOn.classList.add('d-none');
lightSwitch.innerHTML = 'Accendi';
// #endregion assegnazioni variabili in global scope

// #region assegnazione eventi
// evento di accensione lampadina al bottone al click
lightSwitch.addEventListener('click', function () {

    if (lightSwitch.innerHTML === 'Accendi') {
        lightOff.classList.add('d-none');
        lightOn.classList.remove('d-none');
        lightSwitch.innerHTML = 'Spegni';
    }
    else if (lightSwitch.innerHTML === 'Spegni') {
        lightOff.classList.remove('d-none');
        lightOn.classList.add('d-none');
        lightSwitch.innerHTML = 'Accendi';
    }
})
// #endregion assegnazione eventi