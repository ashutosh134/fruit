import React from 'react'

const About = () => {
  return (
    <div className='py-8 px-6'>
        <main className="container mx-auto my-8 p-20 bg-amber-400   shadow-md">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
            Welcome to Fresh Harvest Market, your one-stop destination for the freshest and finest fruits and vegetables in town! Since our inception in 2010, we have been committed to bringing you high-quality produce sourced from local farms and trusted suppliers.
        </p>
        <p className="text-lg mb-4">
            Our mission is to promote healthy living by offering a wide variety of seasonal fruits and vegetables at affordable prices. Whether you're looking for crisp apples, vibrant bell peppers, or leafy greens, we strive to ensure that every item on our shelves meets our rigorous quality standards.
        </p>
        <p className="text-lg mb-4">
            At Fresh Harvest Market, we believe in supporting our community. We partner with local farmers to ensure that you receive the freshest produce while also contributing to the sustainability of our local agriculture. Our friendly and knowledgeable staff are always here to help you find what you need and offer tips on how to get the most out of your produce.
        </p>
        <p className="text-lg mb-4">
            Thank you for choosing Fresh Harvest Market. We look forward to serving you and being a part of your healthy lifestyle journey.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">mr. Jane</h3>
                <p className="text-gray-600">Founder & CEO</p>
                <p className="mt-2">Jane is passionate about fresh produce and healthy living. With over 15 years of experience in the industry, she ensures that Fresh Harvest Market remains a leader in quality and customer satisfaction.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                <p className="text-gray-600">Head of Sourcing</p>
                <p className="mt-2">John manages our partnerships with local farmers and suppliers, ensuring that we bring the best produce to our customers. His expertise and relationships in the industry help us maintain high standards.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
                <p className="text-gray-600">Customer Service Manager</p>
                <p className="mt-2">Emily leads our customer service team, making sure that every shopping experience is pleasant and satisfying. Her dedication to customer care is a key part of our success.</p>
            </div>
        </div>
    </main>
    </div>
  )
}

export default About
