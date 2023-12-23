import Coin from '@components/ui/Coin';
import { terminator } from '@components/ui/fonts'
import React from 'react'
import { IoCameraOutline } from "react-icons/io5";

const Profile = () => {
    return (
        <div>
            <div className='min-h-[400px] bg-profile-img px-7'>
                <div className="text-5xl  text-white flex-0 text-center pt-7"><h1 className={`${terminator.className}`}>LOVERSE</h1></div>
                <div className="mt-20">
                    <div className="flex gap-5">
                        <div className='relative'>
                            <img src="/images/avatar.png" alt="avatar" className="w-40 h-40 rounded-full" />
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white absolute right-2 bottom-2">
                                <IoCameraOutline className="text-2xl text-black" />
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl">Ariana Grande</div>
                            <div className="flex gap-2">
                                <div className="text-gray-300">Plan:</div>
                                <div className="text-white">Free</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="text-gray-300">Email:</div>
                                <div className="text-white">Ariana.grande@gmail.com</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-gray-300">Credits</div>
                                <Coin value="100" className='w-10 h-10 text-xs' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black min-h-[57vh] px-5 py-5">
                <div className="my-2 text-2xl">My Generated Image</div>
                <div className="mt-5">
                    <div className="grid grid-cols-6 gap-5">
                        <div>
                            <img src="/images/image1.png" alt="image" className="h-[200px] w-full col-span-2" />
                        </div>
                        <div>
                            <img src="/images/image1.png" alt="image" className="h-[100px] col-span-2" />
                        </div>
                        <div>
                            <img src="/images/image1.png" alt="image" className="h-[100px] col-span-2" />
                        </div>
                        <div>
                            <img src="/images/image1.png" alt="image" className="h-[100px] col-span-2" />
                        </div>
                        <div>
                            <img src="/images/image1.png" alt="image" className="h-[100px] col-span-2" />
                        </div>
                        <div>
                            <img src="/images/image1.png" alt="image" className="h-[100px] col-span-2" />
                        </div>
                        <div>
                            <img src="/images/image1.png" alt="image" className="h-[100px] col-span-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile