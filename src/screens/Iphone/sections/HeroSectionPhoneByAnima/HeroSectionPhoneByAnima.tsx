import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import topDrawings from "/public/images/top.jpg";

export const HeroSectionPhoneByAnima = (): JSX.Element => {
    return (
        <Card className="w-full relative overflow-hidden border-none rounded-none">
            <CardContent className="p-0 relative">
                <img
                    className="w-full h-auto object-cover"
                    alt="Wedding couple"
                    src={topDrawings}
                />
<div className="absolute inset-0 flex flex-col justify-between p-4">
    <div className="w-full mt-32 [font-family:'Playfair',Helvetica] font-extrabold text-neutral-100 text-4xl text-center tracking-[0] leading-normal">
        Микола &amp; Соломія
    </div>

</div>

            </CardContent>
   
        </Card>
    );
};
