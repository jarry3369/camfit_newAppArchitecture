import { useEffect, useState } from "react";
import IndexService from "../service/indexService";

const useIndexStore = () => {
     // Index에서 필요한 API는 IndexService에서 호출
    const indexService = new IndexService();

  const [datas, setDatas] = useState({})


  // API 호출 저장
      const onClickCallAPI = async () => {
        const { data } = await indexService.getAllUserProfile({});
        // 불러온 데이터 임의 저장
        setDatas(data)
    }


  return {datas, onClickCallAPI}
};

export default useIndexStore;