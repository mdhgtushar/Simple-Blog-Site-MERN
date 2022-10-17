import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  posts: [
    {
      id: 1,
      title:
        "সহজেই খুজে পান ট্রিকবিডি এর সাপোর্ট টিম কে… যেকোন প্রয়োজনে আপনার পাশে :)",
      description:
        "আসসলামুআলাইকুম, ট্রিকবিডি এর গুরুত্বপূর্ন কিছু আপডেট নিয়ে আপনাদের সামনে হাজির হলাম। অনেকেরেই অভিযোগ ছিলো ট্রিকবিডি টিম এর সাথে যোগাযোগ এর সহজ কোন উপায় নেই… তাই অনেক গুরুত্বপূর্ন বিষয়ে যোগাযোগের জন্য চেষ্টা করা হলেও কোন রেসপন্স পাওয়া যায় না। সেই সমস্যা সমাধানে আপনাদের জন্য তৈরী করা হলো Trickbd Support Mailing System যেটা পুরো ট্রিকবিডি টিম মিলে নিয়ন্ত্রন করবে… সুতরাং যেকোন প্রয়োজনে বিস্তারিত তথ্য দিয়ে আপনার শুধু একটা মেইল করলেই হবে। 🙂 মেইল এড্রেস ~ support@trickbd.com মেইল করার সময় নিচের কাঠামো টা ফলো করুন … মেইলের সাবজেক্টে আপনার ট্রিকবিডি তে অবস্থান উল্লেখ করুন। যেমনঃ আপনি ট্রেইনার হলে সাবজেক্টে এ “[Trainer]” লিখে সাবজেক্ট লেখা শুরু করুন। যদিআপনার ট্রিকবিডি তে আইডি না থাকলে “[Visitor]” লিখুন ট্রেইনার হওয়ার জন্য বা নতুন আইডি খুলার জন্য মেইলে আবেদন না করে পোষ্টের নিচের দিকে দেখুন",
      categories: ["Lifestyle", "Beauty"],
      image:
        "https://trickbd.com/wp-content/uploads/2022/10/08/2022-10-06_141131.png",
    },
    {
      id: 2,
      title:
        "শুধু কমেন্ট করেই জিতে নিন পুরস্কার। এখনই অংশগ্রহণ করে আপনার রিওয়ার্ডস লুফে নিন।",
      description:
        "আসসলামুআলাইকুম, ট্রিকবিডি এর গুরুত্বপূর্ন কিছু আপডেট নিয়ে আপনাদের সামনে হাজির হলাম। অনেকেরেই অভিযোগ ছিলো ট্রিকবিডি টিম এর সাথে যোগাযোগ এর সহজ কোন উপায় নেই… তাই অনেক গুরুত্বপূর্ন বিষয়ে যোগাযোগের জন্য চেষ্টা করা হলেও কোন রেসপন্স পাওয়া যায় না। সেই সমস্যা সমাধানে আপনাদের জন্য তৈরী করা হলো Trickbd Support Mailing System যেটা পুরো ট্রিকবিডি টিম মিলে নিয়ন্ত্রন করবে… সুতরাং যেকোন প্রয়োজনে বিস্তারিত তথ্য দিয়ে আপনার শুধু একটা মেইল করলেই হবে। 🙂 মেইল এড্রেস ~ support@trickbd.com মেইল করার সময় নিচের কাঠামো টা ফলো করুন … মেইলের সাবজেক্টে আপনার ট্রিকবিডি তে অবস্থান উল্লেখ করুন। যেমনঃ আপনি ট্রেইনার হলে সাবজেক্টে এ “[Trainer]” লিখে সাবজেক্ট লেখা শুরু করুন। যদিআপনার ট্রিকবিডি তে আইডি না থাকলে “[Visitor]” লিখুন ট্রেইনার হওয়ার জন্য বা নতুন আইডি খুলার জন্য মেইলে আবেদন না করে পোষ্টের নিচের দিকে দেখুন",
      categories: ["Lifestyle", "Beauty"],
      image:
        "https://trickbd.com/wp-content/uploads/2022/10/04/Blue-And-Pink-Glitch-Technology-Project-Proposal-Presentation.png",
    },
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostFromServer: async (state, action) => {
      const posts = await axios.get("http://localhost:5000/api/posts");
      return (state.posts = posts.data);
    },
  },
});

export const getAllPost = (state) => state.posts.posts;
export const { getPostFromServer } = postSlice.actions;

export default postSlice.reducer;