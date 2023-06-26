import { useEffect, useState } from "react"
import LandingComponent from "../components/LandingComponent";
import OnBoarding from "../components/OnBoarding";

const LandingPage = () => {
    const [page, setPage] = useState('1');

    useEffect(() => {

        setTimeout(() => {
            setPage('2');
        }, 1000)

    }, [])

    const PageChanger = (page) => {
        setPage(page);
    }

    return (
        <>
            {(page === '1' || page === '2') && <div className="flex flex-col items-center h-screen">
                <p style={{ marginTop: "50vh" }} className="text-2xl font-semibold  inline-block">
                    <span style={{ color: "#06283D" }}>Image</span>
                    <span style={{ color: "#1363DF" }}>Book</span>
                </p>
                {page === '2' && <LandingComponent PageChanger={PageChanger} />}
            </div>}
            {page === '3' && <OnBoarding />}
        </>
    )
}
export default LandingPage;