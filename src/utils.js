const getPlayerNamesFromCompetition = (data) => {
   var playerNames = [];
   for (var i = 0; i < data.length; i++){
      playerNames.push(data[i].playerName)
   }
   return playerNames;
 }

 const getFirstInString = (string) => {
  return string.split(' ')[0]
 }

 const roundToWholeNumber = (number) => {
  return Math.round(number)
 }

 export default {getPlayerNamesFromCompetition, getFirstInString, roundToWholeNumber};