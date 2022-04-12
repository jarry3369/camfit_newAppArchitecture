import { Text } from 'components/atom';
import { Button } from 'components/molcules';
import { Page  } from 'components/template';
import React from 'react'
import useIndexStore from './stores/indexStore';

function IndexPage() {

    // State의 처리가 필요한 경우에는 useIndexStore호출 후 데이터 참조
    const {  datas, onClickCallAPI} = useIndexStore();

  return (
    <Page>
        <Text>{JSON.stringify(datas)}</Text>
        {/* API를 이용해서 UI를 조작하는 코드는 customHook을 이용하지 않고 바로 변경 */}
        {/* Atomic Desgin Pattern 을 이용해서 모든 컴포넌트가 모든 페이지에 호환되게 Props 구조 설계 */}
        <Button onClick={onClickCallAPI}>호출</Button>
    </Page>
  )
}

export default IndexPage