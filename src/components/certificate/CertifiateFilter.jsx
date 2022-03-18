import React from 'react';
import Button from "react-bootstrap/Button";
import {certificateCategories} from "../../data/certificateData";

const CertificateFilter = ({currentFilter, changedFilter}) => {
    const handleClick = newFilter => {
        changedFilter(newFilter);
    }


    return (
        <>

            {certificateCategories.map((c) => (
                <Button Style={'margin:5px'} variant="primary"
                        onClick={() => handleClick(c.name)}
                        key={c.name}
                        className={currentFilter===c.name?'active':''}

                >
                    {c.icon}

                </Button>
            ))}


        </>
    );
};

export default CertificateFilter;
