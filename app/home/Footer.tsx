import React from 'react'

function Footer() {
  return (
    <footer className="bg-black py-12 sm:py-16">
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center">
        <img src="/pin.png" alt="Shit Talk Logo" className="w-8 h-8 sm:w-12 sm:h-12 mr-2" />
        <h1 className="text-white text-base sm:text-xl font-bold tracking-wider">Shit Talk</h1>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center">
        <a href="#" className="text-white text-base sm:text-lg font-medium tracking-wide hover:underline mr-6">Report a chatroom</a>
        <a href="#" className="text-white text-base sm:text-lg font-medium tracking-wide hover:underline mr-6">Contact support</a>
        <a href="#" className="text-white text-base sm:text-lg font-medium tracking-wide hover:underline">Don't have a workplace?</a>
      </div>
      <div className="mt-8 text-center text-white text-sm sm:text-base">
        <p>&copy; 2023 Shit Talk Inc. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer