// Code your solution in this file!
<<<<<<< HEAD
function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
      return blockNumber - 42;
    } else {
      return 42 - blockNumber;
    }
  }
  
  function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }
  
  function distanceTravelledInFeet (start, destination) {
=======
function distanceFromHqInBlocks(blokNumber)
{
  if(blokNumber > 42)
  {
    return blokNumber - 42;
  }else
  {
    42 - blokNumber;
  }
}
  function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }
   function distanceTravelledInFeet (start, destination) {
>>>>>>> 258ab06fce08d7fa303c6fb8dd3bde01d2908062
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }
  
  function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return 0.02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }