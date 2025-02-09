import { useEffect, useState } from "react";

const Page = () => {
    const [data, setData] = useState();


    useEffect(() => {
        setData({ name: "sainath" })
    }, [])

    return (
        <p>{data?.name}</p>
    );
};
export default Page;