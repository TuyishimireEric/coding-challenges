const tree = (n) => {
    let result = [];
    for(let i = 1; i <= n[0]; i++){
        let h = 1;
        for(let j = 1; j <= n[i]; j++){
            if(h % 2 !== 0 ){
                h = h + h;
            }
            else {
                h += 1;
            }
        }
        result.push(h);
    }
    console.log(result);
}
let t = [3, 0, 1, 4];
tree(t);
