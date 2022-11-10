import React from 'react';

const Offer = () => {
    return (
        <div style={{ "backgroundImage": `url(https://images.unsplash.com/photo-1667493534914-072f3b967f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)`, "height": "100%", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }} className='my-3 rounded-lg p-3 '>
            <div>
                <h1 className='text-3xl font-bold  text-red-500 rounded-t-xl text-center'>OFFER ........... </h1>
            </div>
            <div>
                <h1 className='text-3xl font-bold  text-red-500 rounded-t-xl text-center'>More offers are coming soon, keep an eye on our website</h1>
            </div>
            <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 text-red-500">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" />50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free shipping! Use code:</span>
                            <span className="font-bold text-lg">MAMBA</span>
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center h-96'>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>

                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Offer;