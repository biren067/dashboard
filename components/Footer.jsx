import React from 'react'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

function Footer() {
    return (
        <div className={`${styles.footer} mx-auto py-20 px-40 mt-5`} >
            <div className='flex-col space-y-5'>
                <div className=''>Question? Call
                        <span className='ml-2 underline'>000-800-919-1694</span>
                </div>
                <div className=''>
                    <div className='flex space-x-24 '>
                        <div className='flex md:flex-col space-y-2'>
                            <div><Link href='/footer_pages/FAQ' className='underline'>FAQ</Link></div>
                            <div><Link href='/footer_pages/Invester_Relations' className='underline'>Investor Relations</Link></div>
                            <div><Link href='/footer_pages/pricacy' className='underline'>Privacy</Link></div>
                            <div><Link href='/footer_pages/speed_test' className='underline'>Speed Test</Link></div>
                        </div>
                        <div className='flex md:flex-col space-y-2'>
                            <div><Link href='/footer_pages/help_center' className='underline'>Help Center</Link></div>
                            <div><Link href='/footer_pages/jobs' className='underline'>Jobs</Link></div>
                            <div><Link href='/footer_pages/cookie_preferences' className='underline'>Cookie Preferences</Link></div>
                            <div><Link href='/footer_pages/legal_notice' className='underline'>Legal Notices</Link></div>
                        </div>
                        <div className='flex md:flex-col space-y-2'>
                            <div><Link href='/footer_pages/account' className='underline'>Account</Link></div>
                            <div><Link href='/footer_pages/ways_to_watch' className='underline'>Ways to Watch</Link></div>
                            <div><Link href='/footer_pages/corporate_information' className='underline'>Corporate Information</Link></div>
                            <div><Link href='/footer_pages/only_on_netflix' className='underline'>Only on Netflix</Link></div>
                        </div>
                        <div className='flex md:flex-col space-y-2'>
                            <div><Link href='/footer_pages/media_center' className='underline'>Media Center</Link></div> 
                            <div><Link href='/footer_pages/terms_of_use' className='underline'>Terms of Use</Link></div> 
                            <div><Link href='/footer_pages/contact_us' className='underline'>Contact Us</Link></div>   
                            
                        </div>
                    </div>
                </div>
                <div><select className='border rounded-sm bg-black border-white py-1 px-3' name='language'>
                    <option value='en'>English</option>
                    <option value='hi'>हिंदी</option>
                </select>
                </div>
                <div className=''>
                    Netflix India
                </div>
            </div>
        </div>
    )
}

export default Footer