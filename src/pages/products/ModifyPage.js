import { useParams } from "react-router-dom";
import ModifyComponent from "../../components/products/ModifyComponent";
import ModifyComponent1 from "../../components/products/ModifyComponent1";

const ModifyPage = () => {
const {pno} = useParams()

    return(
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Products Modify Page 화면 구현 중입니다
            </div>
            <ModifyComponent pno={pno}></ModifyComponent>
            <ModifyComponent1 pno={pno}></ModifyComponent1>
        </div>
    )
}

export default ModifyPage;