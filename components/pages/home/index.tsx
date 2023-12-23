/* eslint-disable @next/next/no-img-element */
'use client'

import SocialLoginModal, { socialLoginKey } from '@components/SocialLoginModal';
import useUser from '@hooks/useUser';
import { useOpenCloseModal } from '@jotai/modal';
import { terminator } from '@ui/fonts';
import Head from 'next/head';
import Image from 'next/image';
import CreditOutModal from './CreditOutModal';
import GeneratedModal from './GeneratedModal';
import ImageModal, { imageModalKey } from './ImageModal';
import PaymentModal from './PaymentModal';
import PlansModal from './PlansModal';
import Coin from '@ui/Coin';
import { IoIosLogOut } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import { signOut } from 'next-auth/react';

const Home = () => {
    const openCloseModal = useOpenCloseModal()
    const user = useUser()
    console.log('user', user)

    const onImageClick = () => {
        if (user) {
            openCloseModal({
                key: imageModalKey,
                status: true,
                data: null
            })
        } else {
            openCloseModal({
                key: socialLoginKey,
                status: true,
                data: null
            })
        }
    }

    const onLogout = async () => {
        localStorage.removeItem('token')
        await signOut()
        window.location.reload()
    }

    return (
        <>
            <Head>
                <title>LOVERSE HOMEPAGE</title>

            </Head>
            <div className="relative bg-gray-900 min-h-screen">
                <div className="px-10 py-1">
                    <header className="sticky top-0 z-10 bg-gray-900 backdrop-blur-md flex items-center justify-between mb-12 py-4 px-10">
                        {/* Invisible spacer to center the h1 */}
                        <div className="flex-1"></div>
                        <div className="text-5xl  text-white flex-0"><h1 className={`${terminator.className}`}>LOVERSE</h1></div>

                        {/* Icon on the right side */}
                        {
                            user ?
                                <div className="flex flex-1 justify-end items-center gap-3">
                                    <div className="text-lg">Credits</div>
                                    <Coin value={user?.credits} className='w-9 h-9' />
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <div className='flex gap-2 cursor-pointer'>
                                                <img src={user?.image || "/account-icon.svg"} alt="Description" className="text-3xl text-white rounded-full w-10 h-10" />

                                                <div>
                                                    <div className="text-white text-sm">{user?.name}</div>
                                                    <div className="text-white text-sm">
                                                        <span className='text-gray-400'>Plan: </span>
                                                        <span>{user?.plan?.title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-60 mt-3 min-h-5">
                                            <div className="flex gap-2 items-center py-1 px-3 cursor-pointer text-red-400" onClick={onLogout}><IoIosLogOut className='text-xl' /> Logout</div>
                                        </PopoverContent>
                                    </Popover>


                                </div>
                                :
                                <div className="flex-1 flex justify-end">
                                    <Image src="/account-icon.svg" alt="Description" width={30} height={30} className="text-3xl text-white" />
                                </div>
                        }
                    </header>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {/* Grid items - replace with actual image paths */}
                        <div className=" rounded-lg overflow-hidden">
                            <Image src="/product-6.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5 cursor-pointer" onClick={() => onImageClick()} />
                            <Image src="/product-1.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5" />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <Image src="/product-2.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5" />
                            <Image src="/product-7.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5" />
                        </div>
                        <div className=" rounded-lg overflow-hidden">
                            <Image src="/product-3.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5" />
                            <Image src="/product-8.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5" />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <Image src="/product-4.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5" />
                            <Image src="/product-9.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5" />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <Image src="/product-5.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5" />
                            <Image src="/product-10.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5" />
                        </div>
                        {/* ...repeat for each grid item */}
                    </div>
                </div>
                <div className="sticky bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></div>

            </div>
            <SocialLoginModal />
            <ImageModal />
            <GeneratedModal />
            <CreditOutModal />
            <PlansModal />
            <PaymentModal />

        </>

    )
}
export default Home;
