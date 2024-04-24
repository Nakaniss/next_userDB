// UserList.tsx
import React from "react";
import { User } from "@/types/User";
import UserEditForm from "./UserEditForm";

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
  editingUser: User | null;
  onUpdate: (updatedUser: User) => void;
  onCancelEdit: () => void;
}

const UserList: React.FC<UserListProps> = ({
  users,
  onEdit,
  onDelete,
  editingUser,
  onUpdate,
  onCancelEdit,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">ユーザー一覧</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-4 p-4 border rounded-md">
            <p className="text-gray-700">ID: {user.id}</p>
            <p className="text-gray-700">名前: {user.name}</p>
            <p className="text-gray-700">メールアドレス: {user.email}</p>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => onEdit(user)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
              >
                編集
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editingUser && (
        <UserEditForm
          user={editingUser}
          onUpdate={onUpdate}
          onCancel={onCancelEdit}
        />
      )}
    </div>
  );
};

export default UserList;
