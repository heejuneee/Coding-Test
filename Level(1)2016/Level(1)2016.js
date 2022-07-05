function getDayName(a,b){
    var answer = "";
  var MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];
  var WEEK = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  var sum = 0;
    for(var i =1; i<a; i++){
    sum+=MONTH[i-1];
  }
  answer = WEEK[(sum+b-1)%7];
  // 1월 1일은 금요일
    // 31,29,31,30,31,30,31,31,30,31,30,31

    return answer;
}
