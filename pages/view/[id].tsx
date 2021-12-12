import * as axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(item);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    const data = axios.get(API_URL).then((res) => {
      setItem(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (id && id.length > 0) {
      getData();
    }
  }, [id]);
  return (
    <>
      {isLoading ? (
        <div style={{ padding: '300px 0' }}>
          <Loader inline-='centered' active>
            Loading
          </Loader>
        </div>
      ) : (
        <Item item={item} />
      )}
    </>
  );
};

export default Post;

/*

Next js 모든 페이지 사전 렌더링(Pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화 (SEO)

1. 정적생성  
2. server side rendering (SSR, Dynamic R endering) 

차이점은, 언제 Html 파일을 생성하는가.

1. 정적생성
- 프로젝트가 빌드하는 시점에 Html 파일이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, next. js  는 정적생성을 권고
- ex. 도움말 , 제품리스트, 마케팅페이지, 블로그 게시물 
- 정적 생성된 페이지들은 CDN 에 캐시
- getStaticProps /getStaticPaths.

2. SSR
- 매 요청마다 html 생성
- 항상 최신상태 유지
- getServerSideProps 

*/
