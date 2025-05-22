import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameByAnima = (): JSX.Element => {
    // Data for countdown units
    const [timeLeft, setTimeLeft] = React.useState(() => {
        const targetDate = new Date("2025-06-14T12:00:00");
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();
        return diff > 0 ? diff : 0;
    });

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => (prev > 1000 ? prev - 1000 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const getTimeParts = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return [
            { value: String(days).padStart(2, "0"), label: "день" },
            { value: String(hours).padStart(2, "0"), label: "год" },
            { value: String(minutes).padStart(2, "0"), label: "хв" },
            { value: String(seconds).padStart(2, "0"), label: "сек" },
        ];
    };

    const countdownData = getTimeParts(timeLeft);

    return (
       <div className="flex flex-col w-full max-w-[363px] mx-auto items-center gap-4 px-2 sm:px-0 sm:items-start sm:gap-5">
            <h3 className="w-full text-center font-normal text-xl sm:text-base text-[#0f100f]">
                До весілля лишилось
            </h3>
        
            <Card
                className="w-full max-w-full sm:max-w-2xl border-t-0 border-b-0 border-r border-[#0f1010] rounded-none shadow-none flex justify-center px-1 sm:px-4 md:px-8"
            >
                <CardContent className="flex items-center justify-between gap-1 sm:gap-4 md:gap-8 py-2 sm:py-4 w-full transition-all">
                    {countdownData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-0.5 sm:gap-1 flex-1"
                        >
                            <div className="w-full font-['Playfair',Helvetica] font-normal text-[#0f100f] text-3xl sm:text-4xl md:text-[40px] text-center leading-tight sm:leading-normal transition-all">
                                {item.value}
                            </div>
                            <div className="w-full font-['Inter',Helvetica] font-normal text-[#0f100f] text-xl sm:text-sm md:text-lg text-center leading-tight sm:leading-normal transition-all">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};
