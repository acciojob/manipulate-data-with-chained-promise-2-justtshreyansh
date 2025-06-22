//your JS code here. If required.
const output = document.querySelector("#output");
let arr = [1,2,3,4];

function promise1(arr){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			arr = arr.filter((ele)=>ele%2===0);
			resolve(arr);
			
		},1000)
	})
	
}
function promise2(arr){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			arr = arr.map((ele)=>ele*2);
			resolve(arr);
			
		},2000)
	})
}
promise1(arr).then((arr)=>{
	output.textContent = arr.join(',');
	return promise2(arr);
}).then((arr)=>{
	output.textContent = arr.join(',');
	
})