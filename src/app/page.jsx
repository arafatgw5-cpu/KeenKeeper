"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const res = await fetch("/friends.json");
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        "Error fetching friends"
      }
    };

    loadFriends(); 
  }, []);

  return (
    <div>
      <div>
        {friends.map((friend) => (
          <div key={friend.id}>
            <div>
              <Image src={friend.picture} alt={friend.name} width={72} height={72} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
