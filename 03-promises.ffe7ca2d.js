const e=document.querySelector("[name=delay]"),o=document.querySelector("[name=step]"),n=document.querySelector("[name=amount]");function t(){const e=Math.random()>.3;return new Promise(((o,n)=>{e?o():n()}))}document.querySelector(".form").addEventListener("submit",(c=>{c.preventDefault(),function(e,o,n){for(let c=1;c<=n;c+=1)setTimeout((()=>t().then((n=>{console.log(`Fullfilled promice ${c} in ${c*o+e} mseconds`)})).catch((()=>{console.log(`Rejected promice ${c} in ${c*o+e} mseconds`)}))),c*o+e)}(1e3,o.value,n.value),console.log(e.value)}));
//# sourceMappingURL=03-promises.ffe7ca2d.js.map
