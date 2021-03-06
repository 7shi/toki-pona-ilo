// CC0 http://creativecommons.org/publicdomain/zero/1.0/

function convKana(c, v, pre, table) {
    let ret = Object.create(pre);
    let cc = c.split(" ");
    for (let i = 0; i < cc.length; ++i) {
        let ks = table[cc[i]].split(" ");
        for (let j = 0; j < v.length; ++j) {
            ret[cc[i] + v.charAt(j)] = ks[j];
        }
    }
    return ret;
}

var tokiKana = convKana(
    " k s t n p m j l w", "aeiou",
    { n: "ン", ",": "、", ".": "。" },
    { "": "ア エ イ オ ウ", k: "カ ケ キ コ ク", s: "サ セ スィ ソ ス",
      t: "タ テ ティ ト トゥ", n: "ナ ネ ニ ノ ヌ", p: "パ ペ ピ ポ プ",
      m: "マ メ ミ モ ム", j: "ヤ イェ イィ ヨ ユ", l: "ラ レ リ ロ ル",
      w: "ワ ウェ ウィ ウォ ウゥ" });

function tokiToKana(src) {
    let ret = "";
    for (let i = 0; i < src.length; ++i) {
        let s2 = tokiKana[src.substr(i, 2)];
        if (s2) { ret += s2; ++i; } else {
            let ch = src.charAt(i);
            let s1 = tokiKana[ch];
            ret += s1 ? s1 : ch;
        }
    }
    return ret;
}
