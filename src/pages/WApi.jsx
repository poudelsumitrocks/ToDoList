// import React from 'react'
// const apiUrl="https://jsonplaceholder.typicode.com/users"

// export default function WApi() {
//     const data=fetch(apiUrl)
//     console.log(data)
//     data.then(res=>res.json())
//     .then(console.log)
//     .catch(err=>console.log(err))

//   return (
//     <>
//       <h2 className='text-3xl'>DataFetching</h2>
//       <section className='border p-4 m-4 h-96'>
        
//       </section>
//     </>
//   )
// }




// import React from 'react'
// const apiUrl="https://jsonplaceholder.typicode.com/users"

// export default function WApi() {
//   async function fetchData(){
//     try{
//       const response=await fetch(apiUrl,{
//         method:"GET",
//         headers:{
//           "Content-Type":"application/json"
//         },
//         body:JSON.stringify({name:"John",age:30})
//       })  
//       const data=await response.json()
//       console.log(data)
//     }
//     catch(err){
//       console.log(err.message)
//     }
//   }
//   fetchData()
//   return (
//     <div>
      
//     </div>
//   )
// }
