public class Solution {
    public string solution(int a, int b) {
        string answer = "";

        string[] dayOfTheWeek = new string[7]{"SUN","MON","TUE","WED","THU","FRI","SAT"};
        int[] daysOfMonth = new int[12]{31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        int totalDays = 5;
        for(int i = 0 ; i < a - 1 ; i++){
            totalDays += daysOfMonth[i];
        }

        totalDays += b - 1;

        answer = dayOfTheWeek[totalDays%7];

        return answer;
    }
}
