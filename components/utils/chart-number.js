import prettyNum from "pretty-num";

const subscripts = [
  { value: "0", sub: "₀" },
  { value: "1", sub: "₁" },
  { value: "2", sub: "₂" },
  { value: "3", sub: "₃" },
  { value: "4", sub: "₄" },
  { value: "5", sub: "₅" },
  { value: "6", sub: "₆" },
  { value: "7", sub: "₇" },
  { value: "8", sub: "₈" },
  { value: "9", sub: "₉" },
  { value: "10", sub: "₁₀" },
  { value: "11", sub: "₁₁" },
  { value: "12", sub: "₁₂" },
  { value: "13", sub: "₁₃" },
  { value: "14", sub: "₁₄" },
  { value: "15", sub: "₁₅" },
  { value: "16", sub: "₁₆" },
  { value: "17", sub: "₁₇" },
  { value: "18", sub: "₁₈" },
  { value: "19", sub: "₁₉" },
  { value: "20", sub: "₂₀" },
  { value: "21", sub: "₂₁" },
  { value: "22", sub: "₂₂" },
  { value: "23", sub: "₂₃" },
  { value: "24", sub: "₂₄" },
  { value: "25", sub: "₂₅" },
  { value: "26", sub: "₂₆" },
  { value: "27", sub: "₂₇" },
  { value: "28", sub: "₂₈" },
  { value: "29", sub: "₂₉" },
  { value: "30", sub: "₃₀" },
];

export function prettyNumber(price) {
  try{
    if (price > 1) return price.toFixed(7);
    else if (price > 0.0001 || price == 0) return price.toFixed(7);
  
    let i = 0;
    let splitted = prettyNum(price.toString()).split(".");
  
    while (splitted[1][i] == 0) {
      i += 1;
    }
  
    const removed = splitted[1].slice(i);
    let last = removed.slice(0, 4);
    let l = last.length;
    while (l < 4) {
      last += "0";
      l++;
    }
    // console.log("---", last, i);
  
    if (i > 3) return `${splitted[0]}.0${subscripts[i].sub}${last}`;
  
    return price.toFixed(6);
  }
  catch{
    return price.toFixed(6)
  }

}