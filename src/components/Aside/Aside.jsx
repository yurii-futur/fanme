import React from 'react';

const Aside = () => {
    return (
        <div class="aside max-w-sm hidden flex-grow md:flex flex-col">
            <div className="aside__top flex justify-between items-center">
                <div className="aside__top-profile flex items-center">
                    <img src="" alt="" />
                    <div>
                        <h3>Alex Lundqvist</h3>
                        <p>
                            alexlundqvist
                        </p>
                    </div>
                </div>
                <p class="text-magicBlue">Log out</p>
            </div>
            <div className="aside__heading flex justify-between items-center">
                <h3 className="text-grat-400">Suggestions</h3>
                <div className="aside__heading-arrows">
                    <img src="" alt="" /><img src="" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Aside;