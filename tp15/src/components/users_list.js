import React from 'react';
import UserItem from './userItem';

const UsersList = (props) => {

	const usersInfo = props.usersData;
	console.log(`usersInfo: ${JSON.stringify(usersInfo)}`);

	// const displayUsersInfoMap = usersInfo.map((user, idx) =>
	// 	<UserItem key={user.id} nome={user.nome} username={user.username} gn={user.gn} tlf={user.tlf}></UserItem>
	// );

	// function displayUsersInfoFor() {
	// 	const components = [];
	// 	for (const user of usersInfo) {
	// 		const comp = <UserItem key={user.id} nome={user.nome} username={user.username} gn={user.gn} tlf={user.tlf}></UserItem>
	// 		components.push(comp);
	// 	}
	// 	return components;
	// }

	return (
		<ul className="col-md-4 list-group">
			{usersInfo.map((user) =>
				<UserItem key={user.id} nome={user.nome} username={user.username} gn={user.gn} tlf={user.tlf}></UserItem>
			)}
		</ul>
	);
};
export default UsersList;