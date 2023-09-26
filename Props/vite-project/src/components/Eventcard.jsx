import "../index.css";
import Card from './Card';

export function Upcoming() {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="shrink-0 w-1/3">
                <div className="text-2xl font-bold text-[#F85E9F] tracking-widest mb-4">
                    UPCOMING EVENTS
                </div>
                <div className="text-4xl font-bold w-4/5">
                    Our top value categories for you
                </div>
            </div>
            <div className="flex flex-col m-auto p-auto h-full w-2/3">
                <div className="flex overflow-x-scroll py-2 h-full ">
                    <div className="flex flex-nowrap gap-6 items-center">
                        {[...Array(7)].map((_, index) => {
                            return (
                                <Card
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upcoming;
