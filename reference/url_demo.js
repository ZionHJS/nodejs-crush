const url = require('url');
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log("href:"+myUrl.href);
console.log("toString:"+myUrl.toString());

//Host (root domain)
console.log("host:"+myUrl.host);  //host:mywebsite.com
//Hostnname(does not get port)
console.log("hostname:"+myUrl.hostname);   //hostname:mywebsite.com
//Pathname
console.log("pathname:"+myUrl.pathname);   //pathname:/hello.html
//Serializaed query
console.log("serialized:"+myUrl.search);   //serialized:?id=100&status=active

//params object
console.log("params:"+myUrl.searchParams);   //params:id=100&status=active
//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);   //URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }
//Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}:${value}`));  
// id:100
// status:active
// abc:123




