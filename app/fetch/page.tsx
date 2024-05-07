type x = {
    id:number;
    name:string;
    email:string;
}
async function fetchData (){
   const res = await fetch("https://jsonplaceholder.typicode.com/users")
   if(!res.ok){
    throw new Error ("failed")
   }
   return res.json()
}
async function page() {
    const data = await fetchData()
    console.log(data);
    
  return (
    <div>
      {data.map((post:x)=>(
     <div key={post.id}>
     <h1 className="m-4">{post.name}</h1>
     <p>{post.email}</p>
     </div>
      ))}
    </div>
  );
}

export default page;

let x: number=100
let y:number[]= [100,45]
let z:(number|string)[] = [100,'45']
