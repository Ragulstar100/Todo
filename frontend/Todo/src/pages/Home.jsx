


function Home(){
  const token = localStorage.getItem('token');
  return <h1>{token}</h1>
}

export default Home