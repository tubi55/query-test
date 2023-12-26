import { useQuery } from '@tanstack/react-query';

export default function UserInfo() {
  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  };
  //useQuery(queryKey, fetch func); qeuryKey:react-query관리할 각 비동기데이터 구분용도의 키
  /*
    data: 실제 반환데이터
    isError, isSuccess: 데이터반환 성공실패유무
    isLoading: pending 유무
    isStale, isFresh: 최신데이터 유무 (stale: false(최신상태), true(옛날상태) )
    refetch: 비동기 데이터 강제 재요청 함수
  */
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUser,
  });
  //useQuery이용시 useState를 통한 지역스테이트 생성, useEffet를 통한 fetching함수 호출, useCallback을 통한 메모이제이션처리 안해도 한번에 useQuery가 위의 모든 작업을 대신 처리해줌

  return (
    <div className="UserInfo">
      <h1>User Infromation</h1>
      {isLoading && <p>is loading...</p>}
      {isSuccess && data.map((user) => <h2 key={user.id}>{user.name}</h2>)}
    </div>
  );
}
