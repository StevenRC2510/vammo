import { ToastContainer } from "react-toastify";

import Cart from "@/components/cart";
import FoodList from "@/components/foodList";

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-mainLayout gap-10">
        <div>
          <FoodList />
        </div>
        <div>
          <Cart />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
