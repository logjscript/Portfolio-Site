

const Contact = () => {
  return (
    <div name='contact' className="w-full min-h-screen bg-gray-50 flex justify-center items-center sm:text-xl px-8 sm:px-16">
        <form method='POST' action="https://getform.io/f/lbkooyxb" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8 w-full text-center">
                <h2 className="text-4xl sm:text-6xl text-[#2b3c6d] font-bold inline border-b-4 border-[#d81b60]">Contact</h2>
                <p className="pt-6 text-[#4f5f8d]">Complete the form below or send me an email at logandietel1@gmail.com</p>
            </div>
            <input className="p-2 border-2 border-gray-300" type="text" placeholder="Name" name="name" />
            <input className="my-4 p-2 border-2 border-gray-300" type="email" placeholder="Email" name="email" />
            <textarea className="p-2 border-2 border-gray-300" name="message" rows="10" placeholder="Message"></textarea>

            <button className="text-white bg-[#2b3c6d] px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:bg-[#d81b60]">Let's Communicate</button>
        </form>
    </div>
  )
}

export default Contact;