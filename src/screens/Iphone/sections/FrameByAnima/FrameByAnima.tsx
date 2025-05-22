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
            { value: String(hours).padStart(2, "0"), label: "год." },
            { value: String(minutes).padStart(2, "0"), label: "хв." },
            { value: String(seconds).padStart(2, "0"), label: "сек." },
        ];
    };

    const countdownData = getTimeParts(timeLeft);

    return (
        <div className="flex flex-col w-full max-w-[363px] items-start gap-5">
            <h3 className="w-full text-center font-normal text-base text-[#0f100f]">
                До весілля лишилось
            </h3>

<Card className="w-full border-t-0 border-b-0 border-l border-r border-[#0f1010] rounded-none shadow-none sm:px-2 px-0 flex justify-center" style={{ marginLeft: 15 }}>
                <CardContent className="flex items-center justify-center gap-[38px] px-[33px] py-4">
                    {countdownData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-[33px] items-center gap-3"
                        >
                            <div className="w-full mt-[-1px] font-['Playfair',Helvetica] font-normal text-[#0f100f] text-[32px] text-center leading-normal">
                                {item.value}
                            </div>
                            <div className="w-full font-['Inter',Helvetica] font-normal text-[#0f100f] text-sm text-center leading-normal">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};
