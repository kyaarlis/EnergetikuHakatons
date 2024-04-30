let lightState = '';

const toogleLightState = (toogleState) => {

    if (toogleState === true) {
      lightState = 'LIGHT ON';
    } else {
      lightState = 'LIGHT OFF';
    }
    console.log('Light State:', lightState);
    return lightState;
};
module.exports = toogleLightState;