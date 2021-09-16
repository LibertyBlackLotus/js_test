/* */

console.log('axios')

/* let url = 'http://us-zuul-tst.lmp.xpaas.lenovo.com/usfapplication/usf-us-tst/user/adfsindex?returnTo=http://localhost:10241'
 */
 

/* axios({
	method: 'get',
	url, 
	headers: {'service-authentication': 'eyJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlTmFtZSI6IjEyMzQiLCJzZXJ2aWNlS2V5IjoiZjk3NDA3YThkMWExNGM4NmIyYTQ2NWFlYTFmY2QzYmMiLCJzZXJ2aWNlVHlwZSI6IjEiLCJzZXJ2aWNlQXBwIjoiNjM3Iiwic2VydmljZUNsdXN0ZXIiOiI3IiwianRpIjoiYmJhZjMzZWNiMGM1NGRkODgzNmM2NTY3MjJlMGJmZDIiLCJpYXQiOjE1NzE5NzQ1MTZ9.-Op0my187vLqNe64LO1Ni0J_cytEHQjglrvAXOZi5tE'
},

  }).then(res => {
	  console.log('res-->', res)

  }) */

/*  fetch(url, { 
  headers: {
    'service-authentication': 'eyJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlTmFtZSI6IjEyMzQiLCJzZXJ2aWNlS2V5IjoiZjk3NDA3YThkMWExNGM4NmIyYTQ2NWFlYTFmY2QzYmMiLCJzZXJ2aWNlVHlwZSI6IjEiLCJzZXJ2aWNlQXBwIjoiNjM3Iiwic2VydmljZUNsdXN0ZXIiOiI3IiwianRpIjoiYmJhZjMzZWNiMGM1NGRkODgzNmM2NTY3MjJlMGJmZDIiLCJpYXQiOjE1NzE5NzQ1MTZ9.-Op0my187vLqNe64LO1Ni0J_cytEHQjglrvAXOZi5tE'
  },
  mode: 'cors', 
}).then(res => {
	console.log('res-->', res)

}) */
/* function setclosedday1(allStorklocation){
  allStorklocation = 2;
  console.log('allStorklocation-in->', allStorklocation)
}

var allStorklocation = 0;
setclosedday1(allStorklocation)

console.log('allStorklocation-->', allStorklocation) */

var myP = new Promise(function(resolve, reject){
  console.log('执行')
  setTimeout(function(){
    reject(3)
  }, 1000)
});

myP.then(function(res){
  console.log(res)
}, function(err){
  console.log(err)
})
