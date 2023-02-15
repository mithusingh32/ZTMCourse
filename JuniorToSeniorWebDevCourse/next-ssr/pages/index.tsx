import Link from 'next/link'
import Image from "../components/image.component";
const HomePage = () => {
  return (
    <>
      <h1 style={{fontSize: '20px', color: 'red'}}>Welcome to Next.js</h1>
        <Link href={'/about'}>
            {/*This will turn anything in here a link tag*/}
            About
        </Link>
        <Link href={'/robot'} ><button>Robot</button></Link>
        <Image />
    </>
  );
};

export default HomePage;
