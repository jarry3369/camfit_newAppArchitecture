import axios from 'axios';
import { INDEX_API } from 'constant/api';

interface GetAllUserProfileParams {
    [k : string] : any
}

interface GetAllUserProfileResponse {
    [k : string] : any
}

class IndexService {

    async getAllUserProfile(params : GetAllUserProfileParams): Promise<GetAllUserProfileResponse> {
        const { data } = await axios.get<GetAllUserProfileResponse>(INDEX_API.getUserProfile);

        return data;
    }

}

// 서비스 가공만 여기서 작업

export default IndexService