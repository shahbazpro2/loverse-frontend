/* eslint-disable @next/next/no-img-element */
import {
    Dialog,
    DialogContent
} from "@components/ui/dialog";
import { openCloseModalAtom, useModalState } from "@jotai/modal";
import { useSetAtom } from "jotai";

import { useRef } from 'react';
import { IoCameraOutline } from "react-icons/io5";
import { generatedModalKey } from "./GeneratedModal";
export const imageModalKey = "imageModalKey"

const ImageModal = () => {
    const openCloseModal = useSetAtom(openCloseModalAtom)
    const modalVal = useModalState(imageModalKey)
    const fileRef = useRef(null)

    const fileUpload = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }

    const { status } = modalVal || {}
    return (
        <Dialog open={status} onOpenChange={val => openCloseModal({
            key: imageModalKey,
            status: val
        })} >
            <DialogContent className="max-w-2xl">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <img src="/product-6.png" alt="Description" className="mb-5 h-full w-full" onClick={() => openCloseModal({
                            key: generatedModalKey,
                            status: true
                        })} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg">Digital Monalisa Dots</div>
                        <div className="mt-2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, culpa cum. Blanditiis officia in, minima eligendi, saepe cum vel fugiat autem ducimus tempore, voluptate non atque eum reiciendis maxime ea?
                        </div>
                        <div className="border border-dashed rounded-lg h-full flex gap-2 flex-col items-center justify-center mt-5 cursor-pointer" onClick={fileUpload}>
                            <input ref={fileRef} type="file" className="hidden" />
                            <IoCameraOutline className="text-3xl" />
                            <div>Upload Your Image</div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default ImageModal