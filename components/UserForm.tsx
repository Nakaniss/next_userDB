// UserForm.tsx
import React, { useState } from "react";
import { User } from "@/types/User";

interface UserFormProps {
  onSubmit: (newUser: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [newUser, setNewUser] = useState<User>({ id: "", name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newUser);
    setNewUser({ id: "", name: "", email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-xl font-bold mb-4">新しいユーザーを登録</h2>
      <div className="mb-4">
        <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
          ID
        </label>
        <input
          type="text"
          id="id"
          placeholder="ID"
          value={newUser.id}
          onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
          required
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
          placeholder="名前"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
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
          placeholder="メールアドレス"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        登録
      </button>
    </form>
  );
};

export default UserForm;
