/* eslint-disable @next/next/no-img-element */
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@components/ui/dialog"
import { openCloseModalAtom, useModalState } from "@jotai/modal"
import { useSetAtom } from "jotai"

import React, { useRef } from 'react'
import { IoCameraOutline } from "react-icons/io5";
export const generatedModalKey = "generatedModalKey"

const GeneratedModal = () => {
    const openCloseModal = useSetAtom(openCloseModalAtom)
    const modalVal = useModalState(generatedModalKey)


    const { status } = modalVal || {}
    return (
        <Dialog open={status} onOpenChange={val => openCloseModal({
            key: generatedModalKey,
            status: val
        })} >
            <DialogContent className="max-w-2xl">
                <div className="h-[40vh] overflow-hidden rounded-2xl mt-7">
                    <img src="/product-6.png" alt="Description" className="mb-5 cursor-pointer w-full " />
                </div>
                <div className="grid grid-cols-2 mt-3 gap-3">
                    <button className="rounded bg-white text-black text-center py-2 flex justify-center items-center gap-2">
                        Re-Generate <div className="h-7 w-7 text-sm flex justify-center items-center rounded-full bg-yellow-500">01</div>
                    </button>
                    <button className="rounded bg-white text-black text-center py-2 flex justify-center items-center gap-2">
                        Download
                    </button>
                </div>
                <div className="mt-3 text-center">
                    <div>Share</div>
                    <div className="flex gap-3 justify-center mt-2">
                        <img src="/images/tictoc.png" alt="tictoc" className="w-12 h-12 cursor-pointer" />
                        <img src="/images/instagram.png" alt="instagram" className="w-12 h-12 cursor-pointer" />
                        <img src="/images/facebook.png" alt="facebook" className="w-12 h-12 cursor-pointer" />
                        <img src="/images/pintrest.png" alt="pintrest" className="w-12 h-12 cursor-pointer" />
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default GeneratedModal