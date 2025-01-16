import { useSearchParams } from "react-router-dom";


const ListPage = () => {
  const [qeueryParams] = useSearchParams();

  const page = qeueryParams.get('page') ? parseInt(qeueryParams.get('page')) : 1
  const size = qeueryParams.get('size') ? parseInt(qeueryParams.get('size')) : 10


  return (
    <div className="p-4 w-full bg-white">
        <div className="text-3xl font-extrabold">
          Todo List Page Component 페이지번호 {page} 페이지 사이즈 {size}
        </div>
    </div>
  );
}

export default ListPage;