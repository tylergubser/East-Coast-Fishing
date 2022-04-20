import React from 'react'

function Footer() {
  return (
    <footer class="text-center flex flex-col justify-center items-center absolute w-full bg-inherit">
      <div class="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8 bottom-0">
        <div class="max-w-3xl mx-auto space-y-6">
          <div className="text-center font-light font-sm">
            <a href="https://www.linkedin.com/in/v12v0/" className="hover:text-blue-700"> Vi V. | </a>
            <a href="http://www.linkedin.com/in/tyler-gubser" className="hover:text-blue-700"> Tyler G. | </a>
            <a href="https://www.linkedin.com/in/echernicky/" className="hover:text-blue-700"> Evan C. | </a>
            <a href="https://www.linkedin.com/in/stephen-talley-the-developer/" className="hover:text-blue-700" > Stephen T.</a>
            <p>2022</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer