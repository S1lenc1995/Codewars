
/* Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s" */
function nerdify(txt){
  for(let i of txt){
    if(i === 'a' || i === 'A'){
      txt = txt.replace(i, '4')
    }
    if(i === 'e' || i === 'E'){
      txt = txt.replace(i, '3')
    }
    if( i === 'l'){
      txt = txt.replace(i, '1')
    }
  }
  return txt
}
