import {
    Dialog,
    DialogContent
} from "@components/ui/dialog"
import { useModalState, useOpenCloseModal } from "@jotai/modal"

import { GoogleButton } from "./GoogleButton"
import { imageModalKey } from "@pages/home/ImageModal"
export const socialLoginKey = "socialLoginKey"

const SocialLoginModal = () => {
    const openCloseModal = useOpenCloseModal()
    const modalVal = useModalState(socialLoginKey)

    const { status } = modalVal || {}
    return (
        <Dialog open={status} onOpenChange={val => openCloseModal({
            key: socialLoginKey,
            status: val
        })}>
            <DialogContent>
                <div className="text-center">
                    <div className="text-2xl">Welcome</div>
                    <div>Choose any one to continue <span className="font-bold">Loverse</span></div>
                    <div className="mt-5 space-y-3" onClick={() => openCloseModal({
                        key: imageModalKey,
                        status: true
                    })}>
                        <GoogleButton />
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default SocialLoginModal