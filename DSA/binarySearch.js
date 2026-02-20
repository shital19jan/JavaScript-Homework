const nums1 = [1, 3, 5, 7, 9];
 const target = 7;
  let left = 0; 
 let right = nums1.length - 1;
  let result = -1; // default if not found 
  while (left <= right) 
    { let midd = Math.floor((left + right) / 2);
     if (nums1[midd] === target) 
        { result = midd; // found target
         break; 
        } else if (target < nums1[midd])
             { right = midd - 1; // search left half 
             // 
             } else {
                 left = midd + 1; // search right half //

} }
 console.log(result);