'use client';

import { useActionState } from "react";
import { createMeeting, type State } from "@/lib/actions";

const initialState: State = {
    message: null,
    errors: {}
};

export default function CreateMeetingForm() {

    const [state, formAction, isPending] = useActionState(createMeeting, initialState);

    return (
        <form action={formAction}
        className="space-y-4">

             <label htmlFor="date"
             className="block text-gray-200 font-medium mb-1">
                Date
            </label>
                
            <input
                id="date"
                name="date"
                type="date"
                required
                aria-describedby="date-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
            />

            <div id="date-error" aria-live="polite" aria-atomic="true" className="text-red-400 text-sm mt-1">
                {state.errors?.date?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

            <label htmlFor="meetingType"
            className="block text-gray-200 font-medium mb-1">
                Meeting Type
            </label>

            <select
            
            id="meetingType"
            name="meetingType"
            required
            aria-describedby="meetingType-error"
            className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
        >

            <option value="regular">
                Regular
            </option>

            <option value="testimony">
                Testimony
            </option>

            <option value="stake">
                Stake
            </option>

            <option value="general">
                General
            </option>

            <option value="special">
                Special
            </option>

                </select>

                <div id="meetingType-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.meetingType?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                <label htmlFor="presiding"
                    className="block text-gray-200 font-medium mb-1">
                        Presiding
                </label>

                <input
                id="presiding"
                name="presiding"
                type="text"
                required
                aria-describedby="presiding-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="presiding-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.presiding?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                <label htmlFor="conducting"
                className="block text-gray-200 font-medium mb-1">
                        Conducting
                </label>

                <input
                id="conducting"
                name="conducting"
                type="text"
                required
                aria-describedby="conducting-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="conducting-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.conducting?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                <label htmlFor="openingHymnNumber"
                className="block text-gray-200 font-medium mb-1">
                Opening Hymn Number
                </label>

                <input
                id="openingHymnNumber"
                name="openingHymnNumber"
                type="number"
                aria-describedby="openingHymnNumber-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

            <div id="openingHymnNumber-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.openingHymnNumber?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                
                 <label htmlFor="openingHymnName"
                className="block text-gray-200 font-medium mb-1">
                Opening Hymn Name
                </label>

                 <input
                id="openingHymnName"
                name="openingHymnName"
                type="text"
                aria-describedby="openingHymnName-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                 />

                 <div id="openingHymnName-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.openingHymnName?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                 <label htmlFor="openingPrayer"
                className="block text-gray-200 font-medium mb-1">
                Opening Prayer
                </label>
        
                <input
                id="openingPrayer"
                name="openingPrayer"
                type="text"
                required
                aria-describedby="openingPrayer-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="openingPrayer-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.openingPrayer?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                  <label htmlFor="sacramentHymn"
                className="block text-gray-200 font-medium mb-1">
                Sacrament Hymn Number
                </label>

                <input
                id="sacramentHymnNumber"
                name="sacramentHymnNumber"
                type="number"
                aria-describedby="sacramentHymnNumber-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="sacramentHymnNumber-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.sacramentHymnNumber?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                <label htmlFor="sacramentHymnName"
                className="block text-gray-200 font-medium mb-1">
                Sacrament Hymn Name
                </label>

                <input
                id="sacramentHymnName"
                name="sacramentHymnName"
                type="text"
                aria-describedby="sacramentHymnName-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="sacramentHymnName-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.sacramentHymnName?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                 <label htmlFor="speakers"
                className="block text-gray-200 font-medium mb-1">
                        Speakers
                </label>

                <input
                id="speakers"
                name="speakers"
                type="text"
                aria-describedby="speakers-error"
                placeholder="Joseph, Jane, Michael"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="speakers-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.speakers?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                <label htmlFor="announcements"
                className="block text-gray-200 font-medium mb-1">
                        Announcements
                </label>

                <input
                id="announcements"
                name="announcements"
                aria-describedby="announcements-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="announcements-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.announcements?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                <label htmlFor="wardBusiness"
                className="block text-gray-200 font-medium mb-1">
                        Ward Business
                </label>

                <input
                id="wardBusiness"
                name="wardBusiness"
                aria-describedby="wardBusiness-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="wardBusiness-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.wardBusiness?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                <label htmlFor="stakeBusiness"
                className="block text-gray-200 font-medium mb-1">
                        Stake Business
                </label>

                <select
                id="stakeBusiness"
                name="stakeBusiness"
                aria-describedby="stakeBusiness-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500">

                    <option value="false">
                        No</option>

                    <option value="true">
                        Yes</option>
                </select>

                <div id="stakeBusiness-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.stakeBusiness?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                <label htmlFor="closingHymnNumber"
                className="block text-gray-200 font-medium mb-1">
                        Closing Hymn Number
                </label>

                <input
                id="closingHymnNumber"
                name="closingHymnNumber"
                type="number"
                aria-describedby="closingHymnNumber-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="closingHymnNumber-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.closingHymnNumber?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                 <label htmlFor="closingHymnName"
                className="block text-gray-200 font-medium mb-1">
                Closing Hymn Name
                </label>

                <input
                id="closingHymnName"
                name="closingHymnName"
                type="text"
                aria-describedby="closingHymnName-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="closingHymnName-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.closingHymnName?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>
                
                <label htmlFor="closingPrayer"
                className="block text-gray-200 font-medium mb-1">
                Closing Prayer
                </label>
        
                <input
                id="closingPrayer"
                name="closingPrayer"
                type="text"
                required
                aria-describedby="closingPrayer-error"
                className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:ring-2 focus:ring-blue-500"
                />

                <div id="closingPrayer-error" aria-live="polite" className="text-red-400 text-sm mt-1">
                {state.errors?.closingPrayer?.map(error => (
                    <p key={error}>{error}</p>
                ))}</div>

                {state.message && (
                    <p className="text-red-400 text-sm">
                    {state.message}
                    </p>
                )}

                <button type="submit"
                    disabled={isPending}
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold py-2 rounded-md transition">
                    {isPending ? "Saving..." : "Create Meeting"}
                </button>


        </form>


    );
}
