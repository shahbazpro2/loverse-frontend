/* eslint-disable @next/next/no-img-element */
import Coin from "@components/ui/Coin";
import {
    Dialog,
    DialogContent
} from "@components/ui/dialog";
import { openCloseModalAtom, useModalState } from "@jotai/modal";
import { useSetAtom } from "jotai";
import { PlanCard } from "./PlansModal";

export const paymentModalKey = "paymentModalKey"


const PaymentModal = () => {
    const openCloseModal = useSetAtom(openCloseModalAtom)
    const modalVal = useModalState(paymentModalKey)


    const { status } = modalVal || {}
    return (
        <Dialog open={status} onOpenChange={val => openCloseModal({
            key: paymentModalKey,
            status: val
        })} >
            <DialogContent className="max-w-6xl dark:bg-black/30 py-10">
                <div className="text-4xl w-[550px] m-auto text-center">Loverse Moderate Package</div>
                <div className="mt-5 grid grid-cols-5 gap-5">
                    <div className="space-y-3 col-span-3">
                        <div className="rounded-2xl bg-black p-5">
                            <div className="text-xl">Account Information</div>
                            <div className="mt-2">
                                <div className="flex gap-3">
                                    <div className="w-[100px]">Name</div>
                                    <div className="text-gray-300">John Doe</div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-[100px]">Email</div>
                                    <div className="text-gray-300">John@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black p-5 rounded-2xl">
                            <div className="text-xl">Payment Details</div>
                            <hr className="my-3 border-gray-700" />
                            <div className="flex justify-between">
                                <div className="text-lg">Plan Price</div>
                                <div className="text-gray-300">
                                    $9.99/monthly
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-lg">Tax</div>
                                <div className="text-gray-300">
                                    $4.00
                                </div>
                            </div>
                            <hr className="my-3 border-gray-700" />
                            <div className="flex justify-between">
                                <div className="text-lg">Subtotal</div>
                                <div className="text-gray-300">
                                    $13.99/monthly
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <PlanCard data={null} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default PaymentModal