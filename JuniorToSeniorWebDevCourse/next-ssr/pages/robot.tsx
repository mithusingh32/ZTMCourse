import Link from "next/link";
import {Data} from "../interfaces/data.interfaces";

const Robot = ({robots}: { robots: Data[] }) => {
    return (
        <div>
            <h1>Robots</h1>
            <Link href={"/"}>
                <button>Home</button>
            </Link>
            {robots.map(rob => <div>
                <Link href={`/robot/${rob.name.replaceAll(' ', '')}`}><h1>{rob.name}</h1></Link>
                <h3>{rob.username}</h3>
                <h2>{rob.email}</h2>
                </div>)}
        </div>
    );
};

// This will tell NextJs to pass an initial prop to the component
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // This will return the prop we want the component to have
    return {
        props: {robots: data},
    };
}

export default Robot;
