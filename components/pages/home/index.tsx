'use client'

import SocialLoginModal, { socialLoginKey } from '@components/SocialLoginModal';
import { terminator } from '@ui/fonts';
import { useOpenCloseModal } from '@jotai/modal';
import Head from 'next/head';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import ImageModal from './ImageModal';

const Home = () => {
    const session = useSession()
    const openCloseModal = useOpenCloseModal()
    console.log(session)


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
                        <div className="flex-1 flex justify-end">
                            <Image src="/account-icon.svg" alt="Description" width={30} height={30} className="text-3xl text-white" />
                        </div>
                    </header>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {/* Grid items - replace with actual image paths */}
                        <div className=" rounded-lg overflow-hidden">
                            <Image src="/product-6.png" alt="Description" width={200} height={200} layout="responsive" className="mb-5 cursor-pointer" onClick={() => openCloseModal({
                                key: socialLoginKey,
                                status: true,
                                data: null
                            })} />
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

        </>

    )
}
export default Home;
