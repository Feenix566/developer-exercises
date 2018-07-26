function paintMixer(color1, color2) {
  /*
  Add code here that will take the two string params and
  return a value as to what those two colors would create when mixed:

  * blue and red should mix to return 'purple'
  * green and red should mix to return 'brown'
  * blue and yellow should mix to return 'green'
  * anything with unknown colors should return a result of 'unknown'.

  The order of the params should not matter.
  */
  var colors = {
    blue: false,
    red: false,
    green: false,
    yellow: false,
  };
  var hasUnknownColors = !colors.hasOwnProperty(color1) || !colors.hasOwnProperty(color2);

  if(hasUnknownColors) {
    return 'unknown';
  }
  Object.keys(colors).forEach(key => {
    colors[key] = color1 === key || color2 === key;
  });
  if (colors.blue && colors.red) {
    return 'purple';
  }
  if (colors.green && colors.red) {
    return 'brown';
  }
  if (colors.blue && colors.yellow) {
    return 'green';
  }
  return 'unknown';
}

paintMixer('blue', 'red') === 'purple' && console.log('First mix worked')
paintMixer('red', 'blue') === 'purple' && console.log('Second mix worked')
paintMixer('green', 'red')=== 'brown' && console.log('Third mix worked')
paintMixer('blue', 'yellow') ==='green' && console.log('Fourth mix worked')
paintMixer('apple', 'frog') ==='unknown' && console.log('Apples and frogs don\'t mix, as expected')

/*
If everything works, you should see the following on the console
when run with "node 4_logic.js":

First mix worked
Second mix worked
Third mix worked
Fourth mix worked
Apples and frogs don't mix, as expected
*/