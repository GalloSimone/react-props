import React from "react";
import Header from "./components/Header.jsx";
import PostCard from "./components/postCard.jsx";
import Footer from "./components/footer.jsx";
import './App.css'

function App() {
  return (
    <>
      <div className="bg-secondary-subtle fw-bold p-2 fs-2 ">
        <Header />
      </div>

      <main className="bg-secondary-subtle">
        <div className="d-flex justify-content-center pb-3">
          <PostCard />
        </div>
      </main>
      <Footer />





    </>
  )
}

export default App
