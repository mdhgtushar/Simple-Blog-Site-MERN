import Home from "./Home";
import Footer from "./inc/Footer";
import Header from "./inc/Header";
import Sidebar from "./inc/Sidebar";
import { Routes, Route } from "react-router-dom";
import Post from "./Post";
import { useState } from "react";
import NotFound from "./NotFound";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title:
        "সহজেই খুজে পান ট্রিকবিডি এর সাপোর্ট টিম কে… যেকোন প্রয়োজনে আপনার পাশে :)",
      description:
        "আসসলামুআলাইকুম, ট্রিকবিডি এর গুরুত্বপূর্ন কিছু আপডেট নিয়ে আপনাদের সামনে হাজির হলাম। অনেকেরেই অভিযোগ ছিলো ট্রিকবিডি টিম এর সাথে যোগাযোগ এর সহজ কোন উপায় নেই… তাই অনেক গুরুত্বপূর্ন বিষয়ে যোগাযোগের জন্য চেষ্টা করা হলেও কোন রেসপন্স পাওয়া যায় না। সেই সমস্যা সমাধানে আপনাদের জন্য তৈরী করা হলো Trickbd Support Mailing System যেটা পুরো ট্রিকবিডি টিম মিলে নিয়ন্ত্রন করবে… সুতরাং যেকোন প্রয়োজনে বিস্তারিত তথ্য দিয়ে আপনার শুধু একটা মেইল করলেই হবে। 🙂 মেইল এড্রেস ~ support@trickbd.com মেইল করার সময় নিচের কাঠামো টা ফলো করুন … মেইলের সাবজেক্টে আপনার ট্রিকবিডি তে অবস্থান উল্লেখ করুন। যেমনঃ আপনি ট্রেইনার হলে সাবজেক্টে এ “[Trainer]” লিখে সাবজেক্ট লেখা শুরু করুন। যদিআপনার ট্রিকবিডি তে আইডি না থাকলে “[Visitor]” লিখুন ট্রেইনার হওয়ার জন্য বা নতুন আইডি খুলার জন্য মেইলে আবেদন না করে পোষ্টের নিচের দিকে দেখুন",
      categories: ["Lifestyle", "Beauty"],
      image: "https://www.w3schools.com/howto/img_forest.jpg",
    },
    {
      id: 2,
      title:
        "শুধু কমেন্ট করেই জিতে নিন পুরস্কার। এখনই অংশগ্রহণ করে আপনার রিওয়ার্ডস লুফে নিন।",
      description:
        "আসসলামুআলাইকুম, ট্রিকবিডি এর গুরুত্বপূর্ন কিছু আপডেট নিয়ে আপনাদের সামনে হাজির হলাম। অনেকেরেই অভিযোগ ছিলো ট্রিকবিডি টিম এর সাথে যোগাযোগ এর সহজ কোন উপায় নেই… তাই অনেক গুরুত্বপূর্ন বিষয়ে যোগাযোগের জন্য চেষ্টা করা হলেও কোন রেসপন্স পাওয়া যায় না। সেই সমস্যা সমাধানে আপনাদের জন্য তৈরী করা হলো Trickbd Support Mailing System যেটা পুরো ট্রিকবিডি টিম মিলে নিয়ন্ত্রন করবে… সুতরাং যেকোন প্রয়োজনে বিস্তারিত তথ্য দিয়ে আপনার শুধু একটা মেইল করলেই হবে। 🙂 মেইল এড্রেস ~ support@trickbd.com মেইল করার সময় নিচের কাঠামো টা ফলো করুন … মেইলের সাবজেক্টে আপনার ট্রিকবিডি তে অবস্থান উল্লেখ করুন। যেমনঃ আপনি ট্রেইনার হলে সাবজেক্টে এ “[Trainer]” লিখে সাবজেক্ট লেখা শুরু করুন। যদিআপনার ট্রিকবিডি তে আইডি না থাকলে “[Visitor]” লিখুন ট্রেইনার হওয়ার জন্য বা নতুন আইডি খুলার জন্য মেইলে আবেদন না করে পোষ্টের নিচের দিকে দেখুন",
      categories: ["Lifestyle", "Beauty"],
      image:
        "https://trickbd.com/wp-content/uploads/2022/09/29/commenters-templete.jpg",
    },
  ]);
  const [categories, setCategories] = useState([
    {
      name: "Bussness Stadies",
      numberOfPosts: 14,
    },
    {
      name: "Website Developement",
      numberOfPosts: 1,
    },
    {
      name: "Communication (English, Bangla)",
      numberOfPosts: 122,
    },
  ]);
  return (
    <div>
      <Header categories={categories} />
      <div className="container" style={{ minHeight: "90vh" }}>
        <div className="row">
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/post/:id" element={<Post posts={posts} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Sidebar categories={categories} posts={posts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
