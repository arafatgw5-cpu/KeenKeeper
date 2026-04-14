"use client";

import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Image from "next/image";

const Page = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const res = await fetch("/friends.json");
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    loadFriends();
  }, []);

  // 📊 Summary Data
  const totalFriends = friends.length;

  const onTrack = friends.filter((f) => f.status === "on-track").length;

  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due",
  ).length;

  const interactions = 12;

  // 🎨 Status Style Function
  const getStatusStyle = (status) => {
    if (status === "overdue") return "bg-[#FEE2E2] text-[#B91C1C]";
    if (status === "almost due") return "bg-[#FEF3C7] text-[#92400E]";
    return "bg-[#D1FAE5] text-[#065F46]";
  };

  const formatStatus = (status) => {
    if (status === "on-track") return "On-Track";
    if (status === "almost due") return "Almost Due";
    return "Overdue";
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 🔝 Banner */}
        <Banner />

        {/* 🔥 Summary Cards (INLINE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-10">
          {/* Card 1 */}
          <div className="bg-[#F5F7F6] rounded-[20px] border border-[#E5E7EB] py-8 text-center hover:shadow-sm transition">
            <h2 className="text-3xl font-bold text-[#065F46]">
              {totalFriends}
            </h2>
            <p className="mt-1 text-sm text-[#6B7280]">Total Friends</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F5F7F6] rounded-[20px] border border-[#E5E7EB] py-8 text-center hover:shadow-sm transition">
            <h2 className="text-3xl font-bold text-[#065F46]">{onTrack}</h2>
            <p className="mt-1 text-sm text-[#6B7280]">On Track</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F5F7F6] rounded-[20px] border border-[#E5E7EB] py-8 text-center hover:shadow-sm transition">
            <h2 className="text-3xl font-bold text-[#065F46]">
              {needAttention}
            </h2>
            <p className="mt-1 text-sm text-[#6B7280]">Need Attention</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F5F7F6] rounded-[20px] border border-[#E5E7EB] py-8 text-center hover:shadow-sm transition">
            <h2 className="text-3xl font-bold text-[#065F46]">
              {interactions}
            </h2>
            <p className="mt-1 text-sm text-[#6B7280]">
              Interactions This Month
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-10"></div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#1F2937] mb-6">
          Your Friends
        </h2>

        {/* 👇 Friend Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="bg-[#F5F7F6] rounded-[20px] p-6 text-center border border-[#E5E7EB] hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  width={72}
                  height={72}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-[18px] text-[#1F2937]">
                {friend.name}
              </h3>

              {/* Days */}
              <p className="text-[13px] text-[#9CA3AF] mt-1">
                {friend.days_since_contact}d ago
              </p>

              {/* Tags */}
              <div className="flex justify-center gap-2 mt-3 flex-wrap">
                {friend.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#D1FAE5] text-[#065F46] px-3 py-1 rounded-full text-[11px] font-medium"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              {/* Status */}
              <p
                className={`mt-4 inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                  friend.status,
                )}`}
              >
                {formatStatus(friend.status)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
