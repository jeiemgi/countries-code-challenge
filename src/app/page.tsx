"use client"

import Input from "~/components/Input";
import Button from "~/components/Button";
import SearchResult, {SearchResultProps} from "~/components/SearchResult";
import {FormEvent, useCallback, useRef, useState} from "react";
import {fetchCountry} from "~/js/api";

export default function Home() {
    const searchInputRef = useRef(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState<SearchResultProps["data"]>()


    const onValueChange = (event: FormEvent<HTMLInputElement>) => {
        setLoading(false);
        setSearchResult(undefined)
        const target = event.target as HTMLInputElement;
        setSearchValue(target.value);
    }

    const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (loading) return;
        setLoading(true);
        try {
            const res = await fetchCountry(searchValue)
            const data = res.data[0];
            setSearchResult({
                flag: data.flag,
                name: data.name.common,
                countryCode: data.cca2,
            })
        } catch (e) {
            setError(true)
            console.error("Error:", e)
        } finally {
            setLoading(false);
        }
    }, [loading, searchValue])


    return (
        <main className="min-h-screen items-center grid grid-cols-12 gap-x-4">
            <div className={"col-span-4 col-start-5"}>
                <form onSubmit={onSubmit} className={"mb-10 flex flex-row gap-4 relative"}>
                    <Input
                        autoFocus
                        ref={searchInputRef}
                        value={searchValue}
                        onChange={onValueChange}
                        className={"w-full"}
                        placeholder={"Search a country ..."}
                    />
                    <Button type={"submit"} onClick={onSubmit} disabled={!searchValue || loading}>
                        {loading ? "Sending" : "Send"}
                    </Button>
                </form>

                {loading ? "Loading ..." :
                    error ? "We couldn't find results." :
                        searchResult ? <SearchResult data={searchResult}/> :
                            null}
            </div>
        </main>
    );
}
