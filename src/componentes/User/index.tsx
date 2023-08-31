import { UserType } from '../../types';

function UserProfile({ userInfo }: { userInfo: UserType }) {
  return (
    <div>
      <p data-testid="header-user-name">{userInfo.name}</p>
      <img src={ userInfo.image } alt={ `Foto de perfil do usuario ${userInfo.name}` } />
    </div>
  );
}

export default UserProfile;
