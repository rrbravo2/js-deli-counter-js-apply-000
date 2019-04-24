let katzDeli = [];

var number = 1

function takeANumber (KatzDeli) {
  KatzDeli.push(`${number}`);
  number++
  return (`Welcome, ${name}. You are number ${KatzDeli.length} in line.`);
}

function nowServing (KatzDeli) {
  let i = 0;
  while (i < KatzDeli.length) {
    i++;
  }
  if (KatzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else 
  return (`Currently serving ${KatzDeli.shift()}.`);
}

var line = [];
function currentLine(KatzDeli) {
  for (let i = 0; i < KatzDeli.length; i++){
    line.push(` `+[i+1]+`. `+ KatzDeli[i]);
  }
  if (KatzDeli.length === 0) {
    return "The line is currently empty.";
  }else
  return(`The line is currently:` + line);
  
}