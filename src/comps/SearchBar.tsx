import * as React from "react"
import { FC, useState } from "react"

export const SearchBar = (): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    return (
        <input
            type="text"
            value={search}
            onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setSearch(ev.target.value)}
        />
    );
};