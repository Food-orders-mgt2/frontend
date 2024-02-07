import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../Style/SearchPage.css';

export default function SearchPage() {
    return (
        <>
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Rechercher..."
                    className="search-input"
                />
                <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </>
    );
};