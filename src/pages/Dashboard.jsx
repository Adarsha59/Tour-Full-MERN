//

import React from "react";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen bg-background-color4 overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center h-16 w-full px-8 bg-background-color1 fixed top-0 z-50 shadow-lg">
        <div className="flex items-center space-x-16">
          <div className="text-2xl font-semibold text-green-700">
            GeeksForGeeks
          </div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
            className="h-8 cursor-pointer"
            alt="menu-icon"
            onClick={() =>
              document
                .querySelector(".navcontainer")
                .classList.toggle("navclose")
            }
          />
        </div>

        <div className="flex items-center space-x-16">
          <div className="flex items-center bg-background-color3 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-64 h-10 px-5 text-sm outline-none"
            />
            <div className="flex items-center justify-center w-12 h-10 bg-secondary-color cursor-pointer">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                className="h-8"
                alt="search-icon"
              />
            </div>
          </div>
          <div className="relative flex items-center space-x-10 cursor-pointer">
            <div className="absolute top-2 left-4 w-2 h-2 bg-pink-500 rounded-full"></div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
              className="h-8"
              alt=""
            />
            <div className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full overflow-hidden">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
                className="h-10"
                alt="dp"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex mt-16">
        {/* Sidebar */}
        <div className="navcontainer h-screen w-64 bg-background-color2 fixed top-16 left-0 shadow-lg overflow-hidden transition-all duration-500 ease-in-out">
          <nav className="flex flex-col h-full p-4 space-y-8">
            <div className="nav-upper-options space-y-8">
              <div className="flex items-center space-x-4 p-4 bg-Border-color text-white cursor-pointer border-l-4 border-primary-color hover:bg-Border-color">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                  className="h-8"
                  alt="dashboard"
                />
                <h3>Dashboard</h3>
              </div>
              <div className="flex items-center space-x-4 p-4 cursor-pointer border-l-4 border-transparent hover:border-gray-400 hover:bg-gray-200">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                  className="h-8"
                  alt="articles"
                />
                <h3>Articles</h3>
              </div>
              <div className="flex items-center space-x-4 p-4 cursor-pointer border-l-4 border-transparent hover:border-gray-400 hover:bg-gray-200">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                  className="h-8"
                  alt="report"
                />
                <h3>Report</h3>
              </div>
              <div className="flex items-center space-x-4 p-4 cursor-pointer border-l-4 border-transparent hover:border-gray-400 hover:bg-gray-200">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                  className="h-8"
                  alt="institution"
                />
                <h3>Institution</h3>
              </div>
              <div className="flex items-center space-x-4 p-4 cursor-pointer border-l-4 border-transparent hover:border-gray-400 hover:bg-gray-200">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                  className="h-8"
                  alt="profile"
                />
                <h3>Profile</h3>
              </div>
              <div className="flex items-center space-x-4 p-4 cursor-pointer border-l-4 border-transparent hover:border-gray-400 hover:bg-gray-200">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                  className="h-8"
                  alt="settings"
                />
                <h3>Settings</h3>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 cursor-pointer border-l-4 border-transparent hover:border-gray-400 hover:bg-gray-200">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                className="h-8"
                alt="logout"
              />
              <h3>Logout</h3>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main flex-grow h-full overflow-y-scroll p-8">
          <div className="searchbar2 hidden md:flex justify-center mb-10">
            <input
              type="text"
              placeholder="Search"
              className="w-64 h-10 px-5 text-sm bg-background-color3 border-2 border-secondary-color rounded-l-full outline-none"
            />
            <div className="flex items-center justify-center w-12 h-10 bg-secondary-color cursor-pointer rounded-r-full">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                className="h-8"
                alt="search-button"
              />
            </div>
          </div>

          {/* Stats Boxes */}
          <div className="box-container flex flex-wrap justify-evenly items-center gap-12">
            <div className="box bg-one-use-color text-white flex items-center justify-around p-5 w-56 h-32 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
              <div>
                <h2 className="text-3xl">60.5k</h2>
                <h2 className="text-sm">Article Views</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                alt="Views"
                className="h-12"
              />
            </div>
            <div className="box bg-two-use-color text-white flex items-center justify-around p-5 w-56 h-32 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
              <div>
                <h2 className="text-3xl">150</h2>
                <h2 className="text-sm">Likes</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
                alt="likes"
                className="h-12"
              />
            </div>
            <div className="box bg-one-use-color text-white flex items-center justify-around p-5 w-56 h-32 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
              <div>
                <h2 className="text-3xl">320</h2>
                <h2 className="text-sm">Comments</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                alt="comments"
                className="h-12"
              />
            </div>
            <div className="box bg-two-use-color text-white flex items-center justify-around p-5 w-56 h-32 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
              <div>
                <h2 className="text-3xl">70</h2>
                <h2 className="text-sm">Published</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
                alt="published"
                className="h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
