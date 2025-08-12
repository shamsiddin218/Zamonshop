import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaHome, FaBoxOpen, FaUserAlt, FaCog, FaChartBar } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const menuItems = [
  { icon: <FaHome />, title: "Boshqaruv" },
  { icon: <FaBoxOpen />, title: "Mahsulotlar" },
  { icon: <FaUserAlt />, title: "Foydalanuvchilar" },
  { icon: <FaChartBar />, title: "Statistika" },
  { icon: <FaCog />, title: "Sozlamalar" },
];

const statistikalar = [
  { title: "Jami buyurtmalar", value: "1,245" },
  { title: "Ro'yxatdan o'tgan foydalanuvchilar", value: "8,972" },
  { title: "Oylik daromad (UZS)", value: "145,000,000" },
  { title: "Faol foydalanuvchilar", value: "2,154" },
  { title: "Bugungi tashriflar", value: "3,102" },
  { title: "Yangi ro'yxatdan o'tuvchilar", value: "126" },
  { title: "Mahsulotlar soni", value: "548" },
  { title: "Sotilgan mahsulotlar (oylik)", value: "3,487" },
  { title: "Eng ko'p ko'rilgan mahsulot", value: "Smartfon iPhone 13" }
];

const chartData = [
  { name: "Yan", daromad: 95 },
  { name: "Fev", daromad: 110 },
  { name: "Mar", daromad: 130 },
  { name: "Apr", daromad: 90 },
  { name: "May", daromad: 160 },
  { name: "Iyun", daromad: 145 },
];

const Dashboard = () => {
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = localStorage.getItem("theme") === "dark";
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen mt-[125px] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col md:flex-row  md:mt-[120px]">
  {/* Sidebar */}
  <aside className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible">
    <motion.h1
      className="text-xl lv:text-lg xs:text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 flex-shrink-0"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      ZamonShop
    </motion.h1>
    <nav className="flex flex-row md:flex-col gap-2 md:gap-3">
      {menuItems.map((item, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition text-sm sm:text-base"
        >
          <span className="text-blue-500 dark:text-blue-300">{item.icon}</span>
          <span className="font-medium hidden lv:inline">{item.title}</span>
        </motion.button>
      ))}
    </nav>
  </aside>

  {/* Main content */}
  <main className="flex-1 p-3 xs:p-4 sm:p-6">
    <motion.h2
      className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Xush kelibsiz, Admin!
    </motion.h2>

    {/* Statistikalar */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 xs:mb-8">
      {statistikalar.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition p-4 xs:p-6">
            <p className="text-gray-600 dark:text-gray-300 text-sm xs:text-base">{item.title}</p>
            <h3 className="text-xl xs:text-2xl font-bold text-blue-600 dark:text-blue-400">{item.value}</h3>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Diagramma */}
    <div className="bg-white dark:bg-gray-800 p-4 xs:p-6 rounded-2xl shadow-md">
      <h3 className="text-lg xs:text-xl font-semibold mb-3 xs:mb-4">Oxirgi 6 oy daromad statistikasi</h3>
      <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke={"#ccc"} />
          <XAxis dataKey="name" stroke={"#8884d8"} />
          <YAxis stroke={"#8884d8"} />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", color: "#fff" }}
            labelStyle={{ color: "#fff" }}
          />
          <Bar dataKey="daromad" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </main>
</div>

  );
};

export default Dashboard;