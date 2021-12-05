const element = 'div';

function getlastid() {
    let list = document.getElementsByTagName(element);
    let arr = Array.from(list);
    let newarr = [];
    arr.forEach(
        (value) => newarr.push(value.id)
    );
    newarr.sort(
        function (a, b) {
            if (a.length === b.length) {
                return [a, b].sort();
            }
            if (a.length < b.length) {
                return -1;
            }
            return 1;
        }
    );
    let last = newarr[newarr.length - 1];
    return last;
}

function charsToNum(arr) {
    let codes = [];
    arr.forEach(
        function (value, index) {
            codes[index] = value.charCodeAt(0);
        }
    );
    return codes;
}

function numTochars(arr) {
    let chars = [];
    arr.forEach(
        function (value, index) {
            chars[index] = String.fromCharCode(value);
        }
    );
    return chars;
}

function iterate() {
    let lastid = getlastid();
    let lastarr = [...lastid];
    let codes = charsToNum(lastarr);
    let lastindex = codes.length - 1;
    for (let i = lastindex; i >= 0; i--) {
        if (codes[i] < 90) {
            codes[i]++;
            break;
        } else {
            codes[i] = 65;
            if (i === 0) {
                codes.unshift(65);
            }
        }
    }
    let chars = numTochars(codes);
    let str = chars.join('');
    return str;
}
