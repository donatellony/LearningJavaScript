"use strict";
//1.21
const arr = [21,22,33,41,5];
arr.push(10);
arr.sort((o1, o2)=>o2-o1);
console.log(arr);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];


// arr.forEach(function(item, i, arr) {
//    console.log(`${i}: ${item} внутри массива ${arr}`); 
// });