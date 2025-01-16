import { useParams } from "react-router-dom";

const ReadPage = () => {
    const { tno } = useParams();

    return (
        <div className="text-3xl font-extrabold">
            글읽기 컴포넌트 {tno}
        </div>
    )
}

export default ReadPage;