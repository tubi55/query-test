export default function Main() {
  return (
    <div className="Main">
      <h1>Main</h1>
      {/* react-query로 관리되는 서버데이터가 활용되지 않는 메인컴포넌트 이동시 자동으로 해당 데이터는 inactive상태가됨 이떄부터 기본 설정된 캐시타임이 카운트되면 캐시타임이 끝나면 해당 데이터를 아예 제거  */}
    </div>
  );
}
