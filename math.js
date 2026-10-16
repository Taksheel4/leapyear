(function(root){
function classify(value){const raw=String(value).trim();if(!/^\d{1,40}$/.test(raw)||BigInt(raw)<1n)throw new Error('Enter a positive whole-number year (1–40 digits).');const year=BigInt(raw),steps=[];let leap=false;for(const divisor of [400n,100n,4n]){const remainder=year%divisor;const divisible=remainder===0n;steps.push({divisor:String(divisor),quotient:String(year/divisor),remainder:String(remainder),divisible});if(divisible){leap=divisor!==100n;break;}}return {year:String(year),leap,days:leap?366:365,steps};}
root.LeapMath={classify,extra:years=>Number(years)*2422/10000};if(typeof module!=='undefined')module.exports=root.LeapMath;
})(typeof window!=='undefined'?window:globalThis);
