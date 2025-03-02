import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";

export default function DemosBlock() {
    return (
        <div className="grid justify-center md:py-28 mx-6">
            <div className="bg-grid-pattern">
                <motion.div
                    className="grid md:grid-cols-2 mx-10 md:mx-6 max-w-270 py-22 items-center justify-items-between gap-15"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid gap-6">
                    <h1 className="text-3xl md:text-5xl">Get work done.</h1>
                    <p className="text-lg md:text-2xl md:max-w-70">
                        Your personalized multilingual AI assistant, with web search,
                        uploads, and data connectors.
                    </p>
                    <div className="mt-2 md:mt-14">
                        <Button text="Discover le Chat" />
                    </div>
                    </div>
                    <Image
                    className="drop-shadow-lg justify-self-center w-80 lg:w-125"
                    src="/chart.webp"
                    alt="Chart demo"
                    width={200}
                    height={200}
                    />
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 mx-10 md:mx-6 max-w-270 py-22 md:pt-50 items-center justify-items-between gap-15"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid gap-6">
                    <h1 className="text-3xl md:text-5xl">Code faster.</h1>
                    <p className="text-lg md:text-2xl md:max-w-70">
                        Build faster with coding assistance across 80+ languages.
                    </p>
                    <div className="mt-2 md:mt-14">
                        <Button text="Discover le Chat" />
                    </div>
                    </div>
                    <Image
                    className="drop-shadow-lg justify-self-center w-80 lg:w-125"
                    src="/canvas.webp"
                    alt="Canvas demo"
                    width={200}
                    height={200}
                    />
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 mx-10 md:mx-6 max-w-270 py-22 md:pt-50 items-center justify-items-between gap-15"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid gap-6">
                    <h1 className="text-3xl md:text-5xl">Build AI-powered apps.</h1>
                    <p className="text-lg md:text-2xl md:max-w-70">
                        Build and deploy custom AI solutions with frontier models.
                    </p>
                    <div className="mt-2 md:mt-14">
                        <Button text="Discover le Chat" />
                    </div>
                    </div>
                    <Image
                    className="drop-shadow-lg justify-self-center w-80 lg:w-125"
                    src="/todo.webp"
                    alt="Todo demo"
                    width={200}
                    height={200}
                    />
                </motion.div> 
            </div>
        </div>
    )
}
