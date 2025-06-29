let json='{"name":"mehedi","age":24}';

type Userss={
  name:string,
  age:number,
  city:string
}

const usersss=JSON.parse(json) ;

console.log(usersss.city)