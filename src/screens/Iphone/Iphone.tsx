import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { FrameByAnima } from "./sections/FrameByAnima";
import { HeroSectionPhoneByAnima } from "./sections/HeroSectionPhoneByAnima/HeroSectionPhoneByAnima";
import { ViewByAnima } from "./sections/ViewByAnima";
import topArtDrawings from "/public/images/top-art-drawings.png";
import makArtDrawings from "/public/images/mak-drawings.png";
import botanicalArtDrawings from "/public/images/botanical-line-art-drawings-3.png";
import endDrawings from "/public/images/end.png";

export const Iphone = (): JSX.Element => {
    return (
        <div className="bg-[#f2e8e1] flex flex-col items-center w-full">
            
            <div className="bg-[#f2e8e1] w-full max-w-[393px] overflow-hidden relative">
                {/* Hero Section */}
                
                <section className="w-full relative">
                    <HeroSectionPhoneByAnima />
                    <div className="w-full md-24 [font-family:'Inter',Helvetica] font-medium text-[#0f1010] text-xl text-center tracking-[0] leading-normal" style={{ marginTop: '40px',marginBottom: '60px' }}>
                        Запрошуємо на наше весілля!
                    </div>
                  <div className="relative flex justify-end"  style={{ marginTop: '180px'}}>
                        <img
                            className="w-[300px] h-[388px] mt-[-200px]"
                            alt="Set botanical leaf"
                            src={topArtDrawings}
                        />
                    </div>
                </section>

                {/* Frame Section */}
                <section className="w-full relative">
                    <FrameByAnima />
                </section>

                {/* Decorative Elements */}
                <div className="w-full relative">
                    <div className="relative h-[370px] overflow-hidden">
                        <img
                            className="absolute w-[352px] h-[356px] left-[-25px]"
                            alt="Set botanical leaf"
                            src={makArtDrawings}
                        />
                    </div>
                </div>

                {/* View Section */}
                <section className="w-full px-4 relative">
                    <ViewByAnima />

                </section>

                {/* Closing Section */}
                <section className="w-full px-4 mt-36 relative">
                    <Card className="border-none shadow-none">
                        <CardContent className="p-0 relative">
                            <div className="font-normal text-base text-[#0f100f] mb-8 max-w-[265px] relative" style={{ top: '-50px' }}>
                                Будемо щасливі розділити цей особливий день з вами!
                                <br />
                                <br />
                                До зустрічі!
                            </div>

                            <div className="relative">
                                <img
                                    className="absolute top-[-225px] right-[-15px] w-[250px] z-10"
                                    alt="Decorative flower"
                                    src={botanicalArtDrawings}
                                />
                                <div className="relative flex justify-center">
                                    <div className="relative w-[262px]">
                                        <div className="absolute inset-0 rounded-t-full border-2 border-solid border-[#0f1010]" style={{ top: '-30px', left: '30px', right: '-30px', bottom: '30px' }} />
                                        <img
                                            className="w-full h-auto object-cover rounded-t-[170px]"
                                            alt="Wedding photo"
                                            src={endDrawings}
                                        />
                                    </div>
                                </div>
                                <div className="h-12" />
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
};
