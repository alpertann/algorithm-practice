# algorithm-practice

# Question 
[22,27,16,2,18,6] -> Insertion Sort

Question 1: Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

Question 2: Big-O gösterimini yazınız.

Question 3:Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

Average case: Aradığımız sayının ortada olması
Worst case: Aradığımız sayının sonda olması
Best case: Aradığımız sayının dizinin en başında olması.

Question 4:[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

-----------------------------------------------------------------------------------------------------------------

# Answers to Questions

Answer 1: [22,27,16,2,18,6] [22,16,27,2,18,6] [16,22,27,2,18,6] [16,22,2,27,18,6] [16,2,22,27,18,6] [2,16,22,27,18,6] [2,16,22,18,27,6] [2,16,18,22,27,6] [2,16,18,22,6,27] [2,16,18,6,22,27] [2,16,6,18,22,27] [2,6,16,18,22,27]

Answer 2: O(n²)

Answer 3: Dizi içerisinde 18 sayısı ne başta ne de sondadır. Bu yüzden Avarage Case cevap olacaktır. 

Answer 4: [7,3,5,8,2,9,4,15,6] [2,3,5,8,7,9,4,15,6] [2,3,4,8,7,9,5,15,6] [2,3,4,5,7,9,8,15,6]
