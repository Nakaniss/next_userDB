"use client";

import React, { useState, useEffect } from "react";
import { User } from "@/types/User";
import UserList from "@/components/UserList";
import UserForm from "@/components/UserForm";

// メインページコンポーネント
const Page: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // 全ユーザーデータを取得する関数
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${process.env.API_BASE_URL}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 新しいユーザーを登録する関数
  const handleCreateUser = async (newUser: User) => {
    try {
      const response = await fetch(`${process.env.API_BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        fetchUsers();
      } else {
        console.error("Error creating user:", response.status);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // ユーザーを更新する関数
  const handleUpdateUser = async (updatedUser: User) => {
    try {
      const response = await fetch(
        `${process.env.API_BASE_URL}?id=${updatedUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );
      if (response.ok) {
        setEditingUser(null);
        fetchUsers();
      } else {
        console.error("Error updating user:", response.status);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // ユーザーを削除する関数
  const handleDeleteUser = async (id: string) => {
    try {
      const response = await fetch(`${process.env.API_BASE_URL}?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchUsers();
      } else {
        console.error("Error deleting user:", response.status);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // 編集を中止する関数
  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">ユーザー管理</h1>
      <UserForm onSubmit={handleCreateUser} />
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
        editingUser={editingUser}
        onUpdate={handleUpdateUser}
        onCancelEdit={handleCancelEdit}
      />
    </div>
  );
};

export default Page;
