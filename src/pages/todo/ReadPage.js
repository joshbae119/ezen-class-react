import { useParams, useNavigate } from "react-router-dom";
import { useCallback } from "react";

const ReadPage = () => {
    const { tno } = useParams();
    
    const navigate = useNavigate();

    const MoveToModify = useCallback(  (tno) => {
        navigate({pathname:`/todo/modify/${tno}`})
    } , [tno])
    

    return (
        <div className="text-3xl font-extrabold">
            글읽기 컴포넌트 {tno}
            <div>
                <button onClick={() => MoveToModify(33)}>수정하기</button>
            </div>
        </div>
    )
}

export default ReadPage;