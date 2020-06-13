/**
 * @param {String} S 逆ポーランド記法の計算式 スペース区切り
 * @return {Number} 計算結果
 */
var rpn = function(S) {
    S = S.split(" ");
    var que = [];
    var tmp = 0;
    for(i=0; i<S.length; i++){
        if(S[i].match(/[0-9]/)) {
            que.push(Number(S[i]));
        }else if(S[i]=="+") {
            tmp = que[que.length-2]+que[que.length-1];
            que.splice(que.length-2, 2);
            que.push(tmp);
        }else if(S[i]=="-") {
            tmp = que[que.length-2]-que[que.length-1];
            que.splice(que.length-2, 2);
            que.push(tmp);
        }else if(S[i]=="*") {
            tmp = que[que.length-2]*que[que.length-1];
            que.splice(que.length-2, 2);
            que.push(tmp);
        }else if(S[i]=="/") {
            tmp = que[que.length-2]/que[que.length-1];
            que.splice(que.length-2, 2);
            que.push(tmp);
        }
        console.log("S:"+S+" que:"+que);
    }
    return Number(que.join(""));
};

console.log(rpn("4 2 + 5 3 + *"));