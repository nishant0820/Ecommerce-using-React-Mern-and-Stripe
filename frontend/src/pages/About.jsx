import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi et dolorem nemo quia corporis. Atque ab sint nihil adipisci, autem eaque eveniet accusamus iste labore unde, reiciendis animi dolore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perspiciatis placeat veritatis. Consequatur doloribus accusantium quidem reprehenderit quod earum ad deleniti dolor! Alias delectus veniam aliquid dolor aperiam sit fuga?
          Dignissimos facere quisquam veritatis architecto aliquam tempora molestiae sapiente molestias blanditiis numquam, tempore velit, ipsa temporibus laudantium fugit deleniti nihil, quaerat vel. Saepe recusandae quam nesciunt tempore necessitatibus amet in!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum facere cum voluptatibus beatae omnis minima consequatur quod dolorum. Nulla soluta culpa rerum, eligendi officia neque inventore odit suscipit non ullam.
          Ipsa adipisci, officiis incidunt omnis assumenda quo aperiam repellendus quaerat, id illo velit rerum tenetur ducimus, doloribus quos. Nisi dolorum omnis similique veniam quae, voluptatibus eaque neque nihil quisquam. Velit</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About