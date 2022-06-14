const getPlayerNamesFromCompetition = (data) => {
   var playerNames = [];
   for (var i = 0; i < data.length; i++){
      playerNames.push(data[i].name)
   }
   return playerNames;
 }

 export default {getPlayerNamesFromCompetition};