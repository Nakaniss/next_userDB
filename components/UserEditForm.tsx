// UserEditForm.tsx
import React, { useState } from "react";
import { User } from "@/types/User";

interface UserEditFormProps {
  user: User;
  onUpdate: (updatedUser: User) => void;
  onCancel: () => void;
}

const UserEditForm: React.FC<UserEditFormProps> = ({
  user,
  onUpdate,
  onCancel,
}) => {
  const [updatedUser, setUpdatedUser] = useState<User>(user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(updatedUser);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-xl font-bold mb-4">ユーザーを編集</h2>
      <div className="mb-4">
        <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
          ID
        </label>
        <input
          type="text"
          id="id"
          value={updatedUser.id}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, id: e.target.value })
          }
          disabled
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          名前
        </label>
        <input
          type="text"
          id="name"
          value={updatedUser.name}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, name: e.target.value })
          }
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          value={updatedUser.email}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, email: e.target.value })
          }
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
        >
          キャンセル
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          更新
        </button>
      </div>
    </form>
  );
};

export default UserEditForm;
