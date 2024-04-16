import React from 'react';
import Quote from './quote.png';

function ReviewCard({_id, name, message, userPhoto, loadReview}) {
    return (
        <div className="max-w-md mx-auto bg-blue-50 border rounded-xl shadow-md overflow-hidden border-t">
            <div className="md:flex md:flex-row md:items-center md:justify-start">
                <div className="md:flex-shrink-0">
                    {/* <img className="h-12 w-12 md:w-12 md:h-auto" src={Quote} alt="quote" /> */}
                </div>
                <div className="p-4 md:p-6">
                    <div className="uppercase tracking-wide text-xs md:text-sm text-indigo-500 font-semibold">Review</div>
                    <p className="mt-2 text-sm md:text-base text-gray-700">{message}</p>
                    <div className="mt-4 flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 md:h-12 md:w-12 rounded-full" src={userPhoto} alt="user" />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm md:text-base font-medium text-gray-900">{name}</div>
                            <div className="text-xs md:text-sm text-gray-500">User</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;
