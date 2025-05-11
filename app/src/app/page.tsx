'use client'
import {User} from "@/utils/types/user.types";
import {useEffect, useState} from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch('/api/users').then(res => res.json()).then(setUsers)
  })
  return (
    <div>
      {users.map((user: User) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}
