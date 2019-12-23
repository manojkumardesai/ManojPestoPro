Without
**Returns a new list without values of the first argument.**

### Restrictions

- Don't use `for-loops`.

    without([1, 2], [1, 2, 1, 4, 5]);
    // [4, 5]
    without([0], [-0]).length
    // 1
    without([1, 2], [1, 2, 1, 3, 4]); 
    //=> [3, 4]