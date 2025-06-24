import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import lineArtDrawings from "/public/images/line-art-drawings-1.png";
import churchArtDrawings from "/public/images/church.png";
import localBarDrawings from "/public/images/local-bar.png";

export const ViewByAnima = (): JSX.Element => {
    const eventSchedule = [
        {
            time: "12:00",
            title: "Вінчання",
            location: "Церква Благовіщення Пресвятої Богородиці",
            address: "м. Городок, вул. Коцюбинського 5",
            mapUrl: "https://maps.app.goo.gl/BMjhuRugGYyDe1gS7",
            icon: churchArtDrawings,
            iconAlt: "Church",
        },
        {
            time: "14:00",
            title: "Святкування",
            location: 'Ресторан Рафаель',
            address: "вулиця Івана Гонти, 1а, Зубра, Львівська область",
            mapUrl: "https://maps.app.goo.gl/v6GpW5shbR44qkZh7",
            icon: localBarDrawings,
            iconAlt: "Local bar",
        }
    ];

    return (
        <div className="flex flex-col w-full items-start gap-10 ">
            <div className="w-full mt-1">
                <h1 className="w-full [font-family:'Playfair',Helvetica] font-semibold text-[#0f1010] text-4xl text-center tracking-[0] leading-normal">
                    Деталі
                </h1>
            </div>

            <div className="flex flex-col items-start gap-10 w-full">
                <Card className="w-full border-none shadow-none">
                    <CardContent className="flex flex-col items-start  p-0 w-full">
                        <h2 className="w-full [font-family:'Inter',Helvetica] font-medium text-2xl text-center text-[#0f100f] tracking-[0] leading-normal">
                            Дата весілля
                        </h2>

                        <div className="flex items-center justify-center w-full">
                            <div className="flex items-center justify-center">
                                <div className="w-[99px] text-center">
                  <span className="[font-family:'Playfair',Helvetica] font-normal text-[#0f100f] text-[32px] tracking-[0] leading-normal">
                    26
                  </span>
                                </div>

                                <div className="w-[99px] h-[29px] flex items-center justify-center border-r border-l border-[#0f1010]">
                  <span className="[font-family:'Playfair',Helvetica] font-normal text-2xl text-center text-[#0f100f] tracking-[0] leading-normal">
                    липня
                  </span>
                                </div>

                                <div className="w-[99px] text-center">
                  <span className="[font-family:'Playfair',Helvetica] font-normal text-[#0f100f] text-[32px] text-center tracking-[0] leading-normal">
                    2025
                  </span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <div className="flex justify-center mt-8">
                        <img
                            className="w-[150px] h-[114px]"
                            alt="Set botanical leaf"
                            src={lineArtDrawings}
                        />
                    </div>
                </Card>

                <Card className="w-full border-none shadow-none">
                    
                    <CardContent className="flex flex-col items-start gap-[30px] p-0 w-full">
                        <h2 className="w-full [font-family:'Inter',Helvetica] font-medium text-2xl text-center text-[#0f100f] tracking-[0] leading-normal">
                            План події
                        </h2>

                        <div className="flex flex-col items-start gap-10 w-full">
                            {eventSchedule.map((event, index) => (
                                <div
                                    key={index}
                                    className="flex items-start justify-between w-full"
                                >
                                    <img
                                        className="w-10 h-10"
                                        alt={event.iconAlt}
                                        src={event.icon}
                                    />

                                    <div className="flex flex-col w-[287px] items-start justify-center gap-2.5 pl-2.5 border-l border-[#0f1010]">
                                        <div className="flex items-center gap-5">
                      <span className="[font-family:'Playfair',Helvetica] font-normal text-[32px] text-center whitespace-nowrap text-[#0f100f] tracking-[0] leading-normal">
                        {event.time}
                      </span>

                                            <span className="[font-family:'Inter',Helvetica] font-medium text-base text-center whitespace-nowrap text-[#0f100f] tracking-[0] leading-normal">
                        {event.title}
                      </span>
                                        </div>

                                        {(event.location || event.address) && (
                                            <div className="[font-family:'Inter',Helvetica] font-normal text-base text-[#0f100f] tracking-[0] leading-normal">
                                                {event.location}
                                                <br />
                                                {event.location && event.address && (
                                                    <>
                                                        <br />
                                                  
                                                    </>
                                                )}
                                                <a
                                                    href={event.mapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#0f100f] underline hover:text-[#b18c6e] transition-colors duration-200"
                                                >
                                                    {event.address}
                                                </a>
                                               
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    <div className="flex flex-col items-center w-full mt-8">
                        <h2 className="w-full [font-family:'Inter',Helvetica]  font-medium text-2xl text-center text-[#0f100f] tracking-[0] leading-normal">
                            Кольори весілля
                        </h2>
                        <br/>
                    <div className="flex flex-row gap-4 justify-center">
                        <span className="w-[60px] h-[60px] rounded-full border border-white" style={{ backgroundColor: '#9B7B6C' }} />
                        <span className="w-[60px] h-[60px] rounded-full border border-white" style={{ backgroundColor: '#A9907D' }} />
                        <span className="w-[60px] h-[60px] rounded-full border border-white" style={{ backgroundColor: '#D3BBA1' }} />
                        <span className="w-[60px] h-[60px] rounded-full border border-white" style={{ backgroundColor: '#E3D1C3' }} />
                        <span className="w-[60px] h-[60px] rounded-full border border-white" style={{ backgroundColor: '#F0F0EE' }} />
                     </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
