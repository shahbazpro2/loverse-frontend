/* eslint-disable @next/next/no-img-element */
import Coin from "@components/ui/Coin";
import {
    Dialog,
    DialogContent
} from "@components/ui/dialog";
import { openCloseModalAtom, useModalState } from "@jotai/modal";
import { useSetAtom } from "jotai";

export const plansKey = "plansKey"

export const PlanCard = ({ data }) => {
    return (
        <div className="rounded-2xl p-5 bg-black">
            <div className="flex gap-4">
                <img src="/images/planicon.png" alt="coin" className="w-14 h-14" />
                <div>
                    <div className="text-base text-gray-400">for individual</div>
                    <div className="text-3xl font-bold">Basic</div>
                </div>
            </div>
            <div className="text-base my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt fuga.
            </div>
            <div className="text-4xl font-bold my-4">$4.99 <span className="text-xl">/month</span></div>
            <div className="my-2">What's included</div>
            <div className="space-y-3">
                <div className="flex gap-3 text-gray-400">
                    <img src="/images/check.png" alt="check" className="w-5 h-5" />
                    <div>40 credits one time only</div>
                </div>
                <div className="flex gap-3 text-gray-400">
                    <img src="/images/check.png" alt="check" className="w-5 h-5" />
                    <div>40 credits one time only</div>
                </div>
                <div className="flex gap-3 text-gray-400">
                    <img src="/images/check.png" alt="check" className="w-5 h-5" />
                    <div>40 credits one time only</div>
                </div>
                <div className="flex gap-3 text-gray-400">
                    <img src="/images/check.png" alt="check" className="w-5 h-5" />
                    <div>40 credits one time only</div>
                </div>
                <div className="flex gap-3 text-gray-400">
                    <img src="/images/check.png" alt="check" className="w-5 h-5" />
                    <div>40 credits one time only</div>
                </div>
                <div className="flex gap-3 text-gray-400">
                    <img src="/images/check.png" alt="check" className="w-5 h-5" />
                    <div>40 credits one time only</div>
                </div>
                <button className="rounded bg-white text-black text-center py-1.5 flex justify-center items-center gap-2 px-3 w-full">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

const PlansModal = () => {
    const openCloseModal = useSetAtom(openCloseModalAtom)
    const modalVal = useModalState(plansKey)


    const { status } = modalVal || {}
    return (
        <Dialog open={status} onOpenChange={val => openCloseModal({
            key: plansKey,
            status: val
        })} >
            <DialogContent className="max-w-6xl dark:bg-black/20  py-10">
                <div className="text-3xl w-[550px] m-auto text-center">Unleash Your Imagination with Our Loverse Packages!</div>
                <div className="mt-5 grid grid-cols-3 gap-5">
                    <PlanCard data={null} />
                    <PlanCard data={null} />
                    <PlanCard data={null} />

                </div>
            </DialogContent>
        </Dialog>

    )
}

export default PlansModal