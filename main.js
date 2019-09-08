/*

$( document ).ready(function() {
    console.log( "ready!" );
    const shakeBtn = document.querySelector('.shake__icon__wrapper');
    const mainP = document.querySelector('.main_page');
    const shakeP = document.querySelector('.shaked_page');
    shakeBtn.addEventListener('click', ()=> {
        shakeP.classList.toggle("active");
        mainP.classList.toggle("non_active");
        console.log('click');
    });


    var myShakeEvent = new Shake({
        threshold: 5,
        timeout:1000
    });

    console.log(myShakeEvent.options);
    myShakeEvent.start();
    console.log(myShakeEvent.hasDeviceMotion);
    window.addEventListener('shake', ()=> {
        setTimeout(DoShake, 1500);
        myShakeEvent.stop();
    });
    function DoShake() {
        document.querySelector('.main_page').classList.toggle('active');
        document.querySelector('.shaked_page').classList.toggle('non_active');
        console.log('saymyname')
    }
});
*/
