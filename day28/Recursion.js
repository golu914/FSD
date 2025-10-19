function even(start, end) {
    if (start > end) {
        return
    } else if(start%2==0) {
        console.log(start)
    }
    
    start++
    even(start,end)
}
even(1, 10)

function natural(start, end){
    if(start>end){
        return;
    }
    console.log(start)
    start++;
    natural(start,end)
}
natural(1,5)