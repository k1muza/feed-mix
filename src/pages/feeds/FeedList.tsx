import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { getFeeds } from "../../api";
import { Feed } from "../../interfaces/feed";

function FeedList() {
    const [feeds, setFeeds] = useState<Feed[]>([]);

    const navClasses = clsx(
        "flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
    )

    useEffect(() => {
        getFeeds()
            .then(data => {
                setFeeds(data)
            });
    }, []);

    return (
        <>
            <div className="flex flex-col w-80 border-r border-gray-300">
                <button className="relative text-sm focus:outline-none group">
                    <div className="flex items-center w-full h-16 px-8 border-b border-gray-300 hover:bg-gray-300">
                        <i className="fa fa-sack-xmark mr-4"></i>
                        <span className="font-bold">Feeds</span>
                    </div>
                </button>
                <div className="flex flex-col flex-grow p-4 overflow-auto">
                    {feeds.map((feed) => (
                        <NavLink 
                            to={`/feeds/${feed.id}`}
                            key={feed.id}
                            className={({ isActive, isPending }) =>
                                clsx(navClasses, {
                                    pending: isPending,
                                    'bg-gray-300': isActive,
                                })}>
                            <p className='px-4'>{feed.name}</p>
                        </NavLink>
                    ))}
                    <a className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300" href="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="ml-2 leading-none">New Feed</span>
                    </a>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default FeedList;
