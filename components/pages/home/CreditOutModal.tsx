/* eslint-disable @next/next/no-img-element */
import Coin from "@components/ui/Coin";
import {
    Dialog,
    DialogContent
} from "@components/ui/dialog";
import { openCloseModalAtom, useModalState } from "@jotai/modal";
import { useSetAtom } from "jotai";

export const creditOutKey = "creditOutKey"

const CreditOutModal = () => {
    const openCloseModal = useSetAtom(openCloseModalAtom)
    const modalVal = useModalState(creditOutKey)


    const { status } = modalVal || {}
    return (
        <Dialog open={status} onOpenChange={val => openCloseModal({
            key: creditOutKey,
            status: val
        })} >
            <DialogContent>
                <div className="flex flex-col items-center gap-3 py-3">
                    <Coin value={'00'} />
                    <div>You ran out of credit. Buy more credits</div>
                    <button className="rounded bg-white text-black text-center py-2 flex justify-center items-center gap-2 px-3">
                        View our Packages
                    </button>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default CreditOutModal