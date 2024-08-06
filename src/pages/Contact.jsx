import React from 'react'

const Contact = () => {
  return (
    <div className=' py-16 px-6'>
    <div className="container mx-auto bg-gradient-to-b from-yellow-300 via-orange-200 to-red-200 px-4 py-8">

<header className="text-center mb-8">
    <h1 className="text-3xl font-bold">Contact Us</h1>
    <p className="text-lg mt-2">Get in touch with us for any questions or inquiries</p>
</header>

<main className="max-w-3xl mx-auto">
    <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Our Location</h2>
        <p className="leading-relaxed">Visit us at:</p>
        <p className="leading-relaxed">123 Main Street, Cityville, ABC 12345</p>
    </section>

    <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Contact Information</h2>
        <p className="leading-relaxed">Phone: (123) 456-7890</p>
        <p className="leading-relaxed">Email: info@fruitvegshop.com</p>
    </section>

    <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Send Us a Message</h2>
        <form action="#" method="POST">
            <div className="mb-4">
                <label for="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" id="name" name="name" required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div className="mb-4">
                <label for="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input type="email" id="email" name="email" required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div className="mb-4">
                <label for="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
                <button type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-black bg-gradient-to-b from-yellow-400 via-orange-300 to-red-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Send Message
                </button>
            </div>
        </form>
    </section>
</main>

</div>
  </div>
  )
}

export default Contact
