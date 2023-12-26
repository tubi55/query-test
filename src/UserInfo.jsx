import { useUserQuery } from './hooks/useUsers';

export default function UserInfo() {
  const result = useUserQuery();
  console.log(result);
  return (
    <div className="UserInfo">
      <h1>User Infromation</h1>
    </div>
  );
}
