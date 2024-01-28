Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

# Intuition

At first, I struggled to grasp the concept of overlapping intervals! I will attempt to describe it more clearly. Lets take the [1,4] ---> [3,6]
intervals, these intervals are overlapping becouse finsh of [1,4] (4) stay after start of [3,6] (3), what is interval [1,4] it is [1,2,3,4] and
[3,6] is [3,4,5,6] as can you see 3 in both intervals? It is exactly what means overlapping intervals.

![image.png](https://assets.leetcode.com/users/images/49178a44-a87b-4c05-aab6-d22fb97b8c24_1706466228.8159.png)

# Approach

So, firs of all, we need sort our array and after that the main idea is, we need to check previus and current sub-array(intrevals), if the last item of previus >= the first of current means these intervals are overlapping, we just need to change the last item of interval, ex the first previus interval is [1,4], ok, the next is [3,6], so we will change just the last element in [1,4], to detective the last element if interval we need to find a maximum number between the last element of intervals Math.max(4,6) -> 6, got it, the first our interval is [1,6]. If intervals arent overlapping push the current interval.

# Complexity

Time complexity:
`🕜 O(n log n)  🕜`

`Beats 90.20%`
