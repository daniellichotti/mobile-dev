import { FlatList } from "react-native";
import { UserCard } from "./UserCard";

export function UserList({ users }) {
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.login.uuid}
      renderItem={({ item }) => <UserCard user={item} />}
      style={{ marginTop: 20 }}
    />
  )
};
