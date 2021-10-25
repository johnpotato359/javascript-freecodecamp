let myLeads = `["globo.com.br"]`;

myLeads = JSON.parse(myLeads);
myLeads.push("youtube.com");
myLeads = JSON.stringify(myLeads);
console.log(myLeads);