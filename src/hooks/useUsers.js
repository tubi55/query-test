import { useQuery } from '@tanstack/react-query';

const fetchUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return await response.json();
};
export const useUserQuery = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    refetchOnWindowFocus: false, //다른 브라우저탭 이동했다시 다시 넘어왔을떄 refetching안함
    refetchOnMount: false, //재 마운트시 refetching안함
    gcTime: 1000 * 5,
  });
};

/*
  fresh: 서버데이터를 최신상태로 인식하는 상태
  stale: 서버데이터를 오래된 데이터로 인식하는 상태
  inactive: 서버데이터가 더이상 해당 컴포넌트에서 활용되지 않는 상태
  gcTime: inactive가 되자마다 gcTime에 등록된 시간값이 소진되면서 해당 시간이 지나면 가비지컬렉터가 해당 메모리 제거

*/

/*
  react-query 개발툴에서 확인할수 있는 상태값 5가지정리
  fresh: 비동기 데이터가 현재 최신상태 (refetching할 필요가 없는 신선한 상태)
  fetching: 비동기 데이터의 요청중인 상태 (pending)
  paused: 특정이유로 비동기 데이터 요청이 보류가 된상태
  stale: 현재 해당 컴포넌트에서 활용되고 있는 데이터가 최신상태가 아닌경우 (refetching이 필요한 상태)
  inactive: 최신상태가 아닌 데이터를 해당 컴포넌트에서 현재 활용되고 있지 않는 상태 (일정시간이후 해당 데이터가 삭제됨)



*/
