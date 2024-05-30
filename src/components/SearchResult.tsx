import React from 'react';

export interface SearchResultProps {
    data: {
        name: string;
        flag: string;
        countryCode: string;
    }
}

function SearchResult({data}: SearchResultProps) {
    return (
        <div className={"rounded-md border-2 border-white/30 p-5"}>
            <ul className={"list-disc px-5"}>
                <li>Name: {data.name}</li>
                <li>Flag: {data.flag}</li>
                <li>Country code: {data.countryCode}</li>
            </ul>
        </div>
    );
}

export default SearchResult;
