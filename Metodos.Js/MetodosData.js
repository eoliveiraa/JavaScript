let agora = new Date();
let horaBrasilia = agora.toLocaleString("pt-BR",{timeZone: "America/Sao_Paulo"});
console.log(horaBrasilia);

//pegar somente o ano
console.log(agora.getFullYear());
//pegar somente o dia
console.log(agora.getDay());
console.log(agora.getDate());
console.log(agora.getMilliseconds());
//pegar apenas mes
console.log(agora.getMonth());



